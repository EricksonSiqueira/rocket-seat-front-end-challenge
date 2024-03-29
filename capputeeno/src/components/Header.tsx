'use client';

import { styled } from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInputWithSearchIcon } from './PrimaryInput';
import { CartControl } from './CartControl';
import { useFilter } from '@/hooks/useFilter';
import { useRouter } from 'next/navigation';

const sairaStencilOne = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400'],
});

const TagHeader = styled.header`
  height: 80px;
  background-color: white;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1184px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  @media (min-width: 768px) {
    padding: 0 32px;

    > div {
      gap: 24px;
    }
  }
`;

const Logo = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--logo-color);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export function Header() {
  const { setSearch, search } = useFilter();
  const router = useRouter();

  return (
    <TagHeader>
      <HeaderWrapper>
        <Logo
          className={sairaStencilOne.className}
          onClick={() => router.push('/')}
        >
          capputeeno
        </Logo>
        <div>
          <PrimaryInputWithSearchIcon
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Procurando por algo específico?"
          />
          <CartControl />
        </div>
      </HeaderWrapper>
    </TagHeader>
  );
}
