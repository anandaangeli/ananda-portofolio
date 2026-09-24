import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./language-context";

import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Ananda Gracia Angeli — Portofolio",
  description: "Portofolio proyek dan karya Ananda Gracia Angeli.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
