import { styled } from 'styled-components';

export interface SkeletonProps {
  className?: string;
  dataTestId?: string;
}

const SkeletonDiv = styled.div`
  display: flex;
  width: 100%;
  height: 1.6rem;
  background: hsl(200, 20%, 95%);
  position: relative;
  overflow: hidden;
  animation-delay: 1s;
  opacity: 0.4;

  &:before {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      hsl(200, 20%, 95%) 0%,
      rgba(0, 0, 0, 0.05) 20%,
      hsl(200, 20%, 95%) 40%,
      hsl(200, 20%, 95%) 100%
    );
    background-repeat: no-repeat;
    background-size: 45rem 40rem;
    animation: shimmer 2s linear infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -45rem 0;
    }
    100% {
      background-position: 45rem 0;
    }
  }
`;

export default function Skeleton({ className, dataTestId }: SkeletonProps) {
  return <SkeletonDiv className={className} data-testid={dataTestId} />;
}
