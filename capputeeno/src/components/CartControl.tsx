'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ShoppingBag } from './Icons/ShoppingBag';
import { styled } from 'styled-components';
import { useRouter } from 'next/navigation';

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

const CartContainer = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8.5px;
  cursor: pointer;
`;

export function CartControl() {
  const { value } = useLocalStorage('cart-items', ['2', '2']);
  const router = useRouter();

  return (
    <CartContainer
      onClick={() => router.push('/carrinho')}
      aria-label="Ir para página de carrinho."
    >
      <ShoppingBag />
      {value.length > 0 ? <CartCount>{value.length}</CartCount> : null}
    </CartContainer>
  );
}
