import { atom } from 'recoil';
import { UserInfoType } from '../types/userInfo';
import { recoilPersist } from 'recoil-persist';

interface loginStateType {
  userInfo: UserInfoType | null;
}

export const loginUserState = atom<loginStateType>({
  key: 'loginUserState',
  default: {
    userInfo: null,
  },
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedInstate',
  default: false,
});

const nationListState = atom<any>({
  key: 'nationListState',
  default: [
    {
      isChecked: false,
    },
  ],
});

const jobListState = atom<any>({
  key: 'jobListState',
  default: [],
});

const aboutPageState = atom<any>({
  key: 'aboutPageState',
  default: {
    isAbout: false,
  },
});

const stocksListState = atom<any>({
  key: 'stocksListState',
  default: [],
});

const detailStockState = atom<any>({
  key: 'detailStockState',
  default: [],
});

const todayMessage = atom<any>({
  key: 'todayMessage',
  default: {},
});

const putState = atom<boolean>({
  key: 'putState',
  default: false,
});

export {
  nationListState,
  jobListState,
  aboutPageState,
  stocksListState,
  detailStockState,
  todayMessage,
  putState,
};
