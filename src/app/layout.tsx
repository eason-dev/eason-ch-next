import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eason Chang - Fullstack Engineer | Maker | Indie-hacker",
  description: "Personal homepage of Eason Chang (張楹翔) - Fullstack Engineer, Maker, and Indie-hacker. Connect with me on social media and explore my projects.",
  keywords: ["Eason Chang", "Fullstack Engineer", "Maker", "Indie-hacker", "Developer", "Taiwan"],
  authors: [{ name: "Eason Chang", url: "https://easonchang.com" }],
  creator: "Eason Chang",
  publisher: "Eason Chang",
  openGraph: {
    title: "Eason Chang - Fullstack Engineer | Maker | Indie-hacker",
    description: "Personal homepage of Eason Chang - Connect with me on social media and explore my projects.",
    url: "https://eason.ch",
    siteName: "Eason Chang",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eason Chang - Fullstack Engineer | Maker | Indie-hacker",
    description: "Personal homepage of Eason Chang - Connect with me on social media and explore my projects.",
    creator: "@EasonChang_me",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  );
}
