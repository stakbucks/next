import { Product, getProducts } from "@/service/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";
import clothesImg from "../../../public/images/clothes.jpg";
import Image from "next/image";

export default async function Products() {
  const products: Product[] = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!(ver2)</h1>
      <Image alt="제품소개페이지" src={clothesImg} />
      <ul>
        {products.map((product, i) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
