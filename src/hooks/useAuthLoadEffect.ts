import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedInState, loginUserState } from '../recoil';
import { axiosInstance } from '../queries';
import { UserInfoType } from '../types/userInfo';
import { useRouter } from 'next/router';

export default function useAuthLoadEffect() {
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const router = useRouter();

  useEffect(() => {
    const fn = async () => {
      const token = sessionStorage.getItem('token');
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${token}`;

      const memberId = sessionStorage.getItem('memberId');
      if (memberId) {
        axiosInstance
          .get(`/members/${memberId}`)
          .then((response) => {
            console.log(response.data);
            setLoginUser({ userInfo: response.data });
          })
          .catch((e) => {
            console.log(e);
          });

        setIsLoggedIn(true);
      } else if (
        loginUser?.userInfo?.authorityDtoSet[0].authorityName === 'ROLE_NATION'
      ) {
        console.log('hi');
        alert('비로그인 유저 및 학생 회원은 접근 불가합니다.');
        router.push('/');
      }
    };

    fn();
  }, []);
}
