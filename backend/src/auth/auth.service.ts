import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { LoginDto } from './dto/login.dto';
import { DatabaseService } from '../database/database.service';
import { MailService } from '../mail/mail.service';

function getPasswordError(password: string): string | null {
  if (password.length < 6) return 'Password must be at least 6 characters.';
  if (!/[A-Z]/.test(password)) return 'Password must contain at least one capital letter.';
  if (!/[^A-Za-z0-9]/.test(password)) return 'Password must contain at least one special character.';
  return null;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly databaseService: DatabaseService,
    private readonly mailService: MailService,
  ) {}

  async login(dto: LoginDto) {
    const result = await this.databaseService.query(
      'SELECT * FROM admins WHERE email = $1',
      [dto.email],
    );

    const admin = result.rows[0];

    if (!admin) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const passwordMatches = await bcrypt.compare(
      dto.password,
      admin.password_hash,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: admin.id, email: admin.email, role: 'admin' };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      accessToken,
      user: { email: admin.email, role: 'admin' },
    };
  }

  async forgotPassword(email: string) {
    const result = await this.databaseService.query(
      'SELECT * FROM admins WHERE email = $1',
      [email],
    );

    const admin = result.rows[0];

    if (!admin) {
      return { message: 'If that email exists, a reset link has been sent.' };
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 60 * 60 * 1000);

    await this.databaseService.query(
      'UPDATE admins SET reset_token = $1, reset_token_expiry = $2 WHERE id = $3',
      [token, expiry, admin.id],
    );

    const frontendUrl = process.env.FRONTEND_URL;
    const resetLink = `${frontendUrl}/reset-password?token=${token}`;

    await this.mailService.sendPasswordResetEmail(admin.email, resetLink);

    return { message: 'If that email exists, a reset link has been sent.' };
  }

  async resetPassword(token: string, newPassword: string) {
    const passwordError = getPasswordError(newPassword);
    if (passwordError) {
      throw new BadRequestException(passwordError);
    }

    const result = await this.databaseService.query(
      'SELECT * FROM admins WHERE reset_token = $1',
      [token],
    );

    const admin = result.rows[0];

    if (!admin) {
      throw new UnauthorizedException('Invalid or expired reset link');
    }

    if (!admin.reset_token_expiry || new Date(admin.reset_token_expiry) < new Date()) {
      throw new UnauthorizedException('Invalid or expired reset link');
    }

    // Don't let the "new" password just be the old one again.
    const sameAsOld = await bcrypt.compare(newPassword, admin.password_hash);
    if (sameAsOld) {
      throw new BadRequestException('New password must be different from your current password.');
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 10);

    await this.databaseService.query(
      'UPDATE admins SET password_hash = $1, reset_token = NULL, reset_token_expiry = NULL WHERE id = $2',
      [newPasswordHash, admin.id],
    );

    return { message: 'Password has been reset successfully.' };
  }

  async updateSettings(
    adminId: number,
    currentPassword: string,
    newEmail?: string,
    newPassword?: string,
  ) {
    const result = await this.databaseService.query(
      'SELECT * FROM admins WHERE id = $1',
      [adminId],
    );

    const admin = result.rows[0];

    if (!admin) {
      throw new UnauthorizedException('Admin not found');
    }

    const passwordMatches = await bcrypt.compare(
      currentPassword,
      admin.password_hash,
    );

    if (!passwordMatches) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    // Reject a "new" email that's identical to the current one.
    if (newEmail && newEmail === admin.email) {
      throw new BadRequestException(
        'That is already your current email. Enter a different email or leave it blank.',
      );
    }

    // If someone else already uses that email, don't let it be claimed.
    if (newEmail && newEmail !== admin.email) {
      const existing = await this.databaseService.query(
        'SELECT id FROM admins WHERE email = $1 AND id != $2',
        [newEmail, adminId],
      );
      if (existing.rows.length > 0) {
        throw new BadRequestException('That email is already in use.');
      }
    }

    if (newPassword) {
      const passwordError = getPasswordError(newPassword);
      if (passwordError) {
        throw new BadRequestException(passwordError);
      }

      // Reject a "new" password that's identical to the current one.
      const sameAsCurrent = await bcrypt.compare(newPassword, admin.password_hash);
      if (sameAsCurrent) {
        throw new BadRequestException(
          'That is already your current password. Enter a different password or leave it blank.',
        );
      }
    }

    const updates: string[] = [];
    const values: any[] = [];
    let paramIndex = 1;

    if (newEmail && newEmail !== admin.email) {
      updates.push(`email = $${paramIndex++}`);
      values.push(newEmail);
    }

    if (newPassword) {
      const newPasswordHash = await bcrypt.hash(newPassword, 10);
      updates.push(`password_hash = $${paramIndex++}`);
      values.push(newPasswordHash);
    }

    if (updates.length === 0) {
      return { message: 'Nothing to update.' };
    }

    values.push(adminId);
    await this.databaseService.query(
      `UPDATE admins SET ${updates.join(', ')} WHERE id = $${paramIndex}`,
      values,
    );

    return { message: 'Settings updated successfully.' };
  }
}