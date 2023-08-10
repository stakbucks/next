import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/dist/server/api-utils";

export function middleware(request: NextRequest) {
  console.log("미들웨어 체크중");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 캐치 성공");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  matcher: ["/products/:path*"],
};
