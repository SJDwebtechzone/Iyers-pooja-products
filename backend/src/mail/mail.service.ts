import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_HOST'),
      port: parseInt(this.configService.get<string>('SMTP_PORT') ?? '587', 10),
      secure: false,
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
    });
  }

  async sendPasswordResetEmail(toEmail: string, resetLink: string) {
    await this.transporter.sendMail({
      from: `"Iyer's Pooja Products" <${this.configService.get<string>('SMTP_USER')}>`,
      to: toEmail,
      subject: 'Reset your admin password',
      html: `
        <p>You requested a password reset.</p>
        <p><a href="${resetLink}">Click here to reset your password</a></p>
        <p>This link will expire in 1 hour. If you didn't request this, you can ignore this email.</p>
      `,
    });
  }

  /**
   * Confirmation email sent to the customer after they submit an order.
   * Contains only the details the customer themselves entered — never any
   * bank or payment credentials.
   */
  async sendOrderConfirmationEmail(order: {
    toEmail: string;
    name: string;
    orderId: number;
    packageName: string | null;
    preferredDate: string;
    address: string;
    mobile: string;
  }) {
    const escape = (value: string) =>
      String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    const formattedDate = (() => {
      // `2026-09-10` alone parses as UTC midnight, which renders as the previous
      // day for any server behind UTC. Appending a time forces local parsing.
      const parsed = new Date(`${order.preferredDate}T00:00:00`);
      if (Number.isNaN(parsed.getTime())) return escape(order.preferredDate);
      return parsed.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    })();

    const row = (label: string, value: string) => `
      <tr>
        <td style="padding:8px 0;color:#6B5A4E;font-size:14px;width:170px;">${escape(label)}</td>
        <td style="padding:8px 0;color:#2B0C14;font-size:14px;font-weight:600;">${escape(value)}</td>
      </tr>`;

    await this.transporter.sendMail({
      from: `"Iyer's Pooja Products" <${this.configService.get<string>('SMTP_USER')}>`,
      to: order.toEmail,
      subject: `Order confirmation #${order.orderId} — Iyer's Pooja Products`,
      html: `
        <div style="background:#FBF6EE;padding:32px 16px;font-family:Georgia,'Times New Roman',serif;">
          <div style="max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E4D7C3;border-radius:16px;overflow:hidden;">

            <div style="background:#5A121D;padding:24px 28px;text-align:center;">
              <div style="color:#F3D78A;font-size:12px;letter-spacing:2px;text-transform:uppercase;">
                Iyer&rsquo;s Pooja Products
              </div>
              <div style="color:#FFFFFF;font-size:24px;margin-top:8px;">
                Your order is confirmed
              </div>
            </div>

            <div style="padding:28px;">
              <p style="color:#3A2226;font-size:15px;line-height:1.6;margin:0 0 20px;">
                Namaste ${escape(order.name)},
              </p>

              <p style="color:#55463E;font-size:14px;line-height:1.7;margin:0 0 24px;">
                Thank you for your order. We have received your request and our team
                will contact you shortly to confirm the muhurtham and arrangements.
              </p>

              <div style="background:#FBF6EE;border:1px solid #EFE3CF;border-radius:12px;padding:18px 20px;">
                <div style="color:#8A1C2B;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;">
                  Order Summary
                </div>
                <table style="width:100%;border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;">
                  ${row('Order Number', `#${order.orderId}`)}
                  ${order.packageName ? row('Package', order.packageName) : ''}
                  ${row('Preferred Date', formattedDate)}
                  ${row('Name', order.name)}
                  ${row('Mobile', order.mobile)}
                  ${row('Address', order.address)}
                </table>
              </div>

              <p style="color:#6E584D;font-size:13px;line-height:1.7;margin:24px 0 0;">
                If any of these details are incorrect, simply reply to this email and
                we will update your order.
              </p>
            </div>

            <div style="background:#FBF6EE;border-top:1px solid #EFE3CF;padding:18px 28px;text-align:center;">
              <div style="color:#8A7466;font-size:12px;font-family:Arial,Helvetica,sans-serif;">
                With devotion, Iyer&rsquo;s Pooja Products
              </div>
            </div>

          </div>
        </div>
      `,
    });
  }
}
