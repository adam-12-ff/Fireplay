import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FirePlay",
  description: "Tournaments, XP, and rewards for Free Fire players",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh flex flex-col bg-[radial-gradient(1200px_500px_at_50%_-10%,#1a1a1a_0%,transparent_60%),#0a0a0a] text-white">
          <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-black/40">
            <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
              <div className="font-semibold tracking-tight">
                <span className="text-lime-400">✴</span> FirePlay
              </div>
              <nav className="text-sm gap-6 hidden sm:flex">
                <a href="/" className="hover:text-lime-400">Home</a>
                <a href="/tournaments" className="hover:text-lime-400">Tournaments</a>
                <a href="/wallet" className="hover:text-lime-400">Wallet</a>
                <a href="/admin" className="hover:text-lime-400">Admin</a>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10 py-8 text-center text-xs text-white/60">© {new Date().getFullYear()} FirePlay</footer>
        </div>
      </body>
    </html>
  );
}
