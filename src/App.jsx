import React from "react";
import { Outlet } from "react-router-dom";
import Head from "./features/Head/Head";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

export default function App() {
  return (
    <Wrapper>
      <Head />
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}
