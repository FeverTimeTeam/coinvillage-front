import Head from 'next/head';
import Header from './Header';
import styled from 'styled-components';
import deviceSize from '../constants/deviceSize';

const Main = styled.main``;

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <Main>
      <Head>
        <title>코빌: 코인빌리지</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
    </Main>
  );
}
