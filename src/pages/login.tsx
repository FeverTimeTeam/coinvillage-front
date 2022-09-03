import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import color from '../constants/color';

const FormContainer = styled.section`
  width: 100%;
  height: calc(100vh - 5.25rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 35rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const Login = () => {
  return (
    <FormContainer>
      <LoginForm>
        <h3>아이디</h3>
        <h3>비밀번호</h3>
      </LoginForm>
    </FormContainer>
  );
};

export default Login;
