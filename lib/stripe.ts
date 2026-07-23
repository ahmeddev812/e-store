export function getStripeImageUrl(thumbnail: string, request: Request): string | undefined {
  if (thumbnail.startsWith("https://")) return thumbnail

  if (thumbnail.startsWith("/")) {
    const envUrl = process.env.NEXT_PUBLIC_BASE_URL
    if (envUrl) {
      const clean = envUrl.replace(/\/+$/, "")
      return `${clean}${thumbnail}`
    }

    const host = request.headers.get("host") || "localhost:3000"
    const proto = request.headers.get("x-forwarded-proto") || "https"
    const origin = `${proto}://${host}`

    try {
      const { hostname } = new URL(origin)
      if (hostname === "localhost" || hostname === "127.0.0.1") return undefined
    } catch {
      return undefined
    }

    return `${origin}${thumbnail}`
  }

  return undefined
}
