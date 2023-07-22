import { styled } from 'styled-components';
import { memo, useState } from 'react';
import Image from 'next/image';
import Skeleton from './Skeleton';

interface ImageWithLoadingProps {
  src: string;
  alt?: string;
  priority?: boolean;
  fill?: boolean;
  className?: string;
}

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function ImageWithLoading(props: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? <Skeleton className="imageSkeleton" /> : null}
      <Image
        src={props.src}
        alt={props?.alt ?? 'imagem do produto'}
        fill={props?.fill ?? false}
        className={props?.className ?? 'image'}
        priority={props?.priority ?? false}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </>
  );
}

export default memo(ImageWithLoading);
