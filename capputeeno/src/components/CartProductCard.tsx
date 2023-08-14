'use client';

import { CartProduct } from '@/types/Product';
import { memo } from 'react';
import ImageWithLoading from './ImageWithLoading';
import { styled } from 'styled-components';
import { TrashCan } from './Icons/TrashCan';
import { formatPriceValue } from '@/utils/formatPriceValue';

interface CartProductCardProps {
  product: CartProduct;
  products: CartProduct[];
  updateLocalStorage: (newValue: CartProduct[]) => void;
}

const CartProductCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const CartProductCardImageWrapper = styled.div`
  position: relative;
  min-width: 100%;
  width: 256px;
  min-height: 211px;

  & > .image {
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    min-width: 256px;
    width: 256px;
    min-height: 211px;

    & > .image {
      border-radius: 8px 0 0 8px;
    }
  }
`;

const CartProductCardContent = styled.div`
  padding: 16px 20px 24px 31px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CartProductCardTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SpaceBetweenRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CartProductCardName = styled.h3`
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: var(--dark-texts-inputs-icons);
`;

const DeleteProductButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CartProductCardDescription = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: var(--dark-texts-inputs-icons);
  margin: 12px 0 25px;
`;

const CartProductCardPrice = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: var(--shapes-dark-tooltip);
`;

const CartSelectedProductQuantity = styled.select`
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--text-dark);
  border-radius: 8px;
  background-color: var(--bg-secondary);
  padding: 8px 12px;
  border: 1px solid #a8a8b3;
  cursor: pointer;
`;

const QuantityOpt = styled.option`
  color: var(--text-dark);
  font-size: 16px;
  line-height: 24px;
`;

function CartProductCard(props: CartProductCardProps) {
  const handleProductSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedQuantity = Number(event.target.value);
    const updatedProducts = props.products.map((product) => {
      if (product.id === props.product.id) {
        return { ...product, quantity: selectedQuantity };
      }
      return product;
    });

    props.updateLocalStorage(updatedProducts);
  };

  const removeProductFromCart = () => {
    const updatedProducts = props.products.filter(
      (product) => product.id !== props.product.id
    );

    props.updateLocalStorage(updatedProducts);
  };

  return (
    <CartProductCardContainer>
      <CartProductCardImageWrapper>
        <ImageWithLoading
          src={props.product?.imageUrl}
          fill
          alt={props.product.name}
        />
      </CartProductCardImageWrapper>
      <CartProductCardContent>
        <CartProductCardTextContent>
          <SpaceBetweenRowWrapper>
            <CartProductCardName>{props.product.name}</CartProductCardName>
            <DeleteProductButton
              aria-label="Remover item do carrinho"
              onClick={removeProductFromCart}
            >
              <TrashCan />
            </DeleteProductButton>
          </SpaceBetweenRowWrapper>
          <CartProductCardDescription>
            {props.product.description}
          </CartProductCardDescription>
        </CartProductCardTextContent>
        <SpaceBetweenRowWrapper>
          <CartSelectedProductQuantity
            value={props.product.quantity}
            onChange={handleProductSelect}
          >
            <QuantityOpt value={1}>1</QuantityOpt>
            <QuantityOpt value={2}>2</QuantityOpt>
            <QuantityOpt value={3}>3</QuantityOpt>
            <QuantityOpt value={4}>4</QuantityOpt>
            <QuantityOpt value={5}>5</QuantityOpt>
          </CartSelectedProductQuantity>
          <CartProductCardPrice>
            {formatPriceValue(props.product.priceInCents)}
          </CartProductCardPrice>
        </SpaceBetweenRowWrapper>
      </CartProductCardContent>
    </CartProductCardContainer>
  );
}

export default memo(CartProductCard);
