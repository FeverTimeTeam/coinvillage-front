import React, { useState, useEffect } from 'react';
import { ButtonHTMLAttributes } from 'react';
import axios from 'axios';
import { axiosInstance } from '../queries/index';
import {
  ListItemContainer,
  ListTitleContainer,
  Root,
  TopBarContainer,
  TopBarLeftItemsContainer,
} from '../../styles/manageJob';
import Button from '../components/button';
import color from '../constants/color';
import TextInput from '../components/textInput';
import Typo from '../components/typo';
import StyledHorizontalRule from '../components/horizontalRule';

const ManageJob = () => {
  type memberList = {
    authorityDtoSet: any[];
    email: string;
    memberId: number;
    nickname: string;
    password: string;
    phoneNumer: string;
    property: number;
  };
  type Job = {
    headcount: number;
    jobId: number;
    jobName: string;
    jobContent: string;
    payCheck: number;
    memberList: memberList[];
  };

  const [isModifyState, setIsModifyState] = useState<boolean>(true);
  const [modifyButtonText, setModifyButtonText] = useState<string>('수정하기');
  const [deleteJobId, setDeleteJobId] = useState<number>(-1);
  const onClickModify = () => {
    setIsModifyState((isModifyState) => !isModifyState);
    isModifyState
      ? setModifyButtonText('적용하기')
      : setModifyButtonText('수정하기');
    modifyButtonText == '적용하기' ? onClickAdapt() : null;
  };
  const onClickAdapt = () => {};
  const onClickDelete = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.target);
  };
  const [jobList, setJobList] = useState<Job[] | any[]>([]);
  const getJobList = () => {
    axiosInstance
      .get('/job')
      .then((response) => {
        console.log(response.data);
        setJobList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const deleteJob = () => {
    axiosInstance
      .delete('/job/${product.pid}')
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getJobList();
  }, []);
  useEffect(() => {
    console.log(jobList);
  }, [jobList]);
  console.log(deleteJobId);

  return (
    <Root>
      <>
        <TopBarContainer>
          <TopBarLeftItemsContainer>
            <Typo color={color.deep} fontSize={2}>
              직업 관리
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
          </TopBarLeftItemsContainer>
        </TopBarContainer>
        <Typo fontSize={1}>*담당자 변경은 국민관리에서 해주세요.</Typo>
        {isModifyState ? (
          <>
            <ListTitleContainer>
              <Typo fontSize={1.2} style={{ marginLeft: '2%', width: '12%' }}>
                직업
              </Typo>
              <Typo fontSize={1.2} style={{ width: '42%' }}>
                하는 일
              </Typo>
              <Typo fontSize={1.2} style={{ width: '10%' }}>
                인원
              </Typo>
              <Typo fontSize={1.2} style={{ width: '14%' }}>
                월급
              </Typo>
              <Typo fontSize={1.2} style={{ width: '8%' }}>
                담당자
              </Typo>
            </ListTitleContainer>
            <StyledHorizontalRule />
            {jobList &&
              jobList.map((nation, index) => {
                return (
                  nation && (
                    <ListItemContainer key={nation.id}>
                      <Typo
                        fontSize={1.2}
                        style={{ marginLeft: '2%', width: '12%' }}
                      >
                        {nation.jobName}
                      </Typo>
                      <Typo fontSize={1.2} style={{ width: '42.75%' }}>
                        {nation.jobContent}
                      </Typo>
                      <Typo fontSize={1.2} style={{ width: '9.25%' }}>
                        {nation.headcount}
                      </Typo>
                      <Typo fontSize={1.2} style={{ width: '14%' }}>
                        {nation.payCheck}리브
                      </Typo>
                      <Typo fontSize={1.2} style={{ width: '20%' }}>
                        {`${nation.memberList.email}`}
                      </Typo>
                    </ListItemContainer>
                  )
                );
              })}
          </>
        ) : (
          <>
            <ListTitleContainer>
              <Typo fontSize={1.2} style={{ marginLeft: '8%', width: '9%' }}>
                직업
              </Typo>
              <Typo fontSize={1.2} style={{ width: '49%' }}>
                직업 설명
              </Typo>
              <Typo fontSize={1.2} style={{ width: '9%' }}>
                월급
              </Typo>
              <Typo fontSize={1.2} style={{ width: '14%' }}>
                인원
              </Typo>
            </ListTitleContainer>
            <StyledHorizontalRule
              style={{ width: '75%', marginRight: '20%' }}
            />
            {jobList &&
              jobList.map((job, index) => {
                return (
                  job && (
                    <ListItemContainer key={job.id}>
                      <TextInput
                        placeholder='직업 이름'
                        value={job.jobName}
                        borderRadius={0.5}
                        onChange={onClickAdapt}
                        height={2.5}
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
                        onChange={onClickAdapt}
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
                        onChange={onClickAdapt}
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
                        onChange={onClickAdapt}
                        height={2.5}
                        style={{
                          marginLeft: '2%',
                          width: '4%',
                          textAlign: 'center',
                        }}
                      />

                      <Button
                        backgroundColor={color.black}
                        color={color.white}
                        onClick={onClickDelete}
                        style={{
                          marginLeft: '1rem',
                          marginRight: '1rem',
                          marginTop: '0.5rem',
                          border: 'solid',
                        }}
                      >
                        직업 삭제
                      </Button>
                    </ListItemContainer>
                  )
                );
              })}
          </>
        )}
      </>
    </Root>
  );
};

export default ManageJob;
