import React from 'react';
import styled from 'styled-components';
import Font from '@assets/fonts/Font';

const InputRoot = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border-bottom: 1px solid #e6e6e6;
  ${Font.Text1_14px}
`;

const Input = ({ ...rest }) => <InputRoot {...rest} />;

export default Input;
