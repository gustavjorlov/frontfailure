import React from "react";
import styled from "styled-components";

const List = styled.ul`
  padding: 0px;
`;

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

export default ({ filter, onSelect }) => {
  return (
    <React.Fragment>
      <List>
        <FilterButton
          onClick={onSelect.bind(null, "all")}
          active={filter === "all"}
        >
          All
        </FilterButton>
        <FilterButton
          onClick={onSelect.bind(null, "active")}
          active={filter === "active"}
        >
          Active
        </FilterButton>
        <FilterButton
          onClick={onSelect.bind(null, "done")}
          active={filter === "done"}
        >
          Done
        </FilterButton>
      </List>
      <button>Clear Done todos</button>
    </React.Fragment>
  );
};
