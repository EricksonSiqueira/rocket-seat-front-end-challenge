import { styled } from 'styled-components';
import { SearchIcon } from './Icons/SearchIcon';
import { InputHTMLAttributes } from 'react';

export const PrimaryInput = styled.input`
  width: 352px;
  border-radius: 8px;
  border: none;
  height: 42px;
  padding: 10px 16px;
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  background: var(--bg-secondary);
  color: var(--text-dark);
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
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
