import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hasAccess = request.cookies.get('site_access')?.value
  const { pathname } = request.nextUrl

  if (pathname === '/login' || pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next()
  }

  if (hasAccess !== '9799kr') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
