import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "9799krspaces",
  description: "Welcome to 9799kr Secret Space ☁🛸",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
