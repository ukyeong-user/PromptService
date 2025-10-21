import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export default function App() {
  return (
    <Wrapper>
      <Header />
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}
