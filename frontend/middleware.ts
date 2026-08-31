import { NextRequest, NextResponse } from "next/server";

// Runs before any matched route loads. Checks for the auth cookie set by
// the backend's /auth/login endpoint. This only checks that a token
// *exists* — it doesn't verify the signature (that happens on the backend
// via JwtAuthGuard for actual API calls). Good enough to keep casual
// visitors off /dashboard; don't treat this alone as your only security layer.
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirectTo", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};