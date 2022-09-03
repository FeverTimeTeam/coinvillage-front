import React from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Link from 'next/link';
import Button from './button';

const LogoImg = styled.img`
  cursor: pointer;
`;

const Root = styled.header`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.25rem;
  padding: 0.75rem 0rem;
`;

const LoginBtnWrapper = styled.div`
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  width: auto;
  height: auto;

  a:visited {
    text-decoration: none;
    color: black;
  }
  a:link {
    text-decoration: none;
    color: black;
  }
`;

const LoginButton = styled(Button)`
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

const Header: React.FC = () => {
  return (
    <Root>
      <Link href='/'>
        <LogoImg src='/logo.svg' />
      </Link>
      <Link href='/login'>
        <LoginBtnWrapper>
          <LoginButton
            width={10}
            height={3}
            borderRadius={1}
            backgroundColor={color.light_gray}
            color='black'
          >
            로그인/회원가입
          </LoginButton>
        </LoginBtnWrapper>
      </Link>
    </Root>
  );
};

export default Header;
