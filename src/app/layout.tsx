import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";
import { Open_Sans, Nanum_Gothic } from "next/font/google";

const sans = Open_Sans({ subsets: ["latin"] });
const nanum = Nanum_Gothic({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "태환의 블로그",
  description: "nextjs 공부중입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nanum.className}>
      <body>
        <header className={styles.header}>
          <h1>
            <Link href="/">Demo Note App</Link>
          </h1>
          <nav className={styles.nav}>
            <Link href="/contact">Contact</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
