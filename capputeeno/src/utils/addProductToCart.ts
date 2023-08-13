import { CartProduct, Product } from '@/types/Product';

export const addProductToCart = (product: Product) => {
  const cartItems = localStorage.getItem('cart-items');

  if (!cartItems) {
    localStorage.setItem(
      'cart-items',
      JSON.stringify([{ ...product, quantity: 1 } as CartProduct])
    );
    return;
  }

  const cartItemsParsed = JSON.parse(cartItems);

  const productAlreadyInCart = cartItemsParsed?.find(
    (localStorageProduct: CartProduct) => product.id === localStorageProduct.id
  );

  if (productAlreadyInCart) {
    const updatedCartItems = cartItemsParsed.map(
      (localStorageProduct: CartProduct) => {
        if (localStorageProduct.id === product.id) {
          return {
            ...localStorageProduct,
            quantity: localStorageProduct.quantity + 1,
          };
        }

        return localStorageProduct;
      }
    ) as CartProduct[];

    localStorage.setItem('cart-items', JSON.stringify(updatedCartItems));
    return;
  }

  localStorage.setItem(
    'cart-items',
    JSON.stringify([...cartItemsParsed, { ...product, quantity: 1 }])
  );
};
