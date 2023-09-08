import { styled } from 'styled-components';
import { SearchIcon } from './Icons/SearchIcon';
import { InputHTMLAttributes } from 'react';

export const PrimaryInput = styled.input`
  width: 190px;
  border-radius: 8px;
  border: none;
  height: 42px;
  padding: 10px 16px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;

  background: var(--bg-secondary);
  color: var(--text-dark);

  &:focus {
    outline: 2px solid var(--organge-low);
  }

  @media (min-width: 768px) {
    width: 352px;
    font-size: 14px;
    line-height: 22px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 190px;

  svg {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: 768px) {
    width: 352px;

    svg {
      width: 24px;
      height: 24px;
      right: 16px;
    }
  }
`;

interface PrimaryInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

export function PrimaryInputWithSearchIcon(props: PrimaryInputProps) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  );
}
