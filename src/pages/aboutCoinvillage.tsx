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

const EndSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${color.kb};

  #start {
    font-size: 2.2rem;
    color: white;
    font-weight: bold;
  }

  button {
    margin-top: 3rem;
    width: 20rem;
    height: 5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 3rem;
    font-size: 1.7rem;
    font-weight: bold;
    background-color: #ffeab1;
    color: ${color.warm_gray_deep};
    cursor: pointer;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 13.75rem;
    margin-top: 3rem;
    gap: 5rem;
  }

  #nav_menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15.25rem;
    height: 13.75rem;

    #go {
      height: 9.51rem;
      font-size: 3rem;
      font-weight: bold;
      cursor: pointer;
    }

    img {
      width: 15.313rem;
      margin-bottom: 0.4rem;
    }
  }
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

  #phone_with_world {
    position: absolute;
    right: 0rem;
    bottom: 0rem;
    width: 23rem;
    z-index: 0;

    @media screen and (min-width: ${deviceSize.laptop}) {
      width: 25rem;
    }

    @media screen and (min-width: ${deviceSize.large}) {
      width: 30rem;
    }

    @media screen and (min-width: ${deviceSize.xlarge}) {
      width: 35rem;
    }
  }

  #tongjang_main {
    position: absolute;
    right: 0rem;
    bottom: 0rem;
    width: 23rem;
    z-index: 0;

    @media screen and (min-width: ${deviceSize.laptop}) {
      width: 20rem;
    }

    @media screen and (min-width: ${deviceSize.large}) {
      width: 25rem;
    }

    @media screen and (min-width: ${deviceSize.xlarge}) {
      width: 30rem;
    }
  }

  #tongjang3 {
    width: 100%;
  }

  #tooja {
    position: absolute;
    right: 0rem;
    bottom: 10rem;
    width: 23rem;
    z-index: 0;

    @media screen and (min-width: ${deviceSize.laptop}) {
      width: 27rem;
    }

    @media screen and (min-width: ${deviceSize.large}) {
      width: 33rem;
    }

    @media screen and (min-width: ${deviceSize.xlarge}) {
      width: 35rem;
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

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;

  #sectionName {
    font-size: 2rem;
    font-weight: bold;
    color: ${color.kb};
    margin-bottom: 2rem;
  }

  #title {
    font-size: 2.7rem;
    font-weight: bold;
    color: ${color.warm_gray_deep};
    margin-bottom: 0.3rem;
  }

  #title_exp {
    margin-top: 3rem;
    font-size: 1.15rem;
  }

  #title_exp2 {
    margin-top: 0.4rem;
    font-size: 1.15rem;
  }
`;

const aboutCoinvillage = () => {
  const [aboutState, setAboutState] = useRecoilState(aboutPageState);

  useEffect(() => {
    setAboutState({ isAbout: 'about' });
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
                  left: '49%',
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
          <Root>
            <AboutSection>
              <TitleSection>
                <div id='sectionName'>홈</div>
                <div id='title'>코인빌리지를</div>
                <div id='title'>한눈에</div>
                <div id='title_exp'>
                  직업, 투자, 통장 기능을 바로 만나볼 수 있어요
                </div>
              </TitleSection>
              <img src='/phone_with_world.svg' id='phone_with_world' />
            </AboutSection>
          </Root>
          <Root>
            <AboutSection>
              <TitleSection>
                <div id='sectionName'>직업</div>
                <div id='title'>나만의 직업을</div>
                <div id='title'>가질 수 있어요</div>
                <div id='title_exp'>
                  학급 회의를 통해 해당 학급에 필요한 직업을 정합니다.
                </div>
                <div id='title_exp2'>
                  마을의 대통령, 선생님께서는 직업에 맞는 월급을 정하고,
                </div>
                <div id='title_exp2'>
                  국민(학생)은 매달 월급을 받으며 돈을 벌 수 있어요.
                </div>
                <div id='title_exp2'>
                  국민에게는 하는 일과 월급이 적힌 사원증이 지급됩니다.
                </div>
              </TitleSection>
              <img src='/job_phone.svg' id='phone_with_world' />
            </AboutSection>
          </Root>
          <Root>
            <AboutSection>
              <TitleSection>
                <div id='sectionName'>통장</div>
                <div id='title'>능동적으로</div>
                <div id='title'>돈 관리를 할 수 있어요</div>
                <div id='title_exp'>
                  입출금 통장, 적금 통장, 주식 통장을 제공합니다.
                </div>
                <div id='title_exp2'>
                  입출금 통장을 통해서는 들어온 돈(월급)과 소비한 돈을 확인할 수
                  있어요.
                </div>
                <div id='title_exp2'>
                  학급에서 물건을 구매할 때 입출금 통장을 통해 출금을 진행하면
                  돼요.
                </div>
                <div id='title_exp'>
                  또한, 매월 또는 매주 적금을 할 수 있어요. 대통령이 정한
                  이자율에 따라
                </div>
                <div id='title_exp2'>
                  일정 기간이 끝나면 이자와 함께 더 큰 돈을 벌 수 있어요.
                </div>
                <div id='title_exp'>
                  주식을 사고 팔 수 있으며, 그 내역은 주식 통장에 저장돼요.
                </div>
              </TitleSection>
              <img src='/tongjang_main.svg' id='tongjang_main' />
            </AboutSection>
          </Root>
          <Root>
            <AboutSection>
              <img src='/tongjang3.svg' id='tongjang3' />
            </AboutSection>
          </Root>
          <Root>
            <AboutSection>
              <TitleSection>
                <div id='sectionName'>투자</div>
                <div id='title'>투자를 통해</div>
                <div id='title'>돈을 벌어보세요</div>
                <div id='title_exp'>
                  선생님이 제공한 종목에 따라 투자를 진행해보세요.
                </div>
                <div id='title_exp2'>돈을 벌 수도, 돈을 잃을 수도 있으나</div>
                <div id='title_exp2'>재미있는 경제 활동이 될 거에요.</div>
              </TitleSection>
              <img src='/tooja.svg' id='tooja' />
            </AboutSection>
          </Root>
          <EndSection>
            <div id='start'>지금 당장 코빌을 시작해보세요</div>
            <Link href='/'>
              <button>서비스 둘러보기</button>
            </Link>
            <nav>
              <div id='nav_menu'>
                <h1>선생님 회원가입</h1>
                <Link href='/signup/teacher'>
                  <div id='go'>GO</div>
                </Link>
              </div>
              <div id='nav_menu'>
                <h1>학생 회원가입(APP 다운)</h1>
                <img src='appstore.svg' />
                <img src='googleplay.svg' />
              </div>
            </nav>
          </EndSection>
        </ScrollContainer>
      </AboutPageWrapper>
    </>
  );
};
export default aboutCoinvillage;
