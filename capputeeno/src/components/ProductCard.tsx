import { styled } from 'styled-components';
import { memo } from 'react';
import { formatPriceValue } from '@/utils/formatPriceValue';
import ImageWithLoading from './ImageWithLoading';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  priority: boolean;
}

const Card = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px 8px 0px 0px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
`;

const CardProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  row-gap: 8px;
  padding: 8px 12px;
  background-color: white;
  border-radius: 0px 0px 4px 4px;

  > div {
    width: 100%;
    height: 1px;
    background-color: var(--shapes-02);
  }
`;

const CardImageWrapper = styled.div`
  width: 256px;
  height: 300px;
  position: relative;
  border-radius: 8px 8px 0px 0px;

  .image {
    border-radius: 8px 8px 0px 0px;
    object-fit: cover;
  }

  .imageSkeleton {
    width: 100%;
    height: 100%;
  }
`;

const CardTitle = styled.p`
  color: var(--dark-texts-inputs-icons);
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
`;

const CardPrice = styled.p`
  color: var(--shapes-dark-tooltip);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
`;

function ProductCard(props: ProductCardProps) {
  const router = useRouter();

  const handleGoToProduct = () => {
    router.push(`/${props.id}`);
  };

  return (
    <Card onClick={handleGoToProduct}>
      <CardImageWrapper>
        <ImageWithLoading
          src={props.image}
          alt="imagem do produto"
          fill
          className="image"
          priority={props.priority}
        />
      </CardImageWrapper>
      <CardProductInfo>
        <CardTitle>{props.title}</CardTitle>
        <div />
        <CardPrice>{formatPriceValue(props.price)}</CardPrice>
      </CardProductInfo>
    </Card>
  );
}

export default memo(ProductCard);
