import React from "react";
import styled from "styled-components";

interface Props {
  onClickTitle: () => void;
}

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title>header</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color: #282828;
  height: 3rem;
  color: white;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  line-height: 3rem;
  margin-left: 2rem;
  cursor: pointer;
`;
