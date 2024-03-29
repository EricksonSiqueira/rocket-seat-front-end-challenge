import { useProduct } from '@/hooks/useProduct';
import { memo } from 'react';
import { styled } from 'styled-components';
import ImageWithLoading from './ImageWithLoading';
import { getProductTypeToPortuguese } from '@/utils/getProductTypeToPortuguese';
import { formatPriceValue } from '@/utils/formatPriceValue';
import { ShoppingBag } from './Icons/ShoppingBag';
import { addProductToCart } from '@/utils/addProductToCart';

interface ProductInfoProps {
  productId: string;
}

const ProductInfoContainer = styled.article`
  display: flex;
  gap: 32px;
  flex-direction: column;
  margin-bottom: 12px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ProductInfoImageWrapper = styled.div`
  position: relative;
  min-width: 100%;
  min-height: 320px;
  height: 320px;
  border-radius: 4px;

  img.image {
    object-fit: cover;
    border-radius: 4px;
  }

  div.imageSkeleton {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    min-width: 640px;
    min-height: 400px;
  }

  @media (min-width: 1024px) {
    min-width: 640px;
    min-height: 580px;
  }
`;

const PageInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductInfoContent = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const ProductType = styled.p`
  font-size: 16px;
  font-style: normal;
  color: var(--dark-texts-inputs-icons);
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 12px;
`;

const ProductTitle = styled.h1`
  color: var(--dark-texts-inputs-icons);
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const ProductPrice = styled.p`
  color: var(--shapes-dark-tooltip);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

const DeliveryText = styled.p`
  color: var(--dark-texts-inputs-icons);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 29px;

  @media (min-width: 768px) {
    margin-bottom: 58px;
  }
`;

const ProductDescriptionTitle = styled.p`
  color: var(--text-dark);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`
  color: var(--dark-texts-inputs-icons);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
`;

const AddToCartButton = styled.button`
  width: 100%;
  height: 44px;
  background-color: #115d8c;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  color: white;
  border: none;
  border-radius: 4px;
  color: #f5f5fa;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
function ProductInfo(props: ProductInfoProps) {
  const { product } = useProduct(props.productId);

  return (
    <ProductInfoContainer>
      <ProductInfoImageWrapper>
        <ImageWithLoading src={product?.imageUrl} fill />
      </ProductInfoImageWrapper>
      <PageInfoWrapper>
        <ProductInfoContent>
          <ProductType>
            {getProductTypeToPortuguese(product?.category)}
          </ProductType>
          <ProductTitle>{product?.name}</ProductTitle>
          <ProductPrice>{formatPriceValue(product?.priceInCents)}</ProductPrice>
          <DeliveryText>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </DeliveryText>
          <ProductDescriptionTitle>Descrição</ProductDescriptionTitle>
          <ProductDescription>{product?.description}</ProductDescription>
        </ProductInfoContent>
        <AddToCartButton onClick={() => addProductToCart(product)}>
          <ShoppingBag color="#F5F5FA" />
          <span>Adicionar ao carrinho</span>
        </AddToCartButton>
      </PageInfoWrapper>
    </ProductInfoContainer>
  );
}

export default memo(ProductInfo);
