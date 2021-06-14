import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.main`
  max-width: 1260px;
  margin: 0 auto;
`;
