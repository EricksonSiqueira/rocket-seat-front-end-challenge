import { memo, useMemo } from 'react';

import { useFilter } from '@/hooks/useFilter';
import { styled } from 'styled-components';
import { useTotalProducts } from '@/hooks/useTotalProducts';
import { ArrowDown } from './Icons/ArrowDown';

interface PaginationProps {
  productsPerPage: number;
}

interface PageButtonProps {
  selected: boolean;
}

interface ChangePageArrowProps {
  buttonType: 'next' | 'prev';
}

const PaginationWrapper = styled.nav`
  display: flex;
  width: 100%;
  align-items: flex-end;

  & > ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    gap: 2px;
  }

  & > ul > li {
    list-style: none;
  }
`;

const PageButton = styled.button<PageButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: ${(props) =>
    props.selected ? '1px solid var(--organge-low)' : 'none'};
  width: 32px;
  height: 32px;
  background-color: #e9e9f0;
  color: var(${(props) => (props.selected ? '--organge-low' : '--text-dark')});
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
`;

const ChangePageArrow = styled.button<ChangePageArrowProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  background-color: #e9e9f0;
  color: var(--text-dark);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;

  & > svg {
    transform: rotate(
      ${(props) => (props.buttonType === 'next' ? '-90deg' : '90deg')}
    );
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;

function ProductPagination(props: PaginationProps) {
  const { page, setPage } = useFilter();
  const { totalProducts } = useTotalProducts();

  const totalPages = useMemo(
    () => Math.ceil((totalProducts as number) / props.productsPerPage),
    [totalProducts]
  );

  const pagesArray = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }, [totalPages]);

  const handlePrevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  return (
    <PaginationWrapper>
      <ul>
        {pagesArray.map((pageToBeLoaded) => (
          <li>
            <PageButton
              key={pageToBeLoaded}
              onClick={() => setPage(pageToBeLoaded - 1)}
              selected={page === pageToBeLoaded - 1}
              aria-label={`Ir para página ${pageToBeLoaded}`}
            >
              {pageToBeLoaded}
            </PageButton>
          </li>
        ))}
        <li>
          <ChangePageArrow
            buttonType="prev"
            onClick={handlePrevPage}
            disabled={page === 0}
            aria-label={page !== 0 ? `Ir para página ${page + 1}` : ''}
          >
            <ArrowDown />
          </ChangePageArrow>
        </li>
        <li>
          <ChangePageArrow
            buttonType="next"
            onClick={handleNextPage}
            disabled={page === totalPages - 1}
            aria-label={page !== totalPages ? `Ir para página ${page + 2}` : ''}
          >
            <ArrowDown />
          </ChangePageArrow>
        </li>
      </ul>
    </PaginationWrapper>
  );
}

export default memo(ProductPagination);
