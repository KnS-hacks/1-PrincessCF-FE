import React, { useEffect, useState } from 'react';
import color from '@assets/colors/Color';
import styled from 'styled-components';
import { BREAKPOINT_PHONE, MediaQueries } from '@utils/MediaQuery';

const MainWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1420px;
  padding: 0 32px;
  ${MediaQueries(BREAKPOINT_PHONE)} {
    width: 100%;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
  }
`;

const DefaultTemplate = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  // 모바일 환경만 처리
  return <MainWrapper>{children}</MainWrapper>;
};

export default DefaultTemplate;
