import React from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../../queries';
import { useState } from 'react';
import { useRouter } from 'next/router';
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
    margin-bottom: 2.5rem;
  }

  h3 {
    font-size: 1.1rem;
  }
`;

const StudentSignupForm = styled(LoginForm)`
  height: 47rem;
`;

const StudentSignupWrapper = styled(SignUpWrapper)`
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

function StudentSignup() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [countryName, setCountryName] = useState<string>('');

  const router = useRouter();

  async function onStudentSignup(e) {
    e.preventDefault();

    try {
      await axiosInstance
        .post('/member/nation/signup', {
          authority: [
            {
              authorityName: 'ROLE_NATION',
            },
          ],
          countryName: countryName,
          property: 0,
          email: email,
          nickname: name,
          password: password,
        })
        .then(() => {
          alert('나라에 가입되었습니다! 로그인을 진행해주세요.');
          router.push('/login');
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <StudentRoot>
      <StudentSignupForm onSubmit={onStudentSignup}>
        <h2>당신은 국민이에요</h2>

        <h3>이름</h3>
        <LoginInput
          placeholder='이름을 입력해주세요'
          onChange={(e) => setName(e.target.value)}
        />

        <h3>이메일</h3>
        <LoginInput
          placeholder='이메일을 입력해주세요'
          onChange={(e) => setEmail(e.target.value)}
        />

        <h3>비밀번호</h3>
        <LoginInput
          type='password'
          placeholder='비밀번호를 입력해주세요'
          onChange={(e) => setPassword(e.target.value)}
        />

        <h3>나라</h3>
        <NationLoginInput
          placeholder='가입할 나라 이름을 입력해주세요'
          onChange={(e) => setCountryName(e.target.value)}
        />
        <StudentSignupWrapper>
          <span>*나라를 입력하면 반에 가입됩니다.</span>
        </StudentSignupWrapper>

        <LoginButton style={{ marginBottom: 0, marginTop: '2rem' }}>
          국민 되기(가입)
        </LoginButton>
      </StudentSignupForm>
    </StudentRoot>
  );
}

export default StudentSignup;
