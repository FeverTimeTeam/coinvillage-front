import type { NextPage } from 'next';
import Image from '../components/image';
import styled from 'styled-components';

const IndexPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 5.25rem);
`;

const Home: NextPage = () => {
  return (
    <IndexPageWrapper>
      <Image src='/main_world.svg' style={{ width: '85%', height: '80%' }} />
    </IndexPageWrapper>
  );
};

export default Home;
