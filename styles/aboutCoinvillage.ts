import styled from 'styled-components';
import color from '../src/constants/color';

const ScrollContainer = styled.div`
  scroll-behavior: smooth;
  display: block;
  text-align: center;
  margin: auto;
  overflow-y: scroll;
  width: 100%;
  height: calc(100vh - 5.25rem);
`;

const FirstSection = styled.div`
  position: relative;
  height: calc(100vh - 5.25rem);
  background: linear-gradient(180deg, #6dc3df 0%, #fffcb7 49.48%);
`;
const Section = styled.div`
  height: calc(100vh - 5.25rem);
  border: solid 0.2rem ${color.light_warm_gray};
`;
export { ScrollContainer, FirstSection, Section };
