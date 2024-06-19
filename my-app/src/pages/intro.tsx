import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import styled from 'styled-components';

const IntroLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    flex: 1;
  }
`;

const Intro = () => {
  return (
    <IntroLayout>
      <Header />
      <main>인트로페이지</main>
      <Footer />
    </IntroLayout>
  );
};

export default Intro;
