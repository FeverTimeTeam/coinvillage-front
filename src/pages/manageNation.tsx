import React, { useState } from 'react';
import {
  Root,
  TopBarContainer,
  TopBarLeftItemsContainer,
} from '../../styles/manageNation';
import CheckBox from '../components/checkBox';
import Image from '../components/image';
import yellowCheck from '../assets/images/yellow_check.png';
import Button from '../components/button';
import color from '../constants/color';
import TextInput from '../components/textInput';
import Typo from '../components/typo';
import SearchBox from '../components/searchBox';

const ManageNation = () => {
  type Nation = {
    id: number;
    ranking: number;
    name: string;
    job: string;
    jobDescription: string;
    payCheck: number;
    property: number;
    isChecked: boolean;
  };

  const [searchWord, setSearchWord] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [nationList, setNationList] = useState<Nation[] | void[]>([
    {
      id: 0,
      ranking: 1,
      name: '유다연',
      job: '은행원',
      jobDescription: '친구들의 돈 관리',
      payCheck: 100,
      property: 1000,
      isChecked: false,
    },
    {
      id: 1,
      ranking: 2,
      name: '박지은',
      job: '환경부',
      jobDescription: '교실 청소',
      payCheck: 100,
      property: 1000,
      isChecked: true,
    },
  ]);

  const onToggle = () => (id: number) => {
    nationList &&
      setNationList(
        nationList.map((nation: any) => {
          nation && nation.id === id
            ? { ...nation, isChecked: !nation.isChecked }
            : nation;
        })
      );
    console.log('onToggle');
  };

  return (
    <Root>
      <>
        <TopBarContainer>
          <TopBarLeftItemsContainer>
            <Typo color={color.deep} fontSize={2}>
              국민관리
            </Typo>
            <Button
              backgroundColor={color.white}
              color={color.kb}
              borderColor={color.kb}
              onClick={() => {
                console.log('수정하기');
              }}
              style={{ marginLeft: '1rem', marginRight: '1rem' }}
            >
              수정하기
            </Button>
            <Button
              backgroundColor={color.warm_gray1}
              color={color.white}
              borderColor={color.warm_gray1}
              onClick={() => {
                console.log('월급주기');
              }}
            >
              월급주기
            </Button>
          </TopBarLeftItemsContainer>

          <SearchBox
            width={3}
            height={1}
            value={searchWord}
            placeholder='이름 검색'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchWord(e.target.value);
            }}
          />
        </TopBarContainer>
        {nationList &&
          nationList.map((nation, index) => {
            return (
              nation && (
                <div key={nation.ranking}>
                  <CheckBox isChecked={nation.isChecked} onClick={onToggle} />
                  <div>{nation.ranking}</div>
                  <div>{nation.name}</div>
                  <div>{nation.job}</div>
                  <div>{nation.jobDescription}</div>
                  <div>{nation.payCheck}</div>
                  <div>{nation.property}</div>
                </div>
              )
            );
          })}
        <div>
          <CheckBox
            isChecked={isChecked}
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          />
        </div>
      </>
    </Root>
  );
};

export default ManageNation;
