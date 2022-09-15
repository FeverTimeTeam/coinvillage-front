import React, { useState, useEffect } from 'react';
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
import { axiosInstance } from '../queries/index';
import { useRecoilState } from 'recoil';
import { loginState, nationListState } from '../recoil';
import Modal from '../components/modal';
import { truncate } from 'fs';
import { devNull } from 'os';
import { useRouter } from 'next/router';

const ManageNation = () => {
  const [isModifyState, setIsModifyState] = useState<boolean>(true);
  const [modifyButtonText, setModifyButtonText] = useState<string>('수정하기');
  const [allIsChecked, setAllIsChecked] = useState<boolean>(false);
  const [allItemChecked, setAllItemChecked] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>('');
  const [nationList, setNationList] = useRecoilState(nationListState);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPayModalOpen, setIsPayModalOpen] = useState<boolean>(false);
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);
  const router = useRouter();

  useEffect(() => {
    if (
      loginUserState.isLogin == false ||
      loginUserState.userInfo.memberResponseDto.authorityDtoSet[0]
        .authorityName == 'ROLE_NATION'
    ) {
      alert('비로그인 유저 및 학생 회원은 접근 불가합니다.');
      router.push('/');
    }
  }, []);

  const onClickModify = () => {
    setIsModifyState((isModifyState) => !isModifyState);
    isModifyState
      ? setModifyButtonText('적용하기')
      : setModifyButtonText('수정하기');
  };
  const getNationList = () => {
    axiosInstance
      .get('/managements')
      .then((response) => {
        setNationList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const modifyNation = (memberId: number, jobName: string) => {
    axiosInstance
      .put(`/managements/${memberId}`, {
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
      .delete(`/managements/${memberId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const searchNation = (nickname: string) => {
    axiosInstance
      .get(`/managements/search?searchWord=${nickname}`)
      .then((response) => {
        setNationList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const payNation = (memberId: number) => {
    axiosInstance
      .put(`/managements/pay/${memberId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
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
  const handleAllCheck = () => {
    if (allItemChecked === false && allIsChecked == true) {
      setAllItemChecked(true);
      allItemIsChecked();
    } else if (allItemChecked === true && allIsChecked == true) {
      setAllItemChecked(false);
      setAllIsChecked(false);
      allItemIsNotChecked();
    } else {
      setAllIsChecked(true);
      allItemIsChecked();
      setAllItemChecked(true);
    }
  };

  const checkAllChecked = () => {
    nationList.map((value: any) => {
      if (value.isChecked === false) {
        setAllItemChecked(false);
      }
    });
  };

  const onPayClick = () => {
    nationList.map((value: any) => {
      if (value.isChecked === true) {
        payNation(value.memberId);
        console.log('월급 지급!');
      }
    });
    setIsPayModalOpen(true);
    setAllItemChecked(false);
  };

  useEffect(() => {
    getNationList();
  }, [isPayModalOpen]);

  useEffect(() => {
    checkAllChecked();
  }, [
    nationList.map((value: any) => {
      value.isChecked;
    }),
  ]);

  nationList.map((nation: any) => {
    if (nation.isChecked === true) {
      console.log(nation.nickname);
    }
  });

  return (
    <Root>
      <>
        <TopBarContainer>
          <TopBarLeftItemsContainer>
            <Typo
              color={color.deep}
              fontSize={1.5}
              style={{ marginTop: '0.2rem', fontWeight: 'bold' }}
            >
              국민 관리
            </Typo>
            <Button
              backgroundColor={color.white}
              color={color.kb}
              borderColor={color.kb}
              onClick={onClickModify}
              style={{
                marginLeft: '2rem',
                marginRight: '0.5rem',
                border: 'solid',
              }}
            >
              {modifyButtonText}
            </Button>
            {isModifyState ? (
              <>
                <PaycheckButton
                  backgroundColor={color.warm_gray1}
                  color={color.white}
                  borderColor={color.warm_gray1}
                  onClick={() => {
                    onPayClick();
                  }}
                >
                  월급주기
                </PaycheckButton>
                {isPayModalOpen && (
                  <Modal
                    width={15}
                    height={5}
                    warningMessage={'월급이 지급되었습니다.'}
                    closeModal={() => {
                      setIsPayModalOpen(false);
                    }}
                  />
                )}
              </>
            ) : null}
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
          {!isModifyState ? (
            <div style={{ width: '5rem' }}> </div>
          ) : (
            <div>
              <Typo
                fontSize={0.7}
                style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}
              >
                전체 선택
              </Typo>
              <CheckBox
                isChecked={allItemChecked}
                onClick={handleAllCheck}
                style={{ marginLeft: '0.5rem', marginRight: '3rem' }}
              />
            </div>
          )}
          <Typo fontSize={1.2} style={{ fontWeight: 'bold', width: '8%' }}>
            랭킹
          </Typo>
          <Typo fontSize={1.2} style={{ fontWeight: 'bold', width: '8%' }}>
            이름
          </Typo>
          <Typo fontSize={1.2} style={{ fontWeight: 'bold', width: '15%' }}>
            직업
          </Typo>
          <Typo fontSize={1.2} style={{ fontWeight: 'bold', width: '33%' }}>
            하는 일
          </Typo>
          <Typo fontSize={1.2} style={{ fontWeight: 'bold', width: '8%' }}>
            월급
          </Typo>
          <Typo
            fontSize={1.2}
            style={{ fontWeight: 'bold', width: '8%', marginRight: '8%' }}
          >
            총 재산
          </Typo>
        </ListTitleContainer>
        <StyledHorizontalRule />
        {nationList &&
          nationList
            .filter(
              (nation: any) =>
                nation.memberId !==
                loginUserState.userInfo.memberResponseDto.memberId
            )
            .map((nation: any, index: any) => {
              return (
                nation && (
                  <ListItemContainer key={nation.memberId}>
                    {!isModifyState ? (
                      <div style={{ width: '6rem' }}> </div>
                    ) : (
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
                          marginRight: '3.5rem',
                        }}
                      />
                    )}
                    <Typo fontSize={1.2} style={{ width: '7%' }}>
                      {index + 1}
                    </Typo>
                    <Typo fontSize={1.2} style={{ width: '8.5%' }}>
                      {nation.nickname}
                    </Typo>
                    {isModifyState ? (
                      <Typo fontSize={1.2} style={{ width: '15%' }}>
                        {nation.jobName}
                      </Typo>
                    ) : (
                      <DropDown
                        key={nation.memberId}
                        itemList={nation.jobList}
                        selectedItem={nation.jobName}
                        style={{ width: '18%' }}
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
                    <Typo fontSize={1.2} style={{ width: '35%' }}>
                      {nation.jobContent}
                    </Typo>
                    <Typo fontSize={1.2} style={{ width: '8%' }}>
                      {nation.payCheck}
                    </Typo>
                    <Typo fontSize={1.2} style={{ width: '8%' }}>
                      {nation.property}
                    </Typo>
                    {!isModifyState ? (
                      <Image
                        src='/delete_button.png'
                        hover={true}
                        width={1.5}
                        height={1.5}
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
                          marginLeft: '3rem',
                          marginRight: '5rem',
                        }}
                      />
                    ) : null}
                    {isModalOpen && (
                      <Modal
                        width={15}
                        height={5}
                        warningMessage={'삭제되었습니다.'}
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
