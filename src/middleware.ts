import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // 기본 페이지
  url.pathname = "/home"

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(url)
  }
}
