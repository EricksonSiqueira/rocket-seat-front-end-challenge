export interface Product {
  id: string;
  name: string;
  priceInCents: number;
  imageUrl: string;
  category?: 't-shirts' | 'mugs';
  description?: string;
}

export interface CartProduct extends Product {
  quantity: number;
}
