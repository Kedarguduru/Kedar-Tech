import type { Metadata } from "next";
import { Space_Grotesk, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundParticles from "@/components/ui/BackgroundParticles";
import ScrollProgressIndicator from "@/components/ui/ScrollProgressIndicator";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kedartechhub.com"),
  title: "Kedar Tech Hub | AI • Coding • Productivity",
  description: "A futuristic modern full-stack tech website and developer portfolio. Explore AI tools, master coding, and boost your productivity.",
  keywords: ["Next.js", "React", "AI Tools", "Web Development", "Portfolio", "Kedar Tech Hub"],
  authors: [{ name: "Kedar" }],
  openGraph: {
    title: "Kedar Tech Hub | AI • Coding • Productivity",
    description: "A futuristic modern full-stack tech website and developer portfolio.",
    url: "https://kedartechhub.com",
    siteName: "Kedar Tech Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kedar Tech Hub | AI • Coding • Productivity",
    description: "A futuristic modern full-stack tech website and developer portfolio.",
    images: ["/og-image.png"],
  },
  other: {
    "p:domain_verify": "8b2e9b3f08beef05f708ab07602a2baf",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] font-body">
        <ScrollProgressIndicator />
        <BackgroundParticles />
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
