import { Product, getProduct, getProducts } from "@/service/products";
import ProductsNotFoundPage from "../not-found";
import Image from "next/image";
import { redirect } from "next/navigation";
import GoBackBtn from "@/components/GoBackBtn";
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    return;
  }
  return {
    title: `제품 | ${product.name}`,
    description: `${product.name}에 대한 설명`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    redirect("/products");
    // return ProductsNotFoundPage();
  }
  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image width={200} height={300} alt={product.name} src={product.img} />
      <GoBackBtn />
    </>
  );
}

export async function generateStaticParams() {
  const products: Product[] = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
