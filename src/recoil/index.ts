import { atom } from 'recoil';

interface loginStateType {
  isLogin: boolean;
  token: string;
}

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
    token: '',
  },
});

const nationListState = atom<any>({
  key: 'nationListState',
  default: [],
});

export { loginState, nationListState };
