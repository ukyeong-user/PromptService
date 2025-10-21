import React from "react";
import styled from "styled-components";

// 조립된 검색창 컴포넌트
function SearchInput() {
  return (
    <SearchContainer>
      <SearchButton>🔍</SearchButton>
      <StyledInput />
    </SearchContainer>
  );
}

export default SearchInput;

// 1. 전체를 감싸는 div (여기에 모든 겉모양 스타일을 적용)
const SearchContainer = styled.div`
  width: 10.4375rem;
  height: 3.0625rem;
  background-color: #ffffff;
  border-radius: 999px; /* 매우 큰 값을 주어 완벽한 캡슐 형태로 만듭니다 */
  padding: 0.25rem 0.8125rem;
  display: flex;
  align-items: center;
`;

// 2. 텍스트 입력 input (테두리, 배경 등은 모두 제거)
const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  font-size: 1.4375rem;

  &::placeholder {
    color: #aaa;
  }
`;

// 3. 검색 아이콘 button
const SearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  font-size: 1.4375rem;
`;
