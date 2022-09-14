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
  HorizontalRule,
} from '../../styles/manageInvestment';
import { axiosInstance } from '../queries/index';
import Button from '../components/button';
import color from '../constants/color';
import NumberInput from '../components/numberInput';
import Typo from '../components/typo';
import Modal from '../components/modal';
import { useRecoilState } from 'recoil';
import { loginState, stocksListState, detailStockState } from '../recoil';
import { useRouter } from 'next/router';

const ManageInvestment = () => {
  const [stockList, setStockList] = useRecoilState(stocksListState);
  const [detailStock, setDetailStock] = useRecoilState(detailStockState);
  const [loginUserState, setLoginUserState] = useRecoilState(loginState);
  const [isAddState, setIsAddState] = useState<boolean>(false);
  const [isModifyState, setIsModifyState] = useState<boolean>(false);
  const [isStockContent, setIsStockContent] = useState<string>('');
  const [isStockDescription, setIsStockDescription] = useState<string>('');
  const [isStockPrice, setIsStockPrice] = useState<number>(0);
  const [isPostModalOpen, setIsPostModalOpen] = useState<boolean>(false);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState<boolean>(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isId, setIsId] = useState<number>(-1);
  const router = useRouter();
  const today = new Date();
  const time = {
    year: today.getFullYear(),
    month: String(today.getMonth() + 1).padStart(2, '0'),
    date: today.getDate(),
  };
  const timestring = `${time.year - 2000}.${time.month}.${time.date}`;

  const getStockList = () => {
    axiosInstance
      .get('/stocks/ruler')
      .then((response) => {
        console.log(response.data);
        setStockList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getDetailStockList = async (stockId: number) => {
    await axiosInstance
      .get(`/stocks/ruler/${stockId}`)
      .then((response) => {
        console.log(response.data);
        setDetailStock(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setIsId(stockId);
    setIsStockContent(detailStock.content);
    setIsStockDescription(detailStock.description);
    setIsStockPrice(detailStock.price);
    setIsModifyState(true);
  };

  const postStock = (
    isStockContent: string,
    isStockDescription: string,
    isStockPrice: number
  ) => {
    axiosInstance
      .post('/stocks/ruler', {
        content: isStockContent,
        description: isStockDescription,
        price: isStockPrice,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const modifyStock = (
    stockId: number,
    content: string,
    description: string,
    price: number
  ) => {
    axiosInstance
      .put(`/stocks/ruler/${stockId}`, {
        content: content,
        description: description,
        price: price,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteStock = (stockId: number) => {
    axiosInstance
      .delete(`/stocks/ruler/${stockId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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

  useEffect(() => {
    getStockList();
  }, [isAddState]);

  useEffect(() => {
    getStockList();
  }, [isModifyState]);

  return (
    <Root>
      <>
        <TopBarContainer>
          <TopBarLeftItemsContainer>
            <Typo
              color={color.deep}
              fontSize={1.5}
              style={{ fontWeight: 'bold' }}
              onClick={() => {
                setIsAddState(false);
                setIsModifyState(false);
              }}
            >
              주식(종목) 관리
            </Typo>
            {isAddState || isModifyState ? null : (
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
            )}
          </TopBarLeftItemsContainer>
        </TopBarContainer>
        {!isAddState ? (
          <>
            {isModifyState ? (
              <>
                <MenuDiv>
                  <Button
                    backgroundColor={color.white}
                    color={color.gray}
                    onClick={() => {
                      setIsModifyModalOpen(true);
                      stockList.map((value: any) => {
                        modifyStock(
                          isId,
                          detailStock.content,
                          detailStock.description,
                          detailStock.price
                        );
                      });
                    }}
                    style={{
                      width: '4.5%',
                      marginLeft: '86.5%',
                      fontWeight: 'bold',
                      color: `${color.deep}`,
                    }}
                  >
                    수정
                  </Button>
                  {isModifyModalOpen && (
                    <Modal
                      width={15}
                      height={5}
                      warningMessage={'수정되었습니다.'}
                      closeModal={() => {
                        setIsModifyModalOpen(false);
                        setIsStockContent('');
                        setIsStockDescription('');
                        setIsStockPrice(0);
                        setIsModifyState(false);
                      }}
                    />
                  )}
                  <Button
                    backgroundColor={color.white}
                    color={color.gray}
                    onClick={() => {
                      setIsDeleteModalOpen(true);
                      setStockList(
                        stockList.filter(
                          (value: any, index: any) => value.stockId !== isId
                        )
                      );

                      deleteStock(isId);
                    }}
                    style={{
                      width: '4.5%',
                      fontWeight: 'bold',
                      color: `${color.deep}`,
                    }}
                  >
                    삭제
                  </Button>
                  {isDeleteModalOpen && (
                    <Modal
                      width={15}
                      height={5}
                      warningMessage={'삭제되었습니다.'}
                      closeModal={() => {
                        setIsDeleteModalOpen(false);
                        setIsModifyState(false);
                      }}
                    />
                  )}
                  <Button
                    backgroundColor={color.white}
                    color={color.gray}
                    style={{
                      width: '4.5%',
                      fontWeight: 'bold',
                      color: `${color.deep}`,
                    }}
                    onClick={() => {
                      setIsCancelModalOpen(true);
                    }}
                  >
                    취소
                  </Button>
                  {isCancelModalOpen && (
                    <Modal
                      width={15}
                      height={5}
                      warningMessage={'취소하시겠습니까?'}
                      closeModal={() => {
                        setIsCancelModalOpen(false);
                        setIsModifyState(false);
                      }}
                    />
                  )}
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
                    {detailStock.createdAt}
                  </Typo>
                  <StockNameInput
                    placeholder={'주식 항목 이름을 적어주세요.'}
                    value={detailStock.content}
                    onChange={(e) => {
                      setDetailStock({
                        ...detailStock,
                        content: e.target.value,
                      });
                    }}
                  />
                  <StockContentInput
                    value={detailStock.description}
                    placeholder={'주식 항목에 대한 설명을 적어주세요.'}
                    onChange={(e) => {
                      setDetailStock({
                        ...detailStock,
                        description: e.target.value,
                      });
                    }}
                  />
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
                    <NumberInput
                      value={detailStock.price}
                      onChange={(e) => {
                        setDetailStock({
                          ...detailStock,
                          price: e.target.value,
                        });
                      }}
                    />
                    <Typo
                      color={color.deep}
                      fontSize={1}
                      style={{
                        width: '5%',
                        marginTop: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      리브
                    </Typo>
                  </PriceDiv>
                </GuideBox>
              </>
            ) : (
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
                  <Typo
                    color={color.gray}
                    fontSize={1}
                    style={{ width: '39.5%' }}
                  >
                    종목 이름
                  </Typo>
                  <Typo
                    color={color.gray}
                    fontSize={1}
                    style={{ width: '45.5%' }}
                  >
                    생성 날짜
                  </Typo>
                </ListTitleContainer>
                <StyledHorizontalRule />
                {stockList &&
                  stockList.map((stock: any, index: any) => {
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
                              onClick={() => {
                                getDetailStockList(stock.stockId);
                              }}
                            >
                              {stock.content}
                            </Typo>
                            <Typo
                              fontSize={1.1}
                              color={color.gray}
                              style={{ width: '15%' }}
                            >
                              {stock.createdAt}
                            </Typo>
                            <ItemDiv>
                              <Button
                                backgroundColor={color.white}
                                color={color.black}
                                fontWeight={'bold'}
                                onClick={() => {
                                  getDetailStockList(stock.stockId);
                                }}
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
                                onClick={() => {
                                  setIsDeleteModalOpen(true);
                                  setStockList(
                                    stockList.filter(
                                      (value: any, index: any) =>
                                        value.stockId !== stock.stockId
                                    )
                                  );
                                  stockList.map((value: any) => {
                                    if (value.stockId === stock.stockId) {
                                      deleteStock(value.stockId);
                                    }
                                  });
                                }}
                                style={{
                                  width: '20%',
                                }}
                              >
                                삭제
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
                            </ItemDiv>
                          </ListTitleContainer>
                          <StyledHorizontalRule />
                        </>
                      )
                    );
                  })}
              </>
            )}
          </>
        ) : (
          <>
            <MenuDiv>
              <Button
                backgroundColor={color.white}
                color={color.blue}
                style={{ width: '5%', marginLeft: '90%' }}
                onClick={() => {
                  postStock(isStockContent, isStockDescription, isStockPrice);
                  setIsPostModalOpen(true);
                }}
              >
                완료
              </Button>
              <Button
                backgroundColor={color.white}
                color={color.blue}
                style={{ width: '5%' }}
                onClick={() => {
                  setIsCancelModalOpen(true);
                }}
              >
                취소
              </Button>
              {isCancelModalOpen && (
                <Modal
                  width={15}
                  height={5}
                  warningMessage={'취소하시겠습니까?'}
                  closeModal={() => {
                    setIsCancelModalOpen(false);
                    setIsAddState(false);
                  }}
                />
              )}
              {isPostModalOpen && (
                <Modal
                  width={15}
                  height={5}
                  warningMessage={'추가되었습니다.'}
                  closeModal={() => {
                    setIsPostModalOpen(false);
                    setIsStockContent('');
                    setIsStockDescription('');
                    setIsStockPrice(0);
                    setIsAddState(false);
                  }}
                />
              )}
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
                {timestring}
              </Typo>
              <StockNameInput
                placeholder={'주식 항목 이름을 적어주세요.'}
                value={isStockContent}
                onChange={(e) => {
                  setIsStockContent(e.target.value);
                }}
              />
              <StockContentInput
                value={isStockDescription}
                placeholder={'주식 항목에 대한 설명을 적어주세요.'}
                onChange={(e) => {
                  setIsStockDescription(e.target.value);
                }}
              />
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
                <NumberInput
                  value={isStockPrice}
                  onChange={(e) => {
                    setIsStockPrice(e.target.value);
                  }}
                />
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
