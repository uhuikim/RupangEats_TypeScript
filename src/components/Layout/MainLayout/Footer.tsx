import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <Wrap>
      <ListTitle>루팡 EATS</ListTitle>
      <List>서울시 강남구 강남대로</List>
      <List>
        <span>Tel.</span>010-8249-0123 /<span>Mail.</span>uhui94@naver.com
      </List>
      <ListBold>copyright 루팡EATS Alll Rights Reserved</ListBold>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.ul`
  padding: 2rem;
  background: ${({ theme }) => theme.bgStep1};
  color: ${({ theme }) => theme.textSecondary};
  font-size: 12px;
`;

const ListTitle = styled.li`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0.5rem;
`;

const List = styled.li`
  padding-top: 0.8rem;

  > span {
    font-weight: bold;
    margin-right: 0.2rem;
    &:nth-of-type(2) {
      margin-left: 0.3rem;
    }
  }
`;

const ListBold = styled.li`
  margin-top: 1rem;
  font-weight: bold;
`;
