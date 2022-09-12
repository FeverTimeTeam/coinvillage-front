import type { NextPage } from 'next';
import Image from '../components/image';
import styled from 'styled-components';
import Link from 'next/link';
import Typo from '../components/typo';
import color from '../constants/color';

const IndexPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(180deg, #6dc3df 0%, #fffcb7 49.48%);
  height: calc(100vh - 5.25rem);
`;

const Home: NextPage = () => {
  return (
    <IndexPageWrapper>
      <>
        <div style={{ position: 'relative' }}>
          <Image
            src='/main_world.svg'
            style={{ marginLeft: '10%', width: '80%', height: '80%' }}
          />
          <Link href='/manageInvestment'>
            <div style={{ position: 'absolute', top: '8rem', left: '35rem' }}>
              <Image
                src='/investment_button.png'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Link>
          <Link href='/managePassbook'>
            <div style={{ position: 'absolute', top: '8rem', left: '18rem' }}>
              <Image
                src='/passbook_button.png'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Link>
          <Link href='/manageJob'>
            <div style={{ position: 'absolute', top: '18rem', left: '30rem' }}>
              <Image
                src='/job_button.png'
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Link>
          <div style={{ position: 'absolute', top: '4rem', left: '36rem' }}>
            <Image
              src='/chat_text_button.png'
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div style={{ position: 'absolute', top: '-5.5rem', left: '-11rem' }}>
            <Link href='/aboutCoinvillage'>
              <div style={{ position: 'relative' }}>
                <Image
                  src='/union.png'
                  style={{ width: '95%', height: '100%' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.8rem',
                    left: '3.2rem',
                  }}
                >
                  <Typo
                    color={color.warm_gray1}
                    fontSize={1.7}
                    style={{
                      marginTop: '1.5rem',
                      fontWeight: 'bold',
                    }}
                  >
                    About 코빌
                  </Typo>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </>
    </IndexPageWrapper>
  );
};

export default Home;
