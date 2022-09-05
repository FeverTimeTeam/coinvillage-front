import { atom } from 'recoil';
import { UserInfoType } from '../types/userInfo';

interface loginStateType {
  isLogin: boolean;
  userInfo: UserInfoType;
}

const loginState = atom<loginStateType>({
  key: 'loginState',
  default: {
    isLogin: false,
    userInfo: {
      memberResponseDto: {
        authorityDtoSet: [
          {
            authorityName: 'ROLE_NATION',
          },
        ],
        email: 'string',
        memberId: 0,
        nickname: 'string',
        password: 'string',
        phoneNumber: 'string',
        property: 0,
      },
      token: 'string',
    },
  },
});

export { loginState };
