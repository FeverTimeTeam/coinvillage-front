import React, { useState } from 'react';
import styled from 'styled-components';
import { axiosInstance } from '../../queries';
import { useRouter } from 'next/router';
import {
  Root,
  LoginForm,
  LoginInput,
  LoginButton,
  SignUpWrapper,
} from '../../../styles/login';

const TeacherRoot = styled(Root)`
  min-height: 50rem;
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

const TeacherSignupForm = styled(LoginForm)`
  height: 47rem;
`;

const TeacherSignupWraper = styled(SignUpWrapper)`
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
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [countryName, setCountryName] = useState<string>('');

  const router = useRouter();

  async function onTeacherSignUp(e: any) {
    e.preventDefault();

    try {
      await axiosInstance
        .post('/members/ruler/signup', {
          authority: [
            {
              authorityName: 'ROLE_RULER',
            },
          ],
          countryName: countryName,
          property: 0,
          email: email,
          nickname: name,
          password: password,
          phoneNumber: phone,
        })
        .then(() => {
          alert('성공적으로 나라를 생성하였습니다! 로그인을 진행해주세요.');
          router.push('/login');
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <TeacherRoot>
      <TeacherSignupForm onSubmit={onTeacherSignUp}>
        <h2>당신은 대통령이에요</h2>

        <h3>이름</h3>
        <LoginInput
          placeholder='이름을 입력해주세요'
          onChange={(e) => setName(e.target.value)}
        />

        <h3>전화번호</h3>
        <LoginInput
          placeholder='전화번호를 입력해주세요 (- 제외)'
          onChange={(e) => setPhone(e.target.value)}
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

        <h3>나라 이름</h3>
        <NationLoginInput
          placeholder='나라 이름을 입력해주세요'
          onChange={(e) => setCountryName(e.target.value)}
        />
        <TeacherSignupWraper>
          <span>*나라 이름은 추후 변경할 수 없습니다.</span>
          <span>*아이들에게 공유되니 쉬운 이름으로 지어주세요.</span>
        </TeacherSignupWraper>

        <LoginButton style={{ margin: 0 }}>나라 생성</LoginButton>
      </TeacherSignupForm>
    </TeacherRoot>
  );
}

export default TeacherSignUp;
