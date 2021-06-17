import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Title>Admin</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.article`
  background-color: #282828;
  height: 3.5rem;
  color: white;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
`;

const Title = styled.div`
  line-height: 3.5rem;
  margin-left: 2rem;
  cursor: pointer;
`;
