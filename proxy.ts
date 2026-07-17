import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isProtectedRoute = createRouteMatcher([
  "/checkout(.*)",
  "/wishlist(.*)",
  "/dashboard(.*)",
  "/profile-settings(.*)",
  "/orders(.*)",
  "/order-success(.*)",
  "/order-tracking(.*)",
])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
}
