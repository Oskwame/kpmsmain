import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isPagesRoute = createRouteMatcher(['/mainpage(.*)', '/foe(.*)' , '/fast(.*)' , '/fbms(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isPagesRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};