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
  width: 38.125rem;
  height: 35.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  shadow: ;
`;

const Login = () => {
  return (
    <FormContainer>
      <LoginForm>하하하</LoginForm>
    </FormContainer>
  );
};

export default Login;
