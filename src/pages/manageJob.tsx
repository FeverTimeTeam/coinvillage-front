import React, { useState, useEffect } from 'react';
import { ButtonHTMLAttributes } from 'react';
import axios from 'axios';
import { axiosInstance } from '../queries/index';
import {
  ListItemContainer,
  ListTitleContainer,
  Root,
  RootPart,
  TopBarContainer,
  TopBarLeftItemsContainer,
} from '../../styles/manageJob';
import Button from '../components/button';
import color from '../constants/color';
import TextInput from '../components/textInput';
import Typo from '../components/typo';
import Modal from '../components/modal';
import StyledHorizontalRule from '../components/horizontalRule';
import { useRecoilState } from 'recoil';
import { jobListState } from '../recoil';
import { useRouter } from 'next/router';
import { loginState } from '../recoil';

const ManageJob = () => {
  /*type memberList = {
    authorityDtoSet: any[];
    email: string;
    memberId: number;
    nickname: string;
    password: string;
    phoneNumer: string;
    property: number;
  };
  type job = {
    headcount: number;
    jobId: number;
    jobName: string;
    jobContent: string;
    payCheck: number;
    memberList: memberList[];
  }; 
  */
  const [isModifyState, setIsModifyState] = useState<boolean>(true);
  const [modifyButtonText, setModifyButtonText] = useState<string>('수정하기');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [jobList, setJobList] = useRecoilState(jobListState);

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
  const onChange = () => {};
  const getJobList = () => {
    axiosInstance
      .get('/jobs')
      .then((response) => {
        console.log(response.data);
        setJobList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const modifyJob = (jobId: number, jobContent: string, payCheck: number) => {
    axiosInstance
      .put(`/jobs/${jobId}`, {
        jobContent: jobContent,
        payCheck: payCheck,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteJob = (jobId: number) => {
    axiosInstance
      .delete(`/jobs/${jobId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getJobList();
  }, [isModalOpen]);

  /*console.log(
    jobList.map((job) => {
      console.log(job.memberList);
    })
  ); 
  */

  return (
    <Root>
      <>
        <RootPart>
          <TopBarContainer>
            <TopBarLeftItemsContainer>
              <Typo
                color={color.deep}
                fontSize={1.5}
                style={{ marginTop: '0.2rem', fontWeight: 'bold' }}
              >
                직업 관리
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
              <Button
                backgroundColor={color.white}
                color={color.kb}
                borderColor={color.kb}
                onClick={() => {
                  setIsModalOpen(true);
                }}
                style={{
                  marginRight: '1rem',
                  border: 'solid',
                }}
              >
                직업 추가
              </Button>
              {isModalOpen && (
                <Modal
                  width={30}
                  height={15}
                  jobInput={true}
                  closeModal={() => {
                    setIsModalOpen(false);
                  }}
                />
              )}
            </TopBarLeftItemsContainer>
          </TopBarContainer>
          <Typo fontSize={1}>*담당자 변경은 국민관리에서 해주세요.</Typo>
          {isModifyState ? (
            <>
              <ListTitleContainer>
                <Typo
                  fontSize={1.2}
                  style={{ fontWeight: 'bold', marginLeft: '2%', width: '12%' }}
                >
                  직업
                </Typo>
                <Typo
                  fontSize={1.2}
                  style={{ fontWeight: 'bold', width: '42%' }}
                >
                  하는 일
                </Typo>
                <Typo
                  fontSize={1.2}
                  style={{ fontWeight: 'bold', width: '10%' }}
                >
                  인원
                </Typo>
                <Typo
                  fontSize={1.2}
                  style={{ fontWeight: 'bold', width: '14%' }}
                >
                  월급
                </Typo>
                <Typo
                  fontSize={1.2}
                  style={{ fontWeight: 'bold', width: '8%' }}
                >
                  담당자
                </Typo>
              </ListTitleContainer>
              <StyledHorizontalRule />
              {jobList &&
                jobList.map((job: any, index: any) => {
                  return (
                    job && (
                      <ListItemContainer key={job.jobId}>
                        <Typo
                          fontSize={1.2}
                          style={{ marginLeft: '2%', width: '12%' }}
                        >
                          {job.jobName}
                        </Typo>
                        <Typo fontSize={1.2} style={{ width: '42.75%' }}>
                          {job.jobContent}
                        </Typo>
                        <Typo fontSize={1.2} style={{ width: '9.25%' }}>
                          {job.headcount}
                        </Typo>
                        <Typo fontSize={1.2} style={{ width: '14%' }}>
                          {job.payCheck}리브
                        </Typo>
                        {job.memberList &&
                          job.memberList.map((member: any, index: any) => {
                            return (
                              <Typo fontSize={1.2} style={{ width: '5%' }}>
                                {index === job.headcount - 1
                                  ? `${member.nickname}`
                                  : `${member.nickname},`}
                              </Typo>
                            );
                          })}
                      </ListItemContainer>
                    )
                  );
                })}
            </>
          ) : (
            <>
              <ListTitleContainer>
                <Typo
                  fontSize={1.2}
                  style={{
                    fontWeight: 'bold',
                    marginLeft: '7.5%',
                    width: '10.5%',
                  }}
                >
                  직업
                </Typo>
                <Typo
                  fontSize={1.2}
                  style={{ fontWeight: 'bold', width: '49%' }}
                >
                  하는 일
                </Typo>
                <Typo
                  fontSize={1.2}
                  style={{ fontWeight: 'bold', width: '8.5%' }}
                >
                  월급
                </Typo>
                <Typo
                  fontSize={1.2}
                  style={{ fontWeight: 'bold', width: '4%' }}
                >
                  인원
                </Typo>
              </ListTitleContainer>
              <StyledHorizontalRule />
              {jobList &&
                jobList.map((job: any, index: any) => {
                  return (
                    job && (
                      <ListItemContainer key={job.jobId}>
                        <TextInput
                          placeholder='직업 이름'
                          onChange={onChange}
                          value={job.jobName}
                          borderRadius={0.5}
                          height={2.5}
                          disabled={true}
                          style={{
                            marginLeft: '5%',
                            width: '8%',
                            textAlign: 'center',
                          }}
                        />
                        <TextInput
                          placeholder='직업 설명'
                          borderRadius={0.5}
                          value={job.jobContent}
                          onChange={(e) => {
                            setJobList(
                              jobList.map((value: any) =>
                                value.jobId === job.jobId
                                  ? { ...value, jobContent: e.target.value }
                                  : value
                              )
                            );
                          }}
                          height={2.5}
                          style={{
                            marginLeft: '2%',
                            width: '43.5%',
                            paddingLeft: '1.5rem',
                          }}
                        />
                        <TextInput
                          placeholder='월급'
                          borderRadius={0.5}
                          value={job.payCheck}
                          onChange={(e) => {
                            setJobList(
                              jobList.map((value: any) =>
                                value.jobId === job.jobId
                                  ? { ...value, payCheck: e.target.value }
                                  : value
                              )
                            );
                          }}
                          height={2.5}
                          style={{
                            marginLeft: '2%',
                            width: '6.5%',
                            textAlign: 'right',
                            paddingRight: '1.5rem',
                          }}
                        />
                        <TextInput
                          placeholder='인원'
                          borderRadius={0.5}
                          value={job.headcount}
                          height={2.5}
                          disabled={true}
                          onChange={onChange}
                          style={{
                            marginLeft: '2%',
                            width: '4%',
                            textAlign: 'center',
                          }}
                        />
                        <Button
                          backgroundColor={color.deep}
                          color={color.white}
                          onClick={() => {
                            setIsModifyModalOpen(true);
                            jobList.map((value: any) => {
                              if (value.jobId === job.jobId) {
                                modifyJob(
                                  value.jobId,
                                  value.jobContent,
                                  value.payCheck
                                );
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
                          직업 수정
                        </Button>
                        {isModifyModalOpen && (
                          <Modal
                            width={15}
                            height={5}
                            warningMessage={'수정되었습니다.'}
                            closeModal={() => {
                              setIsModifyModalOpen(false);
                            }}
                          />
                        )}
                        <Button
                          backgroundColor={color.deep}
                          color={color.white}
                          onClick={() => {
                            setIsDeleteModalOpen(true);
                            setJobList(
                              jobList.filter(
                                (value: any, index: any) =>
                                  value.jobId !== job.jobId
                              )
                            );
                            jobList.map((value: any) => {
                              if (value.jobId === job.jobId) {
                                deleteJob(value.jobId);
                              }
                            });
                          }}
                          style={{
                            marginTop: '0.5rem',
                            border: 'solid',
                          }}
                        >
                          직업 삭제
                        </Button>
                        {isDeleteModalOpen && (
                          <Modal
                            width={15}
                            height={5}
                            warningMessage={'삭제되었습니다.'}
                            closeModal={() => {
                              setIsDeleteModalOpen(false);
                            }}
                          />
                        )}
                      </ListItemContainer>
                    )
                  );
                })}
            </>
          )}
        </RootPart>
      </>
    </Root>
  );
};

export default ManageJob;
