'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ShoppingBag } from './ShoppingBag';
import { styled } from 'styled-components';

const CartCount = styled.span`
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: var(--delete-color);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -10px;
  top: 50%;
  font-family: inherit;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 26px;
`;

const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function CartControl() {
  const { value } = useLocalStorage('cart-items', ['2', '2']);

  return (
    <CartContainer>
      <ShoppingBag />
      {value.length && <CartCount>{value.length}</CartCount>}
    </CartContainer>
  );
}
