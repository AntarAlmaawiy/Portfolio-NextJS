import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {ThemeProvider} from "./provider";
import "./globals.css";

const inter = Inter({subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antars Portfolio",
  description: "New portfolio using 3rd party libraries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
      >
        {children}
      </ThemeProvider></body>
    </html>
  );
}
