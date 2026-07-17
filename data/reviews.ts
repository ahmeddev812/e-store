export interface Review {
  id: string
  rating: number
  comment: string | null
  userId: string
  userName: string
  userImage: string | null
  productId: string
  createdAt: string
}

export const reviews: Review[] = [
  { id: "r1", rating: 5, comment: "Absolutely amazing headphones! The noise cancellation is top-notch and battery life is incredible.", userId: "u1", userName: "John D.", userImage: null, productId: "p1", createdAt: "2025-03-01T10:00:00Z" },
  { id: "r2", rating: 4, comment: "Great sound quality but a bit heavy for long sessions. Overall very satisfied.", userId: "u2", userName: "Sarah M.", userImage: null, productId: "p1", createdAt: "2025-03-05T10:00:00Z" },
  { id: "r3", rating: 5, comment: "Best smartwatch I've ever owned. The health tracking features are incredibly accurate.", userId: "u3", userName: "Mike R.", userImage: null, productId: "p2", createdAt: "2025-03-10T10:00:00Z" },
  { id: "r4", rating: 4, comment: "Beautiful jacket, true to size. The leather quality is excellent. Needs some break-in time.", userId: "u4", userName: "Emily K.", userImage: null, productId: "p3", createdAt: "2025-03-15T10:00:00Z" },
  { id: "r5", rating: 5, comment: "This monitor is a game-changer for my design work. Colors are incredibly accurate.", userId: "u5", userName: "Alex T.", userImage: null, productId: "p4", createdAt: "2025-03-20T10:00:00Z" },
  { id: "r6", rating: 5, comment: "My skin has never looked better! The organic ingredients make a real difference.", userId: "u1", userName: "John D.", userImage: null, productId: "p5", createdAt: "2025-04-01T10:00:00Z" },
  { id: "r7", rating: 4, comment: "Very comfortable chair for long work hours. Assembly took about 30 minutes.", userId: "u2", userName: "Sarah M.", userImage: null, productId: "p6", createdAt: "2025-04-05T10:00:00Z" },
  { id: "r8", rating: 5, comment: "Most comfortable running shoes ever! The boost technology really works.", userId: "u3", userName: "Mike R.", userImage: null, productId: "p7", createdAt: "2025-04-10T10:00:00Z" },
  { id: "r9", rating: 3, comment: "Works as advertised but charging speed could be faster. Gets slightly warm.", userId: "u4", userName: "Emily K.", userImage: null, productId: "p8", createdAt: "2025-04-15T10:00:00Z" },
  { id: "r10", rating: 5, comment: "Stylish and practical. The polarization makes a huge difference while driving.", userId: "u5", userName: "Alex T.", userImage: null, productId: "p9", createdAt: "2025-04-20T10:00:00Z" },
  { id: "r11", rating: 4, comment: "Excellent sound quality for the price. The voice assistant works well.", userId: "u1", userName: "John D.", userImage: null, productId: "p10", createdAt: "2025-04-25T10:00:00Z" },
  { id: "r12", rating: 5, comment: "Mechanical switches feel amazing for both gaming and typing. RGB is stunning.", userId: "u2", userName: "Sarah M.", userImage: null, productId: "p11", createdAt: "2025-05-01T10:00:00Z" },
  { id: "r13", rating: 4, comment: "Soft and luxurious. Keeps me warm without being itchy. Great purchase.", userId: "u3", userName: "Mike R.", userImage: null, productId: "p12", createdAt: "2025-05-05T10:00:00Z" },
  { id: "r14", rating: 5, comment: "Perfect for beach trips! Waterproof feature works great and battery lasts forever.", userId: "u4", userName: "Emily K.", userImage: null, productId: "p13", createdAt: "2025-05-10T10:00:00Z" },
  { id: "r15", rating: 5, comment: "Best yoga mat I've used. The alignment lines help with my poses.", userId: "u5", userName: "Alex T.", userImage: null, productId: "p14", createdAt: "2025-05-15T10:00:00Z" },
]

export function getReviewsByProduct(productId: string): Review[] {
  return reviews.filter(r => r.productId === productId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}
