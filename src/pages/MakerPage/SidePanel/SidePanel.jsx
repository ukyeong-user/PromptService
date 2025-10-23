import React from "react";
import TopPanel from "./TopPanel";
import styled from "styled-components";
import PromptHublist from "./PromptHublist";

function SidePanel({ onToggle }) {
  return (
    <SidebarWrapper>
      <TopPanel />
      <PromptHublist />
      <CloseButton onClick={onToggle} aria-label="사이드바 닫기">
        <CloseIcon>«</CloseIcon>
      </CloseButton>
    </SidebarWrapper>
  );
}

export default SidePanel;

const SidebarWrapper = styled.div`
  width: 23.8vw; /* 457px / 1920px */
  height: 100%;
  background-color: #001e40;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 5px 0px 26px 0px rgba(0, 0, 0, 0.06);
`;

const CloseButton = styled.button`
  position: absolute;
  left: calc(100% - 13px);
  top: 50%;
  transform: translateY(-50%);
  width: 13px;
  height: 120px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #c0c0c0;
  }
`;

const CloseIcon = styled.span`
  color: #666;
  font-size: 1.5rem;
  font-weight: bold;
`;
