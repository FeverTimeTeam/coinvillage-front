import React, { useState, useEffect } from 'react';
import {
  Root,
  TopBarContainer,
  TopBarLeftItemsContainer,
  ListTitleContainer,
  StyledHorizontalRule,
  GuideBox,
  ItemDiv,
  MenuDiv,
  PriceDiv,
  StockNameInput,
  StockContentInput,
  PriceInput,
  HorizontalRule,
} from '../../styles/manageInvestment';
import Button from '../components/button';
import color from '../constants/color';
import TextInput from '../components/textInput';
import Typo from '../components/typo';
import Modal from '../components/modal';
import { useRecoilState } from 'recoil';
import { loginState } from '../recoil';
import { useRouter } from 'next/router';

const ManageInvestment = () => {
  type stock = {
    stockName: string;
    stockContent: string;
    price: number;
    createDate: string;
  };
  const [stockList, setStockList] = useState<stock[] | any[]>([
    {
      stockName: '대통령의 몸무게',
      stockContent: '추석이 다가오고 있다.',
      price: 10,
      createDate: '20220905',
    },
    {
      stockName: '대통령의 구독자 수',
      stockContent: '유퀴즈에 출연했다.',
      price: 15,
      createDate: '20220906',
    },
  ]);
  const [isAddState, setIsAddState] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
  const onClickAdd = () => {
    setIsAddState((isAddState) => !isAddState);
  };
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
              주식(종목) 관리
            </Typo>
            {isAddState ? (
              <div style={{ display: 'flex' }}>
                <Button
                  backgroundColor={color.white}
                  color={color.kb}
                  borderColor={color.kb}
                  onClick={onClickAdd}
                  style={{
                    marginLeft: '1rem',
                    marginRight: '0.5rem',
                    border: 'solid',
                    borderWidth: '0.15rem',
                  }}
                >
                  종목 추가
                </Button>
                <Button
                  backgroundColor={color.white}
                  color={'#B13992'}
                  borderColor={'#B13992'}
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                  width={8}
                  style={{
                    border: 'solid',
                    borderWidth: '0.15rem',
                  }}
                >
                  오늘의 정보 추가
                </Button>
                {isModalOpen && (
                  <Modal
                    width={30}
                    height={15}
                    informationInput={true}
                    closeModal={() => {
                      setIsModalOpen(false);
                    }}
                  />
                )}
              </div>
            ) : null}
          </TopBarLeftItemsContainer>
        </TopBarContainer>
        {isAddState ? (
          <>
            <ListTitleContainer style={{ marginTop: '2.5rem' }}>
              <Typo
                color={color.gray}
                fontSize={1}
                style={{
                  width: '15%',
                }}
              >
                No.
              </Typo>
              <Typo color={color.gray} fontSize={1} style={{ width: '40%' }}>
                종목 이름
              </Typo>
              <Typo color={color.gray} fontSize={1} style={{ width: '45%' }}>
                생성 날짜
              </Typo>
            </ListTitleContainer>
            <StyledHorizontalRule />
            {stockList &&
              stockList.map((stock, index) => {
                return (
                  stock && (
                    <>
                      <ListTitleContainer
                        key={stock.id}
                        style={{ marginTop: '1rem', marginBottom: '1rem' }}
                      >
                        <Typo
                          color={color.deep}
                          fontSize={1.2}
                          style={{ width: '15%' }}
                        >
                          {index + 1}
                        </Typo>
                        <Typo
                          color={color.deep}
                          fontSize={1.2}
                          style={{ width: '39.3%' }}
                        >
                          {stock.stockName}
                        </Typo>
                        <Typo
                          fontSize={1.1}
                          color={color.gray}
                          style={{ width: '15%' }}
                        >
                          {stock.createDate}
                        </Typo>
                        <ItemDiv>
                          <Button
                            backgroundColor={color.white}
                            color={color.black}
                            fontWeight={'bold'}
                            style={{
                              width: '10%',
                              marginLeft: '70%',
                            }}
                          >
                            수정
                          </Button>
                          <Button
                            backgroundColor={color.white}
                            color={color.black}
                            fontWeight={'bold'}
                            style={{
                              width: '20%',
                            }}
                          >
                            삭제
                          </Button>
                        </ItemDiv>
                      </ListTitleContainer>
                      <StyledHorizontalRule />
                    </>
                  )
                );
              })}
          </>
        ) : (
          <>
            <MenuDiv>
              <Button
                backgroundColor={color.white}
                color={color.gray}
                style={{ width: '5%', marginLeft: '90%' }}
              >
                수정
              </Button>
              <Button
                backgroundColor={color.white}
                color={color.gray}
                style={{ width: '5%' }}
              >
                삭제
              </Button>
            </MenuDiv>
            <GuideBox>
              <Typo
                color={color.deep}
                fontSize={1}
                style={{
                  marginLeft: '89%',
                  width: '11%',
                  marginTop: '1.5rem',
                }}
              >
                날짜 넣을 자리
              </Typo>
              <StockNameInput type='text' value='선생님 몸무게' />
              <StockContentInput placeholder={'어쩌고 저쩌고 설명..'} />
              <HorizontalRule />
              <PriceDiv>
                <Typo
                  color={color.deep}
                  fontSize={1}
                  style={{
                    marginLeft: '1%',
                    width: '10%',
                    marginTop: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  1주당
                </Typo>
                <PriceInput value='10' />
                <Typo
                  color={color.deep}
                  fontSize={1}
                  style={{
                    width: '5%',
                    marginTop: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  미소
                </Typo>
              </PriceDiv>
            </GuideBox>
          </>
        )}
      </>
    </Root>
  );
};

export default ManageInvestment;
