import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "icon/svg/Logo.svg";

interface Props {
  onClickTitle: () => void;
}

const Header: React.FC = () => {
  return (
    <Wrapper>
      <LogoWrap>
        <Logo />
        <Title>루팡 Eats</Title>
      </LogoWrap>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 3rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.bgDimd};
`;

const LogoWrap = styled.a`
  display: flex;
  cursor: pointer;
  align-items: center;

  & > svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const Title = styled.div`
  font-size: 1.7rem;
  margin-left: 0.5rem;
`;
