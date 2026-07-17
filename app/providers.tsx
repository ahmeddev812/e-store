"use client";

import { ClerkProvider } from "@clerk/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"  // Changed from "dark" to "system"
        enableSystem
        disableTransitionOnChange
      >
        {children}

        <Toaster
          richColors
          position="top-right"
        />
      </ThemeProvider>
    </ClerkProvider>
  );
}