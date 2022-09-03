import React from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Link from 'next/link';

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
    width: 10rem;
    height: 3rem;
    border: none;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    background-color: ${color.light_gray};
    cursor: pointer;
    text-decoration: none;
    color: black;

    &:hover {
      background-color: ${color.light_gray2};
    }
  }
`;

const Header: React.FC = () => {
  return (
    <Root>
      <img src='/logo.svg' />
      <button>
        <Link href='/login'>로그인/회원가입</Link>
      </button>
    </Root>
  );
};

export default Header;
