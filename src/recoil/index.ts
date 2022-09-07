import { atom } from 'recoil';
import { UserInfoType } from '../types/userInfo';
import { recoilPersist } from 'recoil-persist';

interface loginStateType {
  isLogin: boolean;
  userInfo: UserInfoType;
}

const sessionStorage =
  typeof window !== `undefined` ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: sessionStorage,
});

type Nation = {
  memberId: number;
  nickname: string;
  jobName: string;
  jobContent: string;
  payCheck: number;
  property: number;
  jobList: string[];
};

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

const nationListState = atom<any>({
  key: 'nationListState',
  default: [
    {
      isChecked: false,
    },
  ],
});

export { loginState, nationListState };
