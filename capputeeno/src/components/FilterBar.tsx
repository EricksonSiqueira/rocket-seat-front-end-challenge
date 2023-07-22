'use client';

import { styled } from 'styled-components';
import { memo } from 'react';
import FilterByType from './FilterByType';
import FilterByPriority from './FilterByPriority';

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

interface FilterBarProps {}
function FilterBar(props: FilterBarProps) {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  );
}

export default memo(FilterBar);
