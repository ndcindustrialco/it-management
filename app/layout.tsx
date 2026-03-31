import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/components/providers";

  const baiJamjuree = localFont({
    src: [
      {
        path: "../public/fonts/BaiJamjuree-Regular.ttf",
        weight: "300",
        style: "normal",
      },
    ],
    variable: "--font-bai-jamjuree",
  });

export const metadata: Metadata = {
  title: "NDC IT Service Hub",
  description: "Next-generation IT Service portal for NDC employees and administrators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /**
   * INLINE BLOCKING SCRIPT (CRITICAL)
   * This executes BEFORE React hydration to set the initial theme class.
   * This is what prevents 'Flicker of Unstyled Content' (FOUC).
   */
  const themeInitScript = `
    (function() {
      try {
        var theme = localStorage.getItem('theme') || 'system';
        var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        var color = isDark ? 'dark' : 'light';
        document.documentElement.classList.add(color);
        document.documentElement.style.colorScheme = color;
      } catch (e) {}
    })();
  `;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${baiJamjuree.variable} h-full antialiased`}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans transition-colors duration-300">
         <Providers>
            {children}
         </Providers>
      </body>
    </html>
  );
}
