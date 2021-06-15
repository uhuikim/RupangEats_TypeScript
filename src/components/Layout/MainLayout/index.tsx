import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

export interface PropTypes {
  children: React.ReactNode;
}

const Layout = ({ children }: PropTypes) => {
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
