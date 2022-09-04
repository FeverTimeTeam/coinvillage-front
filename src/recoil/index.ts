import { atom } from 'recoil';

interface loginStateType {
  isLogin: boolean;
  token: string;
}

const loginState = atom<loginStateType>({
  key: 'loginState',
  default: {
    isLogin: false,
    token: '',
  },
});

export { loginState };
