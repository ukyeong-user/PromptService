import React from "react";
import styled from "styled-components";
import CaretIcon from "../assets/tabler_caret-down-filled.svg"; // 경로는 맞게 수정해주세요

function Dropdown() {
  // DropdownContainer 하나로 합칩니다.
  return (
    <DropdownContainer>
      <DropdownText>모든 허브</DropdownText>
      <DropdownImage src={CaretIcon} />
    </DropdownContainer>
  );
}

export default Dropdown;

// DropdownSection과 DropdownContainer를 하나로 합치고 역할을 재분배합니다.
const DropdownContainer = styled.div`
  /* 1. 겉모양 담당 */
  width: 10.4375rem; /* 전체 너비는 고정값보다 auto가 나을 수 있습니다. */
  height: 3.0625rem;
  border-radius: 999px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between; /* 양쪽 끝으로 정렬 */
  align-items: center;

  /* 3. 안쪽 여백 담당 (Figma 값을 여기에 적용!) */
  padding: 0.69rem 0.94rem 0.69rem 1.5rem;
`;

const DropdownImage = styled.img`
  width: 1.625rem;
  height: 1.625rem;
`;

const DropdownText = styled.p`
  font-weight: 500;
  font-size: 1.4375rem;
  margin: 0; /* p 태그의 기본 마진 제거 */
`;
