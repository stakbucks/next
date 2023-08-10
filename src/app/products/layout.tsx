import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "제품",
  description: "멋진 제품을 확인해 보세요",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <nav className={styles.nav}>
          <ul>
            <Link href="/products/women">여성복</Link>
            <Link href="/products/men">남성복</Link>
          </ul>
        </nav>
      </div>
      <section>{children}</section>
    </>
  );
}
