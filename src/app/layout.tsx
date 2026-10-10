import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
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
      className={`dark ${playfair.variable} ${jakarta.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#E6552F] selection:text-white`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                // Default to dark mode unless explicitly set to light
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
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
