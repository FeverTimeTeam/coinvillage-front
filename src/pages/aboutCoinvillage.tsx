import React, { useState, useEffect } from 'react';
import Image from '../components/image';
import styled from 'styled-components';
import Link from 'next/link';
import Typo from '../components/typo';
import color from '../constants/color';
import {
  ScrollContainer,
  FirstSection,
  Section,
} from '../../styles/aboutCoinvillage';
import { aboutPageState } from '../recoil';
import { useRecoilState } from 'recoil';
import { Root } from '../../styles/manageJob';
import deviceSize from '../constants/deviceSize';

const AboutPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 5.25rem);
`;

const AboutSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .title_area {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: relative;
    margin-bottom: 10rem;
  }

  .subtitle_area {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  #highlight_img {
    position: absolute;
    left: 11rem;
    top: 4.5rem;
    width: 20rem;
    z-index: 0;
  }

  #small_world {
    position: absolute;
    right: 2rem;
    bottom: 7rem;
    width: 30rem;
    z-index: 0;

    @media screen and (min-width: ${deviceSize.laptop}) {
      width: 22rem;
    }

    @media screen and (min-width: ${deviceSize.large}) {
      width: 25rem;
    }

    @media screen and (min-width: ${deviceSize.xlarge}) {
      width: 30rem;
    }
  }

  #introh1 {
    width: 100%;
    margin: 0;
    text-align: left;
    color: ${color.deep};
    z-index: 1;
  }

  #introh1:first-child {
    margin-bottom: 0.4rem;
  }

  #introh4 {
    width: 100%;
    font-size: 1.3rem;
    margin: 0;
    margin-bottom: 0.5rem;
    text-align: left;
    color: ${color.warm_gray1};
  }

  span {
    font-weight: bold;
  }
`;

const aboutCoinvillage = () => {
  const [aboutState, setAboutState] = useRecoilState(aboutPageState);

  useEffect(() => {
    setAboutState({ isAbout: true });
  }, []);

  return (
    <>
      <AboutPageWrapper>
        <ScrollContainer>
          <FirstSection>
            <Image
              src='/main_world.svg'
              style={{
                marginTop: '3%',
                marginLeft: '1%',
                width: '80%',
                height: '80%',
              }}
            />
            <div
              style={{
                backgroundColor: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(3px)',
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0rem',
                left: '0rem',
              }}
            >
              <Image
                src='/about_text.png'
                style={{
                  marginTop: '10%',
                  width: '35%',
                  height: '35%',
                }}
              />
              <Image
                src='/scroll_button.png'
                style={{
                  position: 'absolute',
                  top: '44rem',
                  left: '56.7rem',
                  width: '5%',
                  height: '5%',
                }}
              />
            </div>
          </FirstSection>
          <Root>
            <AboutSection>
              <div className='title_area'>
                <h1 id='introh1'>코빌은</h1>
                <h1 id='introh1'>
                  어린이를 위한 체험형 경제 교육 서비스입니다
                </h1>
                <img src='/highlight_yellow.svg' id='highlight_img' />
              </div>
              <div className='subtitle_area'>
                <div id='introh4'>
                  <span>돈을 벌고 물건을 사는</span>등의 기본적인 경제 활동부터
                </div>
                <div id='introh4'>
                  <span>적금, 투자</span> 등의 능동적인 경제 활동까지.
                </div>
                <div id='introh4'>
                  코빌에서는 생동감있는 경제 활동을 할 수 있습니다.
                </div>
              </div>
              <img src='/small_world.svg' id='small_world' />
            </AboutSection>
          </Root>
          <AboutSection>3</AboutSection>
          <AboutSection>4</AboutSection>
          <Section>5</Section>
          <Section>6</Section>
          <Section>7</Section>
          <Section>8</Section>
        </ScrollContainer>
      </AboutPageWrapper>
    </>
  );
};
export default aboutCoinvillage;
