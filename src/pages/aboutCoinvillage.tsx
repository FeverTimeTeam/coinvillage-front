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

const AboutPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 5.25rem);
`;

const aboutCoinvillage = () => {
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
          <Section>2</Section>
          <Section>3</Section>
          <Section>4</Section>
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
