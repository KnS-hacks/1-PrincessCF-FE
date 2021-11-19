import React from 'react';
import font from '@assets/fonts/Font';
import styled from 'styled-components';
import { MediaQueries, BREAKPOINT_PHONE } from '@utils/MediaQuery';
const RootHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${font.Text1_32px}
  ${MediaQueries(BREAKPOINT_PHONE)} {
    width: 100%;
    ${font.Text1_18px}
  }
  text-align: center;
`;

const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ align }) => (align ? align : 'center')};
`;

const Header = ({ leftComponent, centerComponent, rightComponent }) => {
  return (
    <RootHeader>
      <HeaderItem align="left">{leftComponent}</HeaderItem>
      <HeaderItem>{centerComponent}</HeaderItem>
      <HeaderItem align="right">{rightComponent}</HeaderItem>
    </RootHeader>
  );
};

export default Header;
