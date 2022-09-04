import React from 'react';
import Link from 'next/link';
import {
  Root,
  LoginForm,
  LoginInput,
  LoginButton,
  SignUpWrapper,
} from '../../styles/login';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  function onIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    setId(e.target.value);
  }

  function onPwChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPw(e.target.value);
  }

  function onLoginSubmit() {}

  return (
    <Root>
      <LoginForm>
        <h3>아이디</h3>
        <LoginInput placeholder='이메일을 입력해주세요' onChange={onIdChange} />
        <h3>비밀번호</h3>
        <LoginInput
          type='password'
          placeholder='비밀번호를 입력해주세요'
          onChange={onPwChange}
        />
        <LoginButton>로그인</LoginButton>
        <SignUpWrapper>
          <span>아직 회원이 아니신가요?</span>
          <Link href='/signup'>회원가입하기</Link>
        </SignUpWrapper>
      </LoginForm>
    </Root>
  );
};

export default Login;
