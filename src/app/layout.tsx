import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TracingBeam } from "@/components/ui/tracing-beam";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sombhu Das - Portfolio",
  description: "Welcome to the portfolio of Sombhu Das, a passionate and skilled full-stack developer.",
  keywords: [
    "Sombhu Das",
    "Portfolio",
    "Full Stack Developer",
    "Web Development",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  applicationName: "Sombhu Portfolio",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Sombhu Das - Portfolio",
    description: "Explore the portfolio of Sombhu Das, showcasing web development projects and skills.",
    url: "https://sombhudas4.vercel.app/", // Replace with your actual domain
    siteName: "Sombhu Das Portfolio",
    images: [
      {
        url: "https://pbs.twimg.com/profile_images/1820147204297822208/ylo_c5ce.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Sombhu Das Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/Sombhudas2023e", // Replace with your Twitter handle
    title: "Sombhu Das - Portfolio",
    description: "Explore the portfolio of Sombhu Das, showcasing web development projects and skills.",
    images: ["https://pbs.twimg.com/profile_images/1820147204297822208/ylo_c5ce.jpg"], // Replace with your Twitter-specific image URL
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <TracingBeam children={children} /> */}
        {children}
      </body>
    </html>
  );
}
