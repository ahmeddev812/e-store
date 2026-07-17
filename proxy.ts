import { clerkMiddleware } from "@clerk/nextjs/server"

const protectedPaths = [
  "/checkout",
  "/wishlist",
  "/dashboard",
  "/profile-settings",
  "/orders",
  "/order-success",
  "/order-tracking",
]

export default clerkMiddleware(async (auth, req) => {
  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
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
