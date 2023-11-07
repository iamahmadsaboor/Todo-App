import Header from "../components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Todo from "./Todo/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My-Todo-App",
  description: "Todo App Created By iamahmadsaboor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container mx-auto min-h-[70vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
