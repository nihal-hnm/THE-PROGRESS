import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nihal — Full-Stack Engineer & Systems Builder",
  description:
    "Engineering high-throughput systems, distributed primitives, and editorial-grade web applications. High signal-to-noise portfolio and changelog.",
  keywords: [
    "Full-Stack Engineer",
    "Systems Engineer",
    "Distributed Systems",
    "Next.js",
    "Go",
    "TypeScript",
    "Nihal",
  ],
  authors: [{ name: "Nihal" }],
  creator: "Nihal",
  openGraph: {
    title: "Nihal — Full-Stack Engineer & Systems Builder",
    description:
      "Engineering high-throughput systems, distributed primitives, and editorial-grade web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#E6552F] selection:text-white`}
    >
      <body className="min-h-screen bg-[#F3F0EA] text-[#131210] font-sans">
        {children}
      </body>
    </html>
  );
}
