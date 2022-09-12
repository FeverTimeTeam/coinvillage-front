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
  justify-content: space-around;

  @media screen and (min-width: ${deviceSize.laptop}) {
    flex-direction: row;

    div:first-child {
      margin-right: 7rem;
    }
  }
`;

function signup() {
  return (
    <SignupRoot>
      <Link href='/signup/teacher'>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image width={15} height={15} src='/gray_circle.png' />
          <div
            style={{
              position: 'absolute',
              top: '-3rem',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Image width={20} height={20} src='/president_icon.png' />
          </div>
          <Typo
            color={'#CD578B'}
            fontSize={2}
            style={{
              marginTop: '2rem',
              fontWeight: 'bold',
            }}
          >
            대통령이에요
          </Typo>
        </div>
      </Link>
      <Link href='/signup/student'>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image width={15} height={15} src='/gray_circle.png' />
          <div
            style={{
              position: 'absolute',
              top: '-3rem',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <Image width={20} height={20} src='/nation_icon.png' />
          </div>
          <Typo
            color={'#D45435'}
            fontSize={2}
            style={{
              marginTop: '2rem',
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
