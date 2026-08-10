import { getProducts, getProductById, Product } from "@/api/products";
import localData from "@/assets/animal.json";

export const allAnimal = async (): Promise<any[]> => {
  const products = await getProducts();
  return products.length > 0 ? products : localData;
};

export const allAnimalId = async (id: string | number): Promise<any> => {
  const product = await getProductById(id);
  if (product) {
    return {
      ...product,
      name: product.name || product.titel,
      location: product.location || "Dhaka",
    };
  }
  return localData.find((i: any) => String(i.id) === String(id));
};
