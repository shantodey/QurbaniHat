"use server";

export interface Product {
  id: string;
  titel?: string;
  name?: string;
  type: string;
  breed: string;
  price: number;
  weight: number;
  age: number;
  description: string;
  image: string;
  category: string;
  location?: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/products`, { cache: "no-store" });
    if (!res.ok) return [];
    const result = await res.json();
    return result.data || [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export async function getProductById(id: string | number): Promise<Product | null> {
  try {
    const products = await getProducts();
    return products.find((p) => String(p.id) === String(id)) || null;
  } catch (error) {
    console.error("Failed to fetch product by id:", error);
    return null;
  }
}
