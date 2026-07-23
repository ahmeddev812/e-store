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
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}

        <Toaster
          richColors
          position="bottom-right"
          duration={1500}
          visibleToasts={2}
          gap={8}
        />
      </ThemeProvider>
    </ClerkProvider>
  );
}