import React from 'react';
import styled from 'styled-components';
import {
  Root,
  LoginForm,
  LoginInput,
  LoginButton,
  SignUpWrapper,
} from '../../../styles/login';

const StudentRoot = styled(Root)`
  h2 {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.1rem;
  }
`;

const StudentSignupForm = styled(LoginForm)`
  height: 47rem;
`;

const StudentSignupWraper = styled(SignUpWrapper)`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1.5rem;

  span {
    font-size: 0.85rem;
    margin-bottom: 0.2rem;
  }
`;

const NationLoginInput = styled(LoginInput)`
  margin-bottom: 0.7rem;
`;

function TeacherSignUp() {
  return (
    <StudentRoot>
      <StudentSignupForm>
        <h2>당신은 국민이에요</h2>

        <h3>이름</h3>
        <LoginInput placeholder='이름을 입력해주세요' />

        <h3>아이디</h3>
        <LoginInput placeholder='이메일을 입력해주세요' />

        <h3>비밀번호</h3>
        <LoginInput type='password' placeholder='비밀번호를 입력해주세요' />

        <h3>나라</h3>
        <NationLoginInput placeholder='가입할 나라 이름을 입력해주세요' />
        <StudentSignupWraper>
          <span>*나라를 입력하면 반에 가입됩니다.</span>
        </StudentSignupWraper>

        <LoginButton style={{ marginBottom: 0, marginTop: '2rem' }}>
          국민 되기(가입)
        </LoginButton>
      </StudentSignupForm>
    </StudentRoot>
  );
}

export default TeacherSignUp;
