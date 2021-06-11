import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header>{children}</Header>
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.main`
  max-width: 50rem;
  margin: 0 auto;
`;
