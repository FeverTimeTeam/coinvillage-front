import React from 'react';
import styled from 'styled-components';
import { StyledInput } from '../components/textInput';
import Button from '../components/button';
import color from '../constants/color';
import Link from 'next/link';

const FormContainer = styled.section`
  width: 100%;
  height: calc(100vh - 5.25rem);
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    margin: 0;
  }
`;

const LoginForm = styled.form`
  box-sizing: border-box;
  width: 40rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  padding: 5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const LoginInput = styled(StyledInput)`
  border: none;
  border-bottom: 1px solid ${color.light_gray};
  outline: none;
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 0.4rem;

  &::placeholder {
    color: ${color.light_gray};
  }
`;

const LoginButton = styled.button`
  width: 30rem;
  height: 4rem;
  border-radius: 1rem;
  background-color: ${color.kb};
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  margin-bottom: 1rem;
`;

const SignUpWrapper = styled.div`
  width: 30rem;
  display: flex;
  justify-content: end;
  align-items: center;
  font-color: ${color.light_gray};

  span {
    margin-right: 0.3rem;
    color: ${color.warm_gray1};
  }

  a {
    color: ${color.warm_gray1};
    text-decoration: underline;
  }
`;

const Login = () => {
  return (
    <FormContainer>
      <LoginForm>
        <h3>아이디</h3>
        <LoginInput
          width={30}
          height={1.5}
          placeholder='아이디를 입력해주세요'
        />
        <h3>비밀번호</h3>
        <LoginInput
          type='password'
          width={30}
          height={1.5}
          placeholder='비밀번호를 입력해주세요'
        />
        <LoginButton>로그인</LoginButton>
        <SignUpWrapper>
          <span>아직 회원이 아니신가요?</span>
          <Link href='/signup'>회원가입하기</Link>
        </SignUpWrapper>
      </LoginForm>
    </FormContainer>
  );
};

export default Login;
