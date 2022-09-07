import React, { useState } from 'react';
import {
  ListItemContainer,
  ListTitleContainer,
  PaycheckButton,
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
import { useEffect } from 'react';
import axios from 'axios';
import { axiosInstance } from '../queries/index';
import { useRecoilState } from 'recoil';
import { nationListState } from '../recoil';
import Modal from '../components/modal';
import { truncate } from 'fs';

const ManageNation = () => {
  const [isModifyState, setIsModifyState] = useState<boolean>(true);
  const [modifyButtonText, setModifyButtonText] = useState<string>('수정하기');
  const [isPaycheckState, setIsPaycheckState] = useState<boolean>(true);
  const [allIsChecked, setAllIsChecked] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>('');
  const [nationList, setNationList] = useRecoilState(nationListState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickModify = () => {
    setIsModifyState((isModifyState) => !isModifyState);
    isModifyState
      ? setModifyButtonText('적용하기')
      : setModifyButtonText('수정하기');
  };
  const onClickPayCheck = () => {
    setIsPaycheckState((isPaycheckState) => false);
  };
  const getNationList = () => {
    axiosInstance
      .get('/manage')
      .then((response) => {
        setNationList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const modifyNation = (memberId: number, jobName: string) => {
    axiosInstance
      .put(`/manage/${memberId}`, {
        job: {
          jobName: jobName,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteNation = (memberId: number) => {
    axiosInstance
      .delete(`/manage/${memberId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const searchNation = (nickname: string) => {
    axiosInstance
      .get(`/manage/search?searchWord=${nickname}`)
      .then((response) => {
        setNationList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleAllCheck = async () => {
    setAllIsChecked((prev) => !prev);
  };
  const allItemIsChecked = () => {
    setNationList(
      nationList.map((key: any) => (key ? { ...key, isChecked: true } : key))
    );
  };
  const allItemIsNotChecked = () => {
    setNationList(
      nationList.map((key: any) => (key ? { ...key, isChecked: false } : key))
    );
  };

  useEffect(() => {
    getNationList();
  }, []);
  useEffect(() => {
    allIsChecked ? allItemIsChecked() : allItemIsNotChecked();
  }, [allIsChecked]);

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
            <PaycheckButton
              isPaycheckState={isPaycheckState}
              backgroundColor={color.warm_gray1}
              color={color.white}
              borderColor={color.warm_gray1}
              onClick={onClickPayCheck}
            >
              월급주기
            </PaycheckButton>
          </TopBarLeftItemsContainer>
          <SearchBox
            width={9}
            height={1}
            value={searchWord}
            placeholder='이름 검색'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              searchNation(searchWord);
              setSearchWord(e.target.value);
            }}
            onSubmit={(e: any) => {
              e.preventDefault();
              searchNation(searchWord);
              setSearchWord('');
            }}
          />
        </TopBarContainer>
        <ListTitleContainer>
          <CheckBox
            isChecked={allIsChecked}
            onClick={handleAllCheck}
            style={{ marginLeft: '0.5rem', marginRight: '3rem' }}
          />
          <Typo fontSize={1.2} style={{ width: '8%' }}>
            랭킹
          </Typo>
          <Typo fontSize={1.2} style={{ width: '8%' }}>
            이름
          </Typo>
          <Typo fontSize={1.2} style={{ width: '12%' }}>
            직업
          </Typo>
          <Typo fontSize={1.2} style={{ width: '36%' }}>
            하는 일
          </Typo>
          <Typo fontSize={1.2} style={{ width: '8%' }}>
            월급
          </Typo>
          <Typo fontSize={1.2} style={{ width: '8%', marginRight: '8%' }}>
            총 재산
          </Typo>
        </ListTitleContainer>
        <StyledHorizontalRule />
        {nationList &&
          nationList.map((nation: any, index: any) => {
            return (
              nation && (
                <ListItemContainer key={nation.memberId}>
                  <CheckBox
                    onClick={() => {
                      setNationList(
                        nationList.map((value: any) =>
                          value.memberId === nation.memberId
                            ? {
                                ...value,
                                isChecked: !value.isChecked,
                              }
                            : { ...value }
                        )
                      );
                    }}
                    isChecked={nation.isChecked}
                    style={{
                      marginLeft: '0.5rem',
                      marginRight: '3rem',
                    }}
                  />
                  <Typo fontSize={1.2} style={{ width: '8%' }}>
                    {index + 1}
                  </Typo>
                  <Typo fontSize={1.2} style={{ width: '8%' }}>
                    {nation.nickname}
                  </Typo>
                  {isModifyState ? (
                    <Typo fontSize={1.2} style={{ width: '12%' }}>
                      {nation.jobName}
                    </Typo>
                  ) : (
                    <DropDown
                      key={nation.memberId}
                      itemList={nation.jobList}
                      selectedItem={nation.jobName}
                      style={{ width: '12%' }}
                      height={1.8}
                      onChange={(e) => {
                        setNationList(
                          nationList.map((value: any) =>
                            value.memberId === nation.memberId
                              ? { ...value, jobName: e.target.value }
                              : value
                          )
                        );
                        nationList.map((value: any) => {
                          if (value.memberId === nation.memberId) {
                            modifyNation(value.memberId, e.target.value);
                          }
                        });
                      }}
                    />
                  )}
                  <Typo fontSize={1.2} style={{ width: '36%' }}>
                    {nation.jobContent}
                  </Typo>
                  <Typo fontSize={1.2} style={{ width: '8%' }}>
                    {nation.payCheck}
                  </Typo>
                  <Typo fontSize={1.2} style={{ width: '8%' }}>
                    {nation.property}
                  </Typo>
                  <Button
                    backgroundColor={color.deep}
                    color={color.white}
                    onClick={() => {
                      setIsModalOpen(true);
                      setNationList(
                        nationList.filter(
                          (value: any) => value.memberId !== nation.memberId
                        )
                      );
                      nationList.map((value: any) => {
                        if (value.memberId === nation.memberId) {
                          deleteNation(value.memberId);
                        }
                      });
                    }}
                    style={{
                      marginLeft: '1rem',
                      marginRight: '1rem',
                      marginTop: '0.5rem',
                      border: 'solid',
                    }}
                  >
                    국민 삭제
                  </Button>
                  {isModalOpen && (
                    <Modal
                      closeModal={() => {
                        setIsModalOpen(false);
                      }}
                    />
                  )}
                </ListItemContainer>
              )
            );
          })}
      </>
    </Root>
  );
};

export default ManageNation;
