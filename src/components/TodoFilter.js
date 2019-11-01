import React, { useState } from "react";
import styled from "styled-components";

const FilterButton = styled.li`
  list-style: none;
  cursor: pointer;
  border: ${props => (props.active ? "none" : "1px solid #db9ede")};
  margin: 15px 0px;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  &:active {
    border: 1px solid black;
    position: relative;
    top: -1px;
    right: -1px;
  }
`;

export default () => {
  const [activeFilter, setActiveFilter] = useState(0);
  return (
    <ul>
      <FilterButton
        onClick={setActiveFilter.bind(null, 0)}
        active={activeFilter === 0}
      >
        All
      </FilterButton>
      <FilterButton
        onClick={setActiveFilter.bind(null, 1)}
        active={activeFilter === 1}
      >
        Active
      </FilterButton>
      <FilterButton
        onClick={setActiveFilter.bind(null, 2)}
        active={activeFilter === 2}
      >
        Done
      </FilterButton>
    </ul>
  );
};
