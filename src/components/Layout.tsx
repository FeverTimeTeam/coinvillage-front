import Head from 'next/head';
import Header from './Header';
import styled from 'styled-components';
import deviceSize from '../constants/deviceSize';

const Main = styled.main`
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: ${deviceSize.tablet}) {
    padding-left: 10rem;
    padding-right: 10rem;
  }

  @media screen and (min-width: ${deviceSize.laptop}) {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  @media screen and (min-width: ${deviceSize.large}) {
    padding-left: 16rem;
    padding-right: 16rem;
  }
`;

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
