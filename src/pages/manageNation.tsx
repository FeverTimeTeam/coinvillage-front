import React, { useState } from 'react';
import {
  ListItemContainer,
  ListTitleContainer,
  Root,
  TopBarContainer,
  TopBarLeftItemsContainer,
} from '../../styles/manageNation';
import CheckBox from '../components/checkBox';
import Image from '../components/image';
import Button from '../components/button';
import color from '../constants/color';
import TextInput from '../components/textInput';
import Typo from '../components/typo';
import SearchBox from '../components/searchBox';
import StyledHorizontalRule from '../components/horizontalRule';
import DropDown from '../components/dropDown';
import useCheckBoxList from '../hooks/useCheckBoxList';
import { useEffect } from 'react';
import axios from 'axios';
import { axiosInstance } from '../queries/index';

const ManageNation = () => {
  type Nation = {
    memberId: number;
    nickname: string;
    jobName: string;
    jobContent: string;
    payCheck: number;
    property: number;
    jobList: string[];
  };

  const [isModifyState, setIsModifyState] = useState<boolean>(true);
  const [modifyButtonText, setModifyButtonText] = useState<string>('수정하기');
  const [isPaycheckState, setIsPaycheckState] = useState<boolean>(false);
  const onClickModify = () => {
    setIsModifyState((isModifyState) => !isModifyState);
    isModifyState
      ? setModifyButtonText('적용하기')
      : setModifyButtonText('수정하기');
  };
  const onClickPayCheck = () => {
    setIsPaycheckState((isPaycheckState) => !isPaycheckState);
  };

  const [searchWord, setSearchWord] = useState<string>('');
  const [nationList, setNationList] = useState<Nation[] | void[]>([]);

  const {
    isCheckedList,
    handleCheckList,
    allIsChecked,
    handleAllCheck,
    allItemIsChecked,
  } = useCheckBoxList({ itemListLength: nationList?.length });

  const getNationList = () => {
    axiosInstance
      .get('/manage')
      .then((response) => {
        console.log(response.data);
        setNationList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const modifyNation = () => {
    axiosInstance
      .put('/manage/15', {
        job: {
          jobId: 4,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getNationList();
  }, []);

  useEffect(() => {
    console.log(nationList);
  }, [nationList]);

  const [job, setJob] = useState('');

  return (
    <Root>
      <>
        <TopBarContainer>
          <TopBarLeftItemsContainer>
            <Button
              color={color.kb}
              backgroundColor={color.black}
              onClick={modifyNation}
            >
              {job}
            </Button>
            <Typo color={color.deep} fontSize={2}>
              국민관리
            </Typo>
            <Button
              backgroundColor={color.white}
              color={color.kb}
              borderColor={color.kb}
              onClick={onClickModify}
              style={{
                marginLeft: '1rem',
                marginRight: '1rem',
                border: 'solid',
              }}
            >
              {modifyButtonText}
            </Button>
            <Button
              backgroundColor={color.warm_gray1}
              color={color.white}
              borderColor={color.warm_gray1}
              onClick={onClickPayCheck}
            >
              월급주기
            </Button>
          </TopBarLeftItemsContainer>
          <SearchBox
            width={9}
            height={1}
            value={searchWord}
            placeholder='이름 검색'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchWord(e.target.value);
            }}
            onSubmit={(e: any) => {
              e.preventDefault();
              setSearchWord('');
            }}
          />
        </TopBarContainer>
        <ListTitleContainer>
          <CheckBox
            isChecked={allItemIsChecked}
            onClick={handleAllCheck}
            style={{ marginLeft: '0.5rem', marginRight: '3rem' }}
          />
          <Typo fontSize={1.2} style={{ width: '6%' }}>
            랭킹
          </Typo>
          <Typo fontSize={1.2} style={{ width: '12%' }}>
            이름
          </Typo>
          <Typo fontSize={1.2} style={{ width: '12%' }}>
            직업
          </Typo>
          <Typo fontSize={1.2} style={{ width: '42%' }}>
            하는 일
          </Typo>
          <Typo fontSize={1.2} style={{ width: '12%' }}>
            월급
          </Typo>
          <Typo fontSize={1.2} style={{ width: '8%' }}>
            총 재산
          </Typo>
        </ListTitleContainer>
        <StyledHorizontalRule />
        {nationList &&
          nationList.map((nation, index) => {
            return (
              nation && (
                <ListItemContainer key={nation.memberId}>
                  <CheckBox
                    isChecked={isCheckedList[nation.memberId]}
                    onClick={handleCheckList(nation.memberId)}
                    style={{
                      marginLeft: '0.5rem',
                      marginRight: '3rem',
                    }}
                  />
                  <Typo fontSize={1.2} style={{ width: '6%' }}>
                    {index + 1}
                  </Typo>
                  <Typo fontSize={1.2} style={{ width: '12%' }}>
                    {nation.nickname}
                  </Typo>
                  {isModifyState ? (
                    <Typo fontSize={1.2} style={{ width: '12%' }}>
                      {nation.jobName}
                    </Typo>
                  ) : (
                    <DropDown
                      itemList={nation.jobList}
                      style={{ width: '12%' }}
                      height={1.8}
                      placeholder='직업 선택'
                      onChange={(e) => {
                        console.log('hi');
                        console.log(e.target.value);
                        setJob(e.target.value);
                      }}
                    />
                  )}
                  <Typo fontSize={1.2} style={{ width: '42%' }}>
                    {nation.jobContent}
                  </Typo>
                  <Typo fontSize={1.2} style={{ width: '12%' }}>
                    {nation.payCheck}
                  </Typo>
                  <Typo fontSize={1.2} style={{ width: '8%' }}>
                    {nation.property}
                  </Typo>
                </ListItemContainer>
              )
            );
          })}
      </>
    </Root>
  );
};

export default ManageNation;
