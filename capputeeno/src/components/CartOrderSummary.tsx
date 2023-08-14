import { currencyToNumber } from '@/utils/currencyToNumber';
import { formatPriceValue } from '@/utils/formatPriceValue';
import { Saira } from 'next/font/google';
import { memo } from 'react';
import { styled } from 'styled-components';

interface CartOrderSummaryProps {
  totalProductsPrice: string;
  deliveryPrice: string;
}

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const CartOrderSummaryContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  background-color: white;
  min-width: 352px;
  margin-top: 40px;
  min-height: 700px;
  height: 100%;
`;

const CartOrderSummaryContent = styled.article`
  display: flex;
  flex-direction: column;
`;

const CartOrderSummaryTitle = styled.h2`
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  color: var(--dark-texts-inputs-icons);
  margin-bottom: 29px;
`;

const CartOrderSummaryItems = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: var(--dark-texts-inputs-icons);
  margin-bottom: 12px;
`;

const CartOrderSummaryDivider = styled.div`
  width: 100%;
  border-top: 1px solid var(--shapes-02);
  margin-top: 12px;
`;

const CartOrderSummaryTotal = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: var(--dark-texts-inputs-icons);
  margin: 8px 0 40px;
`;

const CartOrderSummaryFinish = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: white;
  margin: 8px 0 40px;
  background-color: #51b853;
  border-radius: 4px;
  border: none;
  height: 44px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const CartOrderSummaryNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CartOrderSummaryLink = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: var(--text-dark);
  text-decoration-line: underline;
`;

function CartOrderSummary(props: CartOrderSummaryProps) {
  const totalCartPrice =
    currencyToNumber(props.totalProductsPrice) +
    currencyToNumber(props.deliveryPrice);
  const totalCartPriceFormatted = formatPriceValue(totalCartPrice);

  return (
    <CartOrderSummaryContainer>
      <CartOrderSummaryContent>
        <CartOrderSummaryTitle>RESUMO DO PEDIDO</CartOrderSummaryTitle>
        <CartOrderSummaryItems>
          <span>Subtoral de produtos</span>
          <span>{props.totalProductsPrice}</span>
        </CartOrderSummaryItems>
        <CartOrderSummaryItems>
          <span>Entrega</span>
          <span>{props.deliveryPrice}</span>
        </CartOrderSummaryItems>
        <CartOrderSummaryDivider />
        <CartOrderSummaryTotal>
          <span>Total</span>
          <span>{totalCartPriceFormatted}</span>
        </CartOrderSummaryTotal>
        <CartOrderSummaryFinish>
          <span className={saira.className}>FINALIZAR A COMPRA</span>
        </CartOrderSummaryFinish>
      </CartOrderSummaryContent>
      <CartOrderSummaryNav>
        <CartOrderSummaryLink>AJUDA</CartOrderSummaryLink>
        <CartOrderSummaryLink>REEMBOLSOS</CartOrderSummaryLink>
        <CartOrderSummaryLink>ENTREGAS E FRETE</CartOrderSummaryLink>
        <CartOrderSummaryLink>TROCAS E DEVOLUÇÕES</CartOrderSummaryLink>
      </CartOrderSummaryNav>
    </CartOrderSummaryContainer>
  );
}

export default memo(CartOrderSummary);
