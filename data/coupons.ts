export interface Coupon {
  id: string
  code: string
  discount: number
  type: "percentage" | "fixed"
  isActive: boolean
  maxUses: number
  usedCount: number
  expiresAt: string | null
  minAmount: number
}

export const coupons: Coupon[] = [
  { id: "c1", code: "SAVE10", discount: 10, type: "percentage", isActive: true, maxUses: 1000, usedCount: 45, expiresAt: null, minAmount: 50 },
  { id: "c2", code: "WELCOME20", discount: 20, type: "percentage", isActive: true, maxUses: 500, usedCount: 120, expiresAt: "2026-12-31T23:59:59Z", minAmount: 100 },
  { id: "c3", code: "FLAT50", discount: 50, type: "fixed", isActive: true, maxUses: 200, usedCount: 30, expiresAt: "2026-06-30T23:59:59Z", minAmount: 200 },
  { id: "c4", code: "FREESHIP", discount: 15, type: "fixed", isActive: true, maxUses: 300, usedCount: 67, expiresAt: null, minAmount: 0 },
]

export function validateCoupon(code: string, cartTotal: number): { valid: boolean; coupon?: Coupon; discountAmount?: number; error?: string } {
  const coupon = coupons.find(c => c.code === code.toUpperCase())
  if (!coupon) return { valid: false, error: "Invalid coupon code" }
  if (!coupon.isActive) return { valid: false, error: "This coupon is no longer active" }
  if (coupon.expiresAt && new Date(coupon.expiresAt) < new Date()) return { valid: false, error: "This coupon has expired" }
  if (coupon.usedCount >= coupon.maxUses) return { valid: false, error: "This coupon has reached its usage limit" }
  if (cartTotal < coupon.minAmount) return { valid: false, error: `Minimum order amount of $${coupon.minAmount} required` }

  let discountAmount = 0
  if (coupon.type === "percentage") {
    discountAmount = cartTotal * (coupon.discount / 100)
  } else {
    discountAmount = coupon.discount
  }

  return { valid: true, coupon, discountAmount }
}
