import React, { useState, useEffect } from 'react';
import {
  Root,
  TopBarContainer,
  TopBarLeftItemsContainer,
  ListContentContainer,
  ListDayContentContainer,
  GuideBox,
} from '../../styles/managePassbook';
import Button from '../components/button';
import color from '../constants/color';
import TextInput from '../components/textInput';
import Typo from '../components/typo';
import DropDown from '../components/dropDown';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { loginState } from '../recoil';

const ManagePassbook = () => {
  const [isInterestRate, setIsInterestRate] = useState<string>('10');
  const [isTax, setIsTax] = useState<string>('10');
  const [isPaymentDay, setIsPaymentDay] = useState<string>('');
  const [isDayOfWeek, setIsDayOfWeek] = useState<string>('');
  const [dropDownDisabled, setDropDownDisabled] = useState<boolean>(false);
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);
  const [isModifyState, setIsModifyState] = useState<boolean>(false);
  const [isDayOfWeekList, setIsDayOfWeekList] = useState<string[]>([
    '월',
    '화',
    '수',
    '목',
    '금',
    '토',
    '일',
  ]);
  const [dateOfThePaymentList, setDateOfThePaymentList] = useState<string[]>([
    '매주(일주일 단위)',
    '2주 단위',
    '매달(한 달 단위)',
    '2개월마다',
    '3개월마다',
    '4개월마다',
    '6개월마다',
  ]);

  const router = useRouter();
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);

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

  return (
    <Root>
      <>
        <TopBarContainer>
          <TopBarLeftItemsContainer>
            <Typo
              color={color.deep}
              fontSize={1.5}
              style={{ fontWeight: 'bold' }}
            >
              통장 관리
            </Typo>
            {isModifyState ? (
              <Button
                backgroundColor={color.white}
                color={color.kb}
                borderColor={color.kb}
                onClick={() => {
                  setIsModifyState(false);
                }}
                style={{
                  marginLeft: '1rem',
                  marginRight: '1rem',
                  border: 'solid',
                }}
              >
                적용하기
              </Button>
            ) : (
              <Button
                backgroundColor={color.white}
                color={color.kb}
                borderColor={color.kb}
                onClick={() => {
                  setIsModifyState(true);
                }}
                style={{
                  marginLeft: '1rem',
                  marginRight: '1rem',
                  border: 'solid',
                }}
              >
                수정하기
              </Button>
            )}
          </TopBarLeftItemsContainer>
        </TopBarContainer>
        <GuideBox>
          <Typo color={color.deep}>
            적금과 세금
            <br />
            적금이란, 돈을 저축하면 정해진 기간 후 저축한 돈과 이자를 한꺼번에
            받을 수 있는 은행 상품입니다.
            <br />
            적금에는 이자가 적용되어 기간별로 국민에게 이자가 지급됩니다.
            <br />
            세금이란, 학급 내 복지를 위해 일정한 금액을 내는 공동 경비 입니다.
          </Typo>
        </GuideBox>
        {isModifyState ? (
          <>
            <ListContentContainer>
              <Typo
                color={color.deep}
                fontSize={1.4}
                style={{ marginLeft: '15%', width: '6%', marginTop: '0.3rem' }}
              >
                이자
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ width: '13%', marginTop: '0.5rem' }}
              >
                적금 통장 잔액의
              </Typo>
              <TextInput
                placeholder=''
                value={isInterestRate}
                borderRadius={0.5}
                onChange={(e) => {
                  setIsInterestRate(e.target.value);
                }}
                height={2}
                style={{
                  width: '5%',
                  textAlign: 'center',
                }}
              />
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '1%', width: '8%', marginTop: '0.5rem' }}
              >
                &nbsp;%&nbsp;&nbsp;&nbsp;&nbsp;지급
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '3%', width: '12%', marginTop: '0.5rem' }}
              >
                이자 지급 시기
              </Typo>
              <DropDown
                itemList={dateOfThePaymentList}
                style={{ width: '12%', marginTop: '0.2rem' }}
                height={2.5}
                onChange={(e) => {
                  if (
                    e.target.value === '매주(일주일 단위)' ||
                    e.target.value === '2주 단위'
                  ) {
                    setInputDisabled(true);
                    setDropDownDisabled(false);
                  } else {
                    setDropDownDisabled(true);
                    setInputDisabled(false);
                  }
                }}
              />
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '1%', width: '4%', marginTop: '0.5rem' }}
              >
                요일
              </Typo>
              <DropDown
                itemList={isDayOfWeekList}
                style={{ width: '5%', marginTop: '0.2rem', marginRight: '15%' }}
                height={2.5}
                disabled={dropDownDisabled}
              />
            </ListContentContainer>
            <ListDayContentContainer>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '76%', width: '4%', marginTop: '1.75rem' }}
              >
                날짜
              </Typo>
              <TextInput
                placeholder=''
                value={isPaymentDay}
                borderRadius={0.5}
                onChange={(e) => {
                  setIsPaymentDay(e.target.value);
                }}
                height={2}
                disabled={inputDisabled}
                style={{
                  width: '5%',
                  textAlign: 'center',
                  marginTop: '1.5rem',
                }}
              />
            </ListDayContentContainer>
            <Typo
              color={color.system_information}
              fontSize={0.9}
              style={{ marginLeft: '76%', width: '15%', marginTop: '1rem' }}
            >
              *숫자 1~31 입력 가능
            </Typo>
            <hr
              style={{
                border: '0',
                marginTop: '2.5%',
                marginLeft: '10%',
                width: '83%',
                height: '1.5px',
                background: 'lightgray',
              }}
            />
            <ListContentContainer>
              <Typo
                color={color.deep}
                fontSize={1.4}
                style={{ marginLeft: '15%', width: '6%', marginTop: '0.3rem' }}
              >
                세금
              </Typo>
              <TextInput
                placeholder=''
                value={isTax}
                borderRadius={0.5}
                onChange={(e) => {
                  setIsTax(e.target.value);
                }}
                height={2}
                style={{
                  width: '5%',
                  textAlign: 'center',
                }}
              />
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '1%', width: '8%', marginTop: '0.5rem' }}
              >
                &nbsp;%&nbsp;&nbsp;&nbsp;&nbsp;부과
              </Typo>
            </ListContentContainer>
          </>
        ) : (
          <>
            <ListContentContainer>
              <Typo
                color={color.deep}
                fontSize={1.4}
                style={{ marginLeft: '15%', width: '6%', marginTop: '0.3rem' }}
              >
                이자
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ width: '13%', marginTop: '0.5rem' }}
              >
                적금 통장 잔액의
              </Typo>
              <Typo
                color={color.black}
                fontSize={1.5}
                style={{
                  width: '5%',
                  textAlign: 'center',
                  textWeight: 'bold',
                }}
              >
                {isInterestRate}
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '1%', width: '8%', marginTop: '0.5rem' }}
              >
                &nbsp;%&nbsp;&nbsp;&nbsp;&nbsp;지급
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '3%', width: '12%', marginTop: '0.5rem' }}
              >
                이자 지급 시기
              </Typo>
              <DropDown
                itemList={dateOfThePaymentList}
                style={{ width: '12%', marginTop: '0.2rem' }}
                height={2.5}
                onChange={(e) => {
                  if (
                    e.target.value === '매주(일주일 단위)' ||
                    e.target.value === '2주 단위'
                  ) {
                    setInputDisabled(true);
                    setDropDownDisabled(false);
                  } else {
                    setDropDownDisabled(true);
                    setInputDisabled(false);
                  }
                }}
              />
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '1%', width: '4%', marginTop: '0.5rem' }}
              >
                요일
              </Typo>
              <DropDown
                itemList={isDayOfWeekList}
                style={{ width: '5%', marginTop: '0.2rem', marginRight: '15%' }}
                height={2.5}
                disabled={dropDownDisabled}
              />
            </ListContentContainer>
            <ListContentContainer>
              <Typo
                color={color.deep}
                fontSize={1.4}
                style={{ marginLeft: '15%', width: '6%', marginTop: '0.3rem' }}
              >
                세금
              </Typo>
              <Typo
                color={color.black}
                fontSize={1.5}
                style={{
                  width: '5%',
                  textAlign: 'center',
                  textWeight: 'bold',
                }}
              >
                {isTax}
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '1%', width: '8%', marginTop: '0.5rem' }}
              >
                &nbsp;%&nbsp;&nbsp;&nbsp;&nbsp;부과
              </Typo>
            </ListContentContainer>
          </>
        )}
      </>
    </Root>
  );
};

export default ManagePassbook;
