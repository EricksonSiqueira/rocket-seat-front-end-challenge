import { styled } from 'styled-components';

export const DefaultPageLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 16px;
  margin: 0 auto;
  min-height: 50vh;
  max-width: 1184px;
  row-gap: 22px;
  margin-bottom: 34px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }
`;
