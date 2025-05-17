import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    '/api/movies/:path*',
    '/api/lists/:path*',
    '/api/comments/:path*',
    '/movie/:path*',
    '/bhutanese/:path*'
  ],
}; 