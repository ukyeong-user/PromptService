import React from "react";
import styled from "styled-components";
import SearchInput from "../../../components/SearchInput";
import HubModalSelector from "../components/HubModalSelector";

function TopPanel() {
  return (
    <TopContainer>
      <SearchInput />
      <HubModalSelector />
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
  padding: 2.7vh 1.93vw;
  width: 100%;
  background-color: #001e40;
`;
