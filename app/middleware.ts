import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hasAccess = request.cookies.get('site_access')?.value
  const { pathname } = request.nextUrl

  // Don't block the login page or internal Next.js files
  if (pathname === '/login' || pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  // If password isn't set to 9799kr, redirect to login
  if (hasAccess !== '9799kr') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}