'use client';

import { CartProduct, Product } from '@/types/Product';
import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartItems: [] as CartProduct[],
  setCartItems: (value: CartProduct[]) => {},
  addProductToCart: (receivedProduct: Product) => {},
});

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  const addProductToCart = (receivedProduct: Product) => {
    const productAlreadyInCart = cartItems.find(
      (product: Product) => product.id === receivedProduct.id
    );

    if (productAlreadyInCart) {
      const updatedCartItems = cartItems.map((product: CartProduct) => {
        if (product.id === receivedProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      }) as CartProduct[];

      setCartItems(updatedCartItems);
    }

    setCartItems([...cartItems, { ...receivedProduct, quantity: 1 }]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
