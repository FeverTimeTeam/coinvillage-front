import { atom } from 'recoil';
import { UserInfoType } from '../types/userInfo';
import { recoilPersist } from 'recoil-persist';

interface loginStateType {
  isLogin: boolean;
  userInfo: UserInfoType;
}

const { persistAtom } = recoilPersist();

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
        email: '',
        memberId: -999,
        nickname: '',
        password: '',
        phoneNumber: '',
        property: 0,
      },
      token: 'string',
    },
  },
  effects_UNSTABLE: [persistAtom],
});

export { loginState };
