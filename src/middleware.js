import { NextResponse } from 'next/server'
 
export function middleware(request) {
  let cookies = request.cookies.get('next-token')
  
  const user = true;
  // return NextResponse.rewrite(new URL('/blog', request.url))
  if (!user || !cookies){
    return NextResponse.redirect(new URL('/meals', request.url))
  }
  else {
    return NextResponse.next()
  }
}
 
export const config = {
  matcher: ['/about', '/contact'],
}