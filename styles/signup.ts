import styled from 'styled-components';
import deviceSize from '../src/constants/deviceSize';
import color from '../src/constants/color';

export const ImageWrapper = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 9999px;
  background-color: ${color.light_gray};
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: ${deviceSize.laptop}) {
    width: 14rem;
    height: 14rem;
    margin: 0 auto;
  }

  @media screen and (min-width: ${deviceSize.large}) {
    width: 18rem;
    height: 18rem;
    margin: 0 auto;
  }

  span {
    font-weight: bold;
    font-size: 1rem;

    @media screen and (min-width: ${deviceSize.laptop}) {
      font-size: 1.25rem;
    }

    @media screen and (min-width: ${deviceSize.large}) {
      font-size: 1.5rem;
    }
  }
`;
