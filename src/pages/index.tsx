import type { NextPage } from 'next';
import Image from '../components/image';

const Home: NextPage = () => {
  return (
    <Image
      src='/main_world_with_background.png'
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default Home;
