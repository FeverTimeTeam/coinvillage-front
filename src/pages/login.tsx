import React from 'react';
import styled from 'styled-components';
import Root from '../../styles/signIn';
import Button from '../components/button';
import color from '../constants/color';

const FormContainer = styled.section`
  width: 100%;
  height: calc(100vh-3rem);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const LoginForm = styled.form`
  width: 38.125rem;
  height: 35.625rem;
`;

const Login = () => {
  return (
    <FormContainer>
      <LoginForm>하하하</LoginForm>
    </FormContainer>
  );
};

export default Login;
