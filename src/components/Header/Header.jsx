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
  padding: 1.44rem 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.44rem 2.25rem;
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
