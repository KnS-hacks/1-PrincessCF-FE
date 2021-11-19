import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  background-image: url(${({ src }) => (src ? src : '')});
  background-size: contain;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    filter: blur(4px);
    background-image: linear-gradient(134deg, #ff6666 23%, #ffa85f 50%, #ffc629 100%);
    content: '';
    z-index: -1;
  }
`;

const Icon = ({ src, ...rest }) => {
  return <IconWrapper src={src} {...rest} />;
};

export default Icon;
