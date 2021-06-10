import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header>{children}</Header>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.main`
  max-width: 50rem;
  margin: 0 auto;
`;
