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
  title: "Nihal Mahore — Full-Stack Engineer & CS Undergrad",
  description:
    "Portfolio of Nihal Mahore. Full-stack software engineering, modern web applications, Couch Critics cinema journal, and engineering changelog.",
  keywords: [
    "Nihal Mahore",
    "Full-Stack Engineer",
    "Computer Science",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Supabase",
    "Couch Critics",
  ],
  authors: [{ name: "Nihal Mahore" }],
  creator: "Nihal Mahore",
  openGraph: {
    title: "Nihal Mahore — Full-Stack Engineer & CS Undergrad",
    description:
      "Full-stack software engineering, modern web applications, and technical project ledger.",
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
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#E6552F] selection:text-white`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#F3F0EA] dark:bg-[#0B0D11] text-[#131210] dark:text-[#F3F1EC] font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
