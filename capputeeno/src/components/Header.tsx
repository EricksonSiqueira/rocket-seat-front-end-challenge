'use client';

import { styled } from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInputWithSearchIcon } from './PrimaryInput';
import { CartControl } from './CartControl';
import { useFilter } from '@/hooks/useFilter';

const sairaStencilOne = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400'],
});

interface HeaderProps {}

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
  padding: 0 32px;
  max-width: 1184px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;

export function Header(props: HeaderProps) {
  const { setSearch, search } = useFilter();

  return (
    <TagHeader>
      <HeaderWrapper>
        <Logo className={sairaStencilOne.className}>capputeeno</Logo>
        <div>
          <PrimaryInputWithSearchIcon
            value={search}
            handleChange={setSearch}
            placeholder="Procurando por algo específico?"
          />
          <CartControl />
        </div>
      </HeaderWrapper>
    </TagHeader>
  );
}
