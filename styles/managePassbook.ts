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

const ListContentContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const GuideBox = styled.div`
  margin-left: 10%;
  width: 77%;
  margin-top: 1.5rem;
  background-color: ${color.light_gray3};
  height: 6rem;
  border-radius: 0.8rem;
  padding: 3% 3%;
  line-height: 1.5;
`;

export {
  Root,
  TopBarContainer,
  TopBarLeftItemsContainer,
  ListContentContainer,
  GuideBox,
};
