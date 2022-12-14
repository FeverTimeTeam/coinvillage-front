import React, { useState, useEffect } from 'react';
import {
  Root,
  TopBarContainer,
  TopBarLeftItemsContainer,
  ListContentContainer,
  GuideBox,
} from '../../styles/managePassbook';
import Button from '../components/button';
import color from '../constants/color';
import TextInput from '../components/textInput';
import Typo from '../components/typo';
import DropDown from '../components/dropDown';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isLoggedInState, loginUserState } from '../recoil';
import { axiosInstance } from '../queries/index';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';

const ManagePassbook = () => {
  const [isInterestRate, setIsInterestRate] = useState<string>('0');
  const [isTax, setIsTax] = useState<string>('0');
  const [isPaymentDay, setIsPaymentDay] = useState<string>('');
  const [inputDisabled, setInputDisabled] = useState<boolean>(false);
  const [isModifyState, setIsModifyState] = useState<boolean>(false);
  const router = useRouter();
  const [loginUser, setLoginUser] = useRecoilState(loginUserState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  useAuthLoadEffect();

  const putSavingsSetting = () => {
    axiosInstance
      .put('/savings/setting', {
        day: isPaymentDay,
        interest: isInterestRate,
        tax: isTax,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const getSavingsSetting = () => {
      axiosInstance
        .get('savings/setting')
        .then((response) => {
          console.log(response.data);
          setIsPaymentDay(response.data.day);
          setIsInterestRate(response.data.interest);
          setIsTax(response.data.tax);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getSavingsSetting();
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
              ?????? ??????
            </Typo>
            {isModifyState ? (
              <Button
                backgroundColor={color.white}
                color={color.kb}
                borderColor={color.kb}
                onClick={() => {
                  setIsModifyState(false);
                  putSavingsSetting();
                }}
                style={{
                  marginLeft: '1rem',
                  marginRight: '1rem',
                  border: 'solid',
                }}
              >
                ????????????
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
                ????????????
              </Button>
            )}
          </TopBarLeftItemsContainer>
        </TopBarContainer>
        <GuideBox>
          <Typo color={color.deep}>
            ????????? ??????
            <br />
            ????????????, ?????? ???????????? ????????? ?????? ??? ????????? ?????? ????????? ????????????
            ?????? ??? ?????? ?????? ???????????????.
            <br />
            ???????????? ????????? ???????????? ???????????? ???????????? ????????? ???????????????.
            <br />
            ????????????, ?????? ??? ????????? ?????? ????????? ????????? ?????? ?????? ?????? ?????????.
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
                ??????
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ width: '13%', marginTop: '0.5rem' }}
              >
                ?????? ?????? ?????????
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
                &nbsp;%&nbsp;&nbsp;&nbsp;&nbsp;??????
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '3%', width: '12%', marginTop: '0.5rem' }}
              >
                ?????? ?????? ??????
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
                }}
              />
              <Typo
                color={color.system_information}
                fontSize={0.9}
                style={{ marginLeft: '3%', width: '15%', marginTop: '0.7rem' }}
              >
                *?????? 1~31 ?????? ??????
              </Typo>
            </ListContentContainer>
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
                ??????
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
                &nbsp;%&nbsp;&nbsp;&nbsp;&nbsp;??????
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
                ??????
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ width: '13.5%', marginTop: '0.5rem' }}
              >
                ?????? ?????? ?????????
              </Typo>
              <Typo
                color={color.black}
                fontSize={1.5}
                style={{
                  width: '5%',
                  textAlign: 'center',
                  textWeight: 'bold',
                  marginTop: '0.4%',
                }}
              >
                {isInterestRate}
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{
                  marginLeft: '1.35%',
                  width: '8%',
                  marginTop: '0.5rem',
                }}
              >
                &nbsp;%&nbsp;&nbsp;&nbsp;&nbsp;??????
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '3%', width: '12%', marginTop: '0.5rem' }}
              >
                ?????? ?????? ??????
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ width: '4%', marginTop: '0.5rem' }}
              >
                ??? ???
              </Typo>
              <Typo
                color={color.black}
                fontSize={1.5}
                style={{
                  width: '4%',
                  textAlign: 'center',
                  textWeight: 'bold',
                  marginTop: '0.4%',
                }}
              >
                {isPaymentDay}
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ width: '4%', marginTop: '0.5rem' }}
              >
                ???
              </Typo>
            </ListContentContainer>
            <ListContentContainer>
              <Typo
                color={color.deep}
                fontSize={1.4}
                style={{ marginLeft: '15%', width: '6%', marginTop: '0.3rem' }}
              >
                ??????
              </Typo>
              <Typo
                color={color.black}
                fontSize={1.5}
                style={{
                  width: '5%',
                  textAlign: 'center',
                  textWeight: 'bold',
                  marginTop: '0.3%',
                }}
              >
                {isTax}
              </Typo>
              <Typo
                color={color.deep}
                fontSize={1.1}
                style={{ marginLeft: '1%', width: '8%', marginTop: '0.5rem' }}
              >
                &nbsp;%&nbsp;&nbsp;&nbsp;&nbsp;??????
              </Typo>
            </ListContentContainer>
          </>
        )}
      </>
    </Root>
  );
};

export default ManagePassbook;
