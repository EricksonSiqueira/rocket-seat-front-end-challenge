import { styled } from 'styled-components';
import { memo, useState } from 'react';
import { ArrowDown } from './Icons/ArrowDown';
import { useFilter } from '@/hooks/useFilter';
import { PriorityType } from '@/types/FilterTypes';

interface FilterByPriorityProps {}

const FilterByPriorityContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    color: var(--text-dark);
    font-family: inherit;
    text-align: center;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;

const PriorityFilterContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  position: absolute;
  min-width: 176px;
  min-height: 100%;
  width: 100%;
  top: calc(100% + 4px);
  right: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  list-style: none;
`;

const PriorityFilterOption = styled.li`
  color: var(--text-dark);
  height: 24px;
  font-size: 14px;
  font-family: inherit;
  line-height: 22px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: var(--bg-secondary);
  }
`;

function FilterByPriority(props: FilterByPriorityProps) {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleOpen = () => setFilterIsOpen((prev) => !prev);

  const handlePriority = (newPriority: PriorityType) => {
    setPriority(newPriority);
    setFilterIsOpen(false);
  };

  return (
    <FilterByPriorityContainer>
      <button type="button" onClick={handleOpen}>
        Organizar por <ArrowDown />
      </button>
      {filterIsOpen && (
        <PriorityFilterContainer>
          <PriorityFilterOption
            onClick={() => handlePriority(PriorityType.NEWS)}
          >
            Novidades
          </PriorityFilterOption>
          <PriorityFilterOption
            onClick={() => handlePriority(PriorityType.MAJOR_PRICE)}
          >
            Preço: Maior - menor
          </PriorityFilterOption>
          <PriorityFilterOption
            onClick={() => handlePriority(PriorityType.MINOR_PRICE)}
          >
            Preço: Menor - maior
          </PriorityFilterOption>
          <PriorityFilterOption
            onClick={() => handlePriority(PriorityType.POPULARITY)}
          >
            Mais Vendidos
          </PriorityFilterOption>
        </PriorityFilterContainer>
      )}
    </FilterByPriorityContainer>
  );
}

export default memo(FilterByPriority);
