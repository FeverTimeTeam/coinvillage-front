import React from 'react';
import styled from 'styled-components';
import Root from '../../styles/signIn';
import Button from '../components/button';

const SignIn = () => {
  return (
    <>
      <Root>signIn page</Root>
      <Button
        onClick={() => {
          console.log('회원가입 버튼');
        }}
      >
        회원가입
      </Button>
    </>
  );
};

export default SignIn;
