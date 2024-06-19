import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import styled from 'styled-components';

const PatentLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    flex: 1;
  }
`;

const Patent = () => {
  return (
    <PatentLayout>
      <Header />
      <main>특허 페이지</main>
      <Footer />
    </PatentLayout>
  );
};

export default Patent;
