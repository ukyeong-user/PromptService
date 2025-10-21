import styled from "styled-components";
import GNB from "./GNB";
import UserMenu from "./UserMenu";

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  border-bottom: 3px solid #aadff7;
`;

const HeaderInner = styled.div`
  height: 6.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.25rem;
  max-width: 120rem;
  margin: 0 auto;
`;

export default function Head() {
  return (
    <HeaderBar>
      <HeaderInner>
        <GNB />
        <UserMenu />
      </HeaderInner>
    </HeaderBar>
  );
}
