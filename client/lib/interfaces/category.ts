import { BookTypeShort } from "./book";

export interface CategoryType {
    id: number;
    attributes: {
      name: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      image: string;
      publishedAt: string;
      products: {
        data: BookTypeShort[]; // You can replace "any" with the actual type of "products" if you know it
      };
    };
  }