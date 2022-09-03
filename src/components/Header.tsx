import React from 'react';
import styled from 'styled-components';
import color from '../constants/color';

const Root = styled.header`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.25rem;
  padding: 0.75rem 0rem;

  button {
    display: flex;
    width: 12.188rem;
    height: 3.375rem;
    border: none;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    background-color: ${color.light_gray};
  }
`;

const Header: React.FC = () => {
  return (
    <Root>
      <img src='/logo.svg' />
      <button>로그인/회원가입</button>
    </Root>
  );
};

export default Header;
