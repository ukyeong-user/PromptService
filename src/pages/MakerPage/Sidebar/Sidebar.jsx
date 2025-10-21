import React from "react";
import TopPanel from "./TopPanel";
import styled from "styled-components";
import PromptHublist from "./PromptHublist";

function Sidebar() {
  return (
    <SidebarWrapper>
      <TopPanel>Sidebar</TopPanel>
      <PromptHublist></PromptHublist>
    </SidebarWrapper>
  );
}

export default Sidebar;

const SidebarWrapper = styled.div`
  width: 28.5625rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
