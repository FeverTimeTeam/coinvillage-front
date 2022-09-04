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
    padding-left: 13rem;
    padding-right: 13rem;
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
        <link rel='icon' href='/logo.svg' />
      </Head>
      <Header />
      {children}
    </Main>
  );
}
