import path from "path";
import { promises as fs } from "fs";

export interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
}

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | null> {
  const products = await getProducts();
  const product = products.find((product) => product.id === id);
  return product || null;
}
