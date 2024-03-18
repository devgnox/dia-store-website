import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";

const fontFamily = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dia! Store",
  description: "Store",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/dia-store.svg",
        href: "/images/dia-store.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontFamily.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer storeName={metadata.title?.toString() || "Store"} />
      </body>
    </html>
  );
}
