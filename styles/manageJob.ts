import styled from 'styled-components';
import color from '../src/constants/color';
import deviceSize from '../src/constants/deviceSize';

const Root = styled.div`
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
  height: calc(100vh - 5.25rem);
`;

const RootPart = styled.div`
  margin-left: 7%;
  margin-right: 7%;
`;

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 3%;
`;

const TopBarLeftItemsContainer = styled.div`
  display: flex;
`;

const ListTitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const ListItemContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

export {
  Root,
  RootPart,
  TopBarContainer,
  TopBarLeftItemsContainer,
  ListTitleContainer,
  ListItemContainer,
};
