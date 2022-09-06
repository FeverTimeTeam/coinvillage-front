import styled from 'styled-components';
import color from '../src/constants/color';

const Root = styled.div`
  height: calc(100vh - 5.25rem);
`;

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
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
  TopBarContainer,
  TopBarLeftItemsContainer,
  ListTitleContainer,
  ListItemContainer,
};
