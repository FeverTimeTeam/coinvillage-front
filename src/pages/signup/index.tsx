import React from 'react';
import styled from 'styled-components';
import { Root } from '../../../styles/login';
import deviceSize from '../../constants/deviceSize';
import { ImageWrapper } from '../../../styles/signup';
import Image from '../../components/image';
import Typo from '../../components/typo';
import Link from 'next/link';

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
      <Link href='/signup/teacher'>
        <div style={{ position: 'relative', marginRight: '15rem' }}>
          <Image width={16} height={16} src='/gray_circle.png' />
          <div
            style={{ position: 'absolute', top: '-4.5rem', left: '-3.5rem' }}
          >
            <Image width={24} height={24} src='/president_icon.png' />
          </div>
          <Typo
            color={'#CD578B'}
            fontSize={2}
            style={{
              marginTop: '2rem',
              marginLeft: '3rem',
              fontWeight: 'bold',
            }}
          >
            대통령이에요
          </Typo>
        </div>
      </Link>
      <Link href='/signup/student'>
        <div style={{ position: 'relative' }}>
          <Image width={16} height={16} src='/gray_circle.png' />
          <div
            style={{ position: 'absolute', top: '-4.5rem', left: '-3.5rem' }}
          >
            <Image width={24} height={24} src='/nation_icon.png' />
          </div>
          <Typo
            color={'#D45435'}
            fontSize={2}
            style={{
              marginTop: '2rem',
              marginLeft: '4rem',
              fontWeight: 'bold',
            }}
          >
            국민이에요
          </Typo>
        </div>
      </Link>
    </SignupRoot>
  );
}

export default signup;
