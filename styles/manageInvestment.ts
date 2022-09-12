import styled from 'styled-components';
import color from '../src/constants/color';
import deviceSize from '../src/constants/deviceSize';

const Root = styled.div`
  height: calc(100vh - 5.25rem);
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: ${deviceSize.tablet}) {
    padding-left: 10rem;
    padding-right: 10rem;
  }

  @media screen and (min-width: ${deviceSize.laptop}) {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  @media screen and (min-width: ${deviceSize.large}) {
    padding-left: 16rem;
    padding-right: 16rem;
  }
`;

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 7%;
  margin-top: 3%;
`;

const TopBarLeftItemsContainer = styled.div`
  display: flex;
`;

const GuideBox = styled.div`
  margin-left: 10%;
  width: 80%;
  height: 35rem;
  border-radius: 1rem;
  border: solid 0.063rem ${color.inactive};
`;

const ListTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 8%;
  width: 84%;
`;

const StyledHorizontalRule = styled.hr`
  border: solid 0.063rem ${color.light_gray3};
  width: 88%;
  margin-left: 6%;
`;

const ListItemContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

const ItemDiv = styled.div`
  display: flex;
  width: 30%;
`;
const PriceDiv = styled.div`
  display: flex;
  width: 90%;
  height: 4rem;
  margin-left: 5%;
`;

const MenuDiv = styled.div`
  display: flex;
  margin-left: 10%;
  width: 80%;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;
const StockNameInput = styled.input`
  width: 80%;
  height: 5rem;
  outline: none;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-left: 5%;
  border: none;
`;
const StockContentInput = styled.textarea`
  width: 85%;
  height: 13rem;
  outline: none;
  border: none;
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-left: 5%;
  overflow: hidden;
  resize: none;
`;
const HorizontalRule = styled.hr`
  border: solid 0.063rem ${color.light_gray2};
  width: 92%;
  margin-left: 4%;
  margin-top: 5rem;
`;

export {
  Root,
  TopBarContainer,
  TopBarLeftItemsContainer,
  ListItemContainer,
  StyledHorizontalRule,
  ListTitleContainer,
  GuideBox,
  ItemDiv,
  MenuDiv,
  PriceDiv,
  StockNameInput,
  StockContentInput,
  HorizontalRule,
};
