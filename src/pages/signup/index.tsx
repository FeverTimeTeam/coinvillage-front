import React from 'react';
import styled from 'styled-components';
import { Root } from '../../../styles/login';
import deviceSize from '../../constants/deviceSize';
import { ImageWrapper } from '../../../styles/signup';

const SignupRoot = styled(Root)`
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${deviceSize.laptop}) {
    flex-direction: row;
  }
`;

function signup() {
  return (
    <SignupRoot>
      <ImageWrapper>
        <span>선생님이에요</span>
      </ImageWrapper>
      <ImageWrapper>
        <span>학생이에요</span>
      </ImageWrapper>
    </SignupRoot>
  );
}

export default signup;
