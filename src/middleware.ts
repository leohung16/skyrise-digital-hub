import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const auth = request.headers.get("authorization");
    const user = process.env.ADMIN_USER || "";
    const pass = process.env.ADMIN_PASS || "";
    const valid = `Basic ${Buffer.from(`${user}:${pass}`).toString("base64")}`;

    if (!auth || auth !== valid) {
      return new NextResponse("Authentication required", {
        status: 401,
        headers: {
          "WWW-Authenticate": "Basic realm=Secure Area",
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};


