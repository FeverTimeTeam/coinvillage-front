import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  Root,
  LoginForm,
  LoginInput,
  LoginButton,
  SignUpWrapper,
} from '../../styles/login';
import { constSelector, useRecoilState } from 'recoil';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { axiosInstance } from '../queries';
import { aboutPageState, loginUserState } from '../recoil';
import styled from 'styled-components';
import { isLoggedInState } from '../recoil/index';
import { AxiosResponse } from 'axios';

export const FullHeightRoot = styled(Root)`
  height: 100vh;
`;

const Login = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const router = useRouter();

  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [aboutState, setAboutState] = useRecoilState(aboutPageState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  useEffect(() => {
    setAboutState({ isAbout: 'sign' });
  }, []);

  function onIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    setId(e.target.value);
  }

  function onPwChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPw(e.target.value);
  }

  async function onLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await axiosInstance
        .post('/members/authenticate', {
          email: id,
          password: pw,
        })
        .then((response) => {
          if (response.status == 200) {
            setIsLoggedIn(true);
            axiosInstance.defaults.headers.common['Authorization'] =
              'Bearer ' + response.data.token;
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem(
              'memberId',
              response.data.memberResponseDto.memberId
            );
            const memberId = sessionStorage.getItem('memberId');
            axiosInstance
              .get(`/members/${memberId}`)
              .then((response) => {
                console.log(response.data);
                setLoginUser({ userInfo: response.data });
              })
              .catch((e) => {
                console.log(e);
              });
            router.push('/');
          }
        });
    } catch (e) {
      alert('아이디/비밀번호가 일치하지 않습니다.');
    }
  }

  return (
    <FullHeightRoot>
      <LoginForm onSubmit={onLoginSubmit}>
        <h3>이메일</h3>
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
    </FullHeightRoot>
  );
};

export default Login;
