# Enhanced Prompt: Full-Stack Premium eCommerce Web Application

## Project Goal
Build a COMPLETE, FULL-STACK, and PREMIUM eCommerce web application, inspired by Daraz.pk, utilizing Next.js App Router. The application MUST feature an ADVANCED GLASSMORPHISM-focused UI/UX, premium animations, and a professional user experience across all functionalities.

## Core Development Principles (IMPORTANT)
- **Efficiency:** Minimize token and credit usage; avoid unnecessary explanations or conversational filler.
- **Code Quality:** Generate only production-ready, error-free code. No placeholders or incomplete implementations.
- **Modularity:** Develop in modular, reusable components with a clean, scalable architecture.
- **Immutability:** Do not rewrite unchanged files or regenerate components unless explicitly instructed or necessary for a significant update. Avoid infinite loops or repeated installations.
- **Stability:** Ensure all generated code is fully functional and error-free before proceeding to subsequent steps.
- **Dependencies:** Use the latest stable versions of all specified packages. Avoid deprecated packages.

## Image Handling (CRITICAL)
To ensure efficiency and avoid resource waste, DO NOT manually search, download, or generate product images individually. Instead, implement a dynamic and automated approach:

- **Primary Product Data:** Use the DummyJSON API (https://dummyjson.com/products) for all product data.
- **Dynamic Product Images:** Utilize dynamic Unsplash images with category-based mapping.
    - **Base URL:** `https://source.unsplash.com/featured/600x600/?`
    - **Category Mapping:**
        - `electronics` → `tech`
        - `fashion` → `clothing`
        - `shoes` → `sneakers`
        - `beauty` → `cosmetics`
        - For categories not listed, default to a general search like `e-commerce` or `products`.
- **Optimization:**
    - Employ the Next.js `Image` component for all images.
    - Implement lazy loading for performance.
    - Integrate skeleton loaders to enhance UX during image loading.
    - Ensure responsive image rendering across devices.
    - Configure for CDN optimization (if applicable, through Next.js Image configuration).

## Tech Stack (Latest Stable Versions)
- **Frontend:** Next.js 15+, React 19+, TypeScript, Tailwind CSS, ShadCN UI, Framer Motion
- **Backend:** Node.js, MongoDB (via Prisma ORM), NextAuth (Auth.js), Zustand (for state management)
- **Utilities:** Stripe, bcrypt, zod, react-hook-form, sonner (for toasts)

## Design & UI/UX Requirements (Glassmorphism Focus)
Create a visually stunning and highly functional modern e-commerce interface, surpassing current industry benchmarks.

- **Glassmorphism Effects:** Apply consistently using Tailwind CSS classes: `backdrop-blur-xl`, `bg-white/10`, `border-white/20`, `shadow-2xl`.
- **Aesthetics:** Implement modern gradients, soft shadows, premium hover animations, and smooth page transitions.
- **Layout:** Design a luxury e-commerce layout with professional spacing.
- **Navigation:** Implement a sticky navbar with a glass blur effect and a responsive mega menu.
- **User Feedback:** Integrate skeleton loading states, sonner toast notifications, and mobile-first responsive design.
- **Theming:** Full Dark/Light mode support using `next-themes`.

## Color Theme
- **Primary:** `#F57224` (Orange)
- **Secondary:** Navy Blue (`#1E293B`)
- **Glass Backgrounds:** `rgba(255,255,255,0.05)` to `rgba(255,255,255,0.1)` (with corresponding blur and borders).
- **Text:** Primarily white or light-colored text for contrast on glass backgrounds.

## Required Pages
- Home
- Product Listing
- Product Details
- Categories
- Search Results
- Cart
- Checkout
- Wishlist
- User Dashboard
- Admin Dashboard
- Login/Register
- Forgot Password
- Profile Settings
- Order Tracking
- About
- Contact
- FAQ

## Authentication
- **Provider:** NextAuth (Auth.js) with JWT strategy.
- **Methods:** Secure Email/Password login/signup, Google OAuth login.
- **Authorization:** Role-based access control (User/Admin roles).
- **Management:** Protected routes, robust session management.

## Payments Integration
- Stripe (credit card processing)
- Cash on Delivery (COD)
- JazzCash
- EasyPaisa

## Key Features
- Add to Cart functionality
- Wishlist management
- Product reviews and ratings system
- Display of related products
- Comprehensive product filtering and sorting
- Search suggestions for improved discoverability
- Coupon code application
- Real-time inventory management
- Admin analytics dashboard
- Email nodemailer notifications (e.g., order confirmation)
- PDF invoice generation

## Admin Panel Functionality
- **Product Management:** CRUD (Create, Read, Update, Delete) operations for products.
- **Category Management:** CRUD operations for categories.
- **Order Management:** View, update, and manage customer orders.
- **User Management:** Administer user accounts and roles.
- **Analytics:** Comprehensive dashboard with revenue and inventory tracking.

## Database Models (Prisma ORM with MongoDB)
- `User`
- `Product`
- `Category`
- `Order`
- `Review`
- `Wishlist`
- `Cart`
- `Coupon`
- `Address`
- `Payment`

## Performance & Security
- **Performance:** Server-Side Rendering (SSR), Next.js Image Optimization, Lazy Loading, Code Splitting, API Caching, Fast Loading Speeds.
- **Security:** XSS/CSRF Protection, Password Hashing (bcrypt), Secure API Routes, Rate Limiting.

## Project Structure (Generate as follows)
- `app/` (Next.js App Router structure)
    - `(frontend)/` (public-facing routes)
    - `(auth)/` (authentication-related routes)
    - `(dashboard)/` (user dashboard routes)
    - `(admin)/` (admin dashboard routes, e.g., `app/(admin)/products/page.tsx`)
- `components/ui/` (ShadCN UI components and custom UI elements)
- `lib/` (utility functions, helpers, Prisma client, etc.)
- `hooks/` (custom React hooks)
- `store/` (Zustand stores)
- `types/` (TypeScript type definitions)
- `utils/` (general utilities)
- `prisma/` (Prisma schema and migrations)
- `api/` (Next.js API routes, if not part of App Router `app/api`)

## Final Deliverable Requirements
- A complete, working project that is functional upon `npm install && npm run dev`.
- All code must be production-ready, without deprecated packages or broken imports.
- The final website should embody a billion-dollar modern e-commerce platform with premium animations, glassmorphism UI, professional UX, and fully functional backend/frontend.