import "./globals.css";

import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import Sidebar from "./components/Sidebar";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aldiyes | Spotify",
  description: "Listen to music on Spotify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
