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
  height: 4rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoWrap = styled.a`
  display: flex;
  cursor: pointer;
  align-items: flex-end;

  & > svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const Title = styled.div`
  font-family: "HiMelody-Regular";
  font-size: 1.8rem;
  margin-left: 0.3rem;
`;
