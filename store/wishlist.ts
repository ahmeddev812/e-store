import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface WishlistItem {
  id: string
  title: string
  price: number
  discountPercentage: number
  thumbnail: string
  slug: string
}

interface WishlistStore {
  items: WishlistItem[]
  addItem: (item: WishlistItem) => void
  removeItem: (productId: string) => void
  toggleItem: (item: WishlistItem) => void
  isInWishlist: (productId: string) => boolean
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          if (state.items.find((i) => i.id === item.id)) return state
          return { items: [...state.items, item] }
        })
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== productId),
        }))
      },
      toggleItem: (item) => {
        const exists = get().items.find((i) => i.id === item.id)
        if (exists) {
          get().removeItem(item.id)
        } else {
          get().addItem(item)
        }
      },
      isInWishlist: (productId) => {
        return get().items.some((i) => i.id === productId)
      },
    }),
    { name: "wishlist-storage" }
  )
)
