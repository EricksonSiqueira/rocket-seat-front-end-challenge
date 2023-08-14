'use client';

import CartOrderSummary from '@/components/CartOrderSummary';
import CartProductCard from '@/components/CartProductCard';
import { DefaultPageLayout } from '@/components/DefaultPageLayout';
import GoBackButton from '@/components/GoBackButton';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { CartProduct } from '@/types/Product';
import { formatPriceValue } from '@/utils/formatPriceValue';
import { memo } from 'react';
import { styled } from 'styled-components';

const CartWrapper = styled.div`
  display: flex;
  column-gap: 32px;
  width: 100%;
`;

const CartContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > button {
    align-self: flex-start;
  }
`;

const CartTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: var(--dark-texts-inputs-icons);
  margin-top: 22px;
`;

const ItemsInCart = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: var(--dark-texts-inputs-icons);

  & > span {
    font-weight: 600;
  }
`;

const CartProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 23px;
  overflow-y: auto;
`;

function Carrinho() {
  const { value: products, updateLocalStorage } = useLocalStorage<
    CartProduct[]
  >('cart-items', [] as CartProduct[]);

  const totalCartItems = products.length;
  const totalProductsPrice = formatPriceValue(
    products.reduce(
      (acc, item: CartProduct) => (acc += item.priceInCents * item.quantity),
      0
    )
  );

  return (
    <DefaultPageLayout>
      <CartWrapper>
        <CartContent>
          <GoBackButton link="/" />
          <CartTitle>SEU CARRINHO</CartTitle>
          <ItemsInCart>
            Total ({totalCartItems} produtos) <span>{totalProductsPrice}</span>
          </ItemsInCart>
          <CartProductsSection>
            {products.map((product: CartProduct) => (
              <CartProductCard
                key={product.id}
                product={product}
                products={products}
                updateLocalStorage={updateLocalStorage}
              />
            ))}
          </CartProductsSection>
        </CartContent>
        <CartOrderSummary
          totalProductsPrice={totalProductsPrice}
          deliveryPrice="R$ 40,00"
        />
      </CartWrapper>
    </DefaultPageLayout>
  );
}

export default memo(Carrinho);
