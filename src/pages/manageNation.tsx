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
import useDropDownList from '../hooks/useDropDownList';

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

  const [isModifyState, setIsModifyState] = useState<boolean>(false);
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
  const [jobList, setJobList] = useState<string[]>([
    '은행원',
    '펀드 매니저',
    '통계청',
    '개발자',
    '무직',
  ]);

  const [searchWord, setSearchWord] = useState<string>('');
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
    {
      id: 2,
      ranking: 3,
      name: '이주현',
      job: '환경부',
      jobDescription: '교실 청소',
      payCheck: 100,
      property: 1000,
      isChecked: true,
    },
    {
      id: 3,
      ranking: 4,
      name: '박지은',
      job: '환경부',
      jobDescription: '교실 청소',
      payCheck: 100,
      property: 1000,
      isChecked: true,
    },
    {
      id: 4,
      ranking: 5,
      name: '박지은',
      job: '환경부',
      jobDescription: '교실 청소',
      payCheck: 100,
      property: 1000,
      isChecked: true,
    },
    {
      id: 5,
      ranking: 6,
      name: '박지은',
      job: '환경부',
      jobDescription: '교실 청소',
      payCheck: 100,
      property: 1000,
      isChecked: true,
    },
    {
      id: 6,
      ranking: 7,
      name: '박지은',
      job: '환경부',
      jobDescription: '교실 청소',
      payCheck: 100,
      property: 1000,
      isChecked: true,
    },
  ]);

  const {
    isCheckedList,
    handleCheckList,
    allIsChecked,
    handleAllCheck,
    allItemIsChecked,
  } = useCheckBoxList({ itemListLength: nationList.length });

  const {
    selectedItemList,
    isToggledList,
    handleSelectItem,
    handleSelectItemList,
    handleToggled,
  } = useDropDownList({
    itemList: jobList,
  });

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
                <ListItemContainer key={nation.id}>
                  <CheckBox
                    isChecked={isCheckedList[nation.id]}
                    onClick={handleCheckList(nation.id)}
                    style={{
                      marginLeft: '0.5rem',
                      marginRight: '3rem',
                    }}
                  />
                  <Typo fontSize={1.2} style={{ width: '6%' }}>
                    {nation.ranking}
                  </Typo>
                  <Typo fontSize={1.2} style={{ width: '12%' }}>
                    {nation.name}
                  </Typo>
                  {isModifyState ? (
                    <Typo fontSize={1.2} style={{ width: '12%' }}>
                      {nation.job}
                    </Typo>
                  ) : (
                    <DropDown itemList={jobList} style={{ width: '12%' }} />
                  )}
                  <Typo fontSize={1.2} style={{ width: '42%' }}>
                    {nation.jobDescription}
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
