import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import Container from "@/components/global/Container";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duroo MarketPlace",
  description: "Buy What You've Always Dreamt About",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <Container className="py-20">
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
