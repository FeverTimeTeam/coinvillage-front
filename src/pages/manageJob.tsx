import React, { useState } from 'react';
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
  type Job = {
    id: number;
    jobName: string;
    jobDescription: string;
    workForce: number;
    pay: number;
    working: string[];
  };
  const [isModifyState, setIsModifyState] = useState<boolean>(true);
  const [modifyButtonText, setModifyButtonText] = useState<string>('수정하기');
  const onClickModify = () => {
    setIsModifyState((isModifyState) => !isModifyState);
    isModifyState
      ? setModifyButtonText('적용하기')
      : setModifyButtonText('수정하기');
    modifyButtonText == '적용하기' ? onClickAdapt() : null;
  };
  const onClickAdapt = () => {};

  const [jobList, setJobList] = useState<Job[] | any[]>([
    {
      id: 0,
      jobName: '은행원',
      jobDescription: '친구들의 돈 관리',
      workForce: 2,
      pay: 100,
      working: ['유다연', '이승우'],
    },
    {
      id: 1,
      jobName: '청소부',
      jobDescription: '반 청결 관리',
      workForce: 1,
      pay: 100,
      working: ['이주현'],
    },
    {
      id: 2,
      jobName: '투자자',
      jobDescription: '주식 투자 관리',
      workForce: 3,
      pay: 100,
      working: ['개미', '파리', '모기'],
    },
  ]);
  const onClickDelete = () => {};
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
                        {nation.jobDescription}
                      </Typo>
                      <Typo fontSize={1.2} style={{ width: '9.25%' }}>
                        {nation.workForce}
                      </Typo>
                      <Typo fontSize={1.2} style={{ width: '14%' }}>
                        {nation.pay}리브
                      </Typo>
                      <Typo fontSize={1.2} style={{ width: '20%' }}>
                        {`${nation.working}`}
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
                        onChange={onClickDelete}
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
                        value={job.jobDescription}
                        onChange={onClickDelete}
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
                        value={job.pay}
                        onChange={onClickDelete}
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
                        value={job.workForce}
                        onChange={onClickDelete}
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
