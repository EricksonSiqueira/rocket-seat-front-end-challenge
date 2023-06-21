import { styled } from 'styled-components';
import { memo } from 'react';
import { useFilter } from '@/hooks/useFilter';
import { FilterType } from '@/types/FilterTypes';

interface FilterItemProp {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 40px;
`;

const FilterItem = styled.li<FilterItemProp>`
  color: var(--text-dark);
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  list-style: none;
  cursor: pointer;

  border-bottom: ${(props) =>
    props.selected ? '4px solid var(--organge-low)' : 'none'};
  font-weight: ${(props) => (props.selected ? '600' : '400')};
`;

interface FilterByTypeProps {}

function FilterByType(props: FilterByTypeProps) {
  const { type, setType } = useFilter();

  const handleChangeType = (type: FilterType) => {
    setType(type);
  };

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
}

export default memo(FilterByType);
