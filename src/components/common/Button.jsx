import React from 'react';
import color from '@assets/colors/Color';
import font from '@assets/fonts/Font';
import { ReactComponent as TopArrowIcon } from '@assets/icons/top-arrow.svg';
import styled from 'styled-components';

const Root = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 0;
  cursor: pointer;
  outline: none;
`;

const Button = ({ ...rest }) => <Root type="button" {...rest} />;

export default Button;

const TopRoot = styled(Root)`
  width: ${({ size }) => (size ? `${size}px` : '44px')};
  height: 44px;
  border-radius: 50%;
  background-color: ${color.orange};
  box-shadow: 0px 4px 4px 0px ${color.black_40};
`;

const TopIconStyle = {
  width: '24px',
  height: '24px',
};

export const TopButton = ({ ...rest }) => (
  <TopRoot type="button" {...rest}>
    <TopArrowIcon style={TopIconStyle} />
  </TopRoot>
);

const CompleteRoot = styled(Root)`
  margin-top: 16px;
  height: 50px;
  color: ${color.white};
  background-color: ${color.orange};
  ${font.Text1_18px}
  padding: 0 16px;
  border-radius: 16px;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in, transform 0.3s ease-out;
  &:hover {
    box-shadow: 0px 2px 8px #e4e4e4;
    transform: translateY(-3px);
  }
`;

export const CompleteButton = ({ text, ...rest }) => (
  <CompleteRoot type="submit" {...rest}>
    {text}
  </CompleteRoot>
);
