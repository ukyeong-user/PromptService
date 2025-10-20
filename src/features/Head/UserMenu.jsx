import React, { useState } from "react";
import styled from "styled-components";

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border-radius: 7.5rem;
  border: none;
  background: transparent;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 1.625rem;
  font-weight: 600;
  color: #00aeff;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background: rgba(0, 174, 255, 0.08);
  }
`;

export default function UserMenu() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(!isLoggedIn);
    // 실제 로그아웃 로직을 여기에 추가할 수 있습니다
  };

  return (
    <LogoutButton onClick={handleLogout}>
      {isLoggedIn ? "로그아웃" : "로그인"}
    </LogoutButton>
  );
}
