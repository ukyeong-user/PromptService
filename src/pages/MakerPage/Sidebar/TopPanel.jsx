import React from "react";
import styled from "styled-components";
import SearchInput from "../../../components/SearchInput";
import Dropdown from "../../../components/Dropdown";

function TopPanel() {
  return (
    <TopContainer>
      <SearchInput />
      <Dropdown />
    </TopContainer>
  );
}

export default TopPanel;

// styled-components

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.63rem 2.31rem;
  width: 100%;
  background-color: #001e40;
`;
