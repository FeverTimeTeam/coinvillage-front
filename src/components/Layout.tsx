import Head from 'next/head';
import Header from './Header';
import styled from 'styled-components';

const Main = styled.main`
  padding-left: 14rem;
  padding-right: 14rem;
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
