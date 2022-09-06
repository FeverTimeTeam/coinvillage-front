import styled from 'styled-components';
import Button from '../src/components/button';
import { StyledButton } from '../src/components/button';
import color from '../src/constants/color';

const Root = styled.div`
  height: calc(100vh - 5.25rem);
`;

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

type PaycheckButtonProps = {
  isPaycheckState: boolean;
};

const PaycheckButton = styled(StyledButton)<PaycheckButtonProps>`
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  ${(props) =>
    props.isPaycheckState
      ? `background-color: ${color.warm_gray1}`
      : `background-color: ${color.light_gray}`};
`;

export {
  Root,
  TopBarContainer,
  TopBarLeftItemsContainer,
  ListTitleContainer,
  ListItemContainer,
  PaycheckButton,
};
