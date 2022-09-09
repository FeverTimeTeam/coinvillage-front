import React, { useEffect } from 'react';
import styled from 'styled-components';
import color from '../constants/color';
import Link from 'next/link';
import deviceSize from '../constants/deviceSize';
import { FiLogOut } from 'react-icons/fi';
import { loginState } from '../recoil';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import { axiosInstance } from '../queries';

const LogoImg = styled.img`
  cursor: pointer;
`;

const Root = styled.header`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.25rem;
  padding: 0.75rem 0rem;

  button {
    width: 6rem;
    height: 2.5rem;
    border: none;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    background-color: ${color.light_gray};

    &:hover {
      background-color: ${color.light_gray3};
    }

    @media screen and (min-width: ${deviceSize.tablet}) {
      width: 10rem;
      height: 3rem;
    }
  }
`;

const LoginBtnWrapper = styled.div`
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  width: auto;
  height: auto;

  a:visited {
    text-decoration: none;
    color: black;
  }
  a:link {
    text-decoration: none;
    color: black;
  }
`;

const RulerMenuWrapper = styled(LoginBtnWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    margin-right: 1rem;
  }

  a {
    margin-right: 2.5rem;
  }
`;

const PCLoginButton = styled.button`
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: none;

  @media screen and (min-width: ${deviceSize.tablet}) {
    display: flex;
  }
`;

const LogoutButton = styled.button`
  border: none;
  cursor: pointer;
  text-decoration: none;
  width: 1.5rem !important;
  background: none !important;
`;

const MobileLoginButton = styled.button`
  border: none;
  cursor: pointer;
  text-decoration: none;

  @media screen and (min-width: ${deviceSize.tablet}) {
    display: none;
  }
`;

const MemberInfoArea = styled.div`
  min-width: 4rem;
  width: content-fit;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${color.kb};
`;

const Header: React.FC = () => {
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);
  const router = useRouter();

  useEffect(() => {
    console.log(loginUserState);
  }, [loginUserState]);

  function onLogout() {
    if (confirm('로그아웃 하시겠습니까?')) {
      sessionStorage.removeItem('recoil-persist');
      delete axiosInstance.defaults.headers.common['Authorization'];
      router.reload();
    }
  }

  return (
    <Root>
      <Link href='/'>
        <LogoImg src='/logo.svg' />
      </Link>
      {loginUserState.isLogin == true ? (
        <RulerMenuWrapper>
          {loginUserState.userInfo.memberResponseDto.authorityDtoSet[0]
            .authorityName === 'ROLE_RULER' ? (
            <Link href='/manageNation'>국민 관리</Link>
          ) : null}
          <MemberInfoArea>
            {loginUserState.userInfo.memberResponseDto.nickname}(
            {loginUserState.userInfo.memberResponseDto.authorityDtoSet[0]
              .authorityName == 'ROLE_RULER'
              ? '대통령'
              : '국민'}
            )
          </MemberInfoArea>
          <LogoutButton onClick={onLogout}>
            <FiLogOut size={20} />
          </LogoutButton>
        </RulerMenuWrapper>
      ) : (
        <Link href='/login'>
          <LoginBtnWrapper>
            <PCLoginButton>로그인/회원가입</PCLoginButton>
            <MobileLoginButton>로그인</MobileLoginButton>
          </LoginBtnWrapper>
        </Link>
      )}
    </Root>
  );
};

export default Header;
