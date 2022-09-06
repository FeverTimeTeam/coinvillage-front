import React, { useState } from 'react';
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

const ManagePassbook = () => {
  const [isInterestRate, setIsInterestRate] = useState<string>('');
  const [isPaymentDay, setIsPaymentDay] = useState<string>('');
  const [isDayOfWeek, setIsDayOfWeek] = useState<string>('');
  const [dropDownDisabled, setDropDownDisabled] = useState<boolean>(false);
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);
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

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsInterestRate(e.target.value);
  }
  function onDayChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsPaymentDay(e.target.value);
  }

  return (
    <Root>
      <>
        <TopBarContainer>
          <TopBarLeftItemsContainer>
            <Typo color={color.deep} fontSize={2}>
              통장 관리
            </Typo>
            <Button
              backgroundColor={color.white}
              color={color.kb}
              borderColor={color.kb}
              style={{
                marginLeft: '1rem',
                marginRight: '1rem',
                border: 'solid',
              }}
            >
              적용하기
            </Button>
          </TopBarLeftItemsContainer>
        </TopBarContainer>
        <GuideBox>
          <Typo color={color.deep}>
            통장에는 입출금 통장, 적금 통장, 주식 통장이 있습니다.
            <br />
            적금에는 이자가 적용되어 기간별로 국민에게 이자가 지급됩니다.
          </Typo>
        </GuideBox>
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
            onChange={onChange}
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
            onChange={onDayChange}
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
      </>
    </Root>
  );
};

export default ManagePassbook;
