import BusinessModel from '@/components/BusinessModel';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Speciality from '@/components/Speciality';
import XrayCompare from '@/components/XrayCompare';
import Image from 'next/image';
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

const LegAppLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  h2 {
    margin: 2rem 0;
  }
  .imgs_wrapper {
    display: flex;
    .img_wrapper {
      margin-right: 2rem;
      img {
        position: relative !important;
        min-width: 100px;
      }
    }
  }
`;

const Intro = () => {
  return (
    <IntroLayout>
      <Header />
      <main>
        <Speciality />
        <BusinessModel />
        <LegAppLayout>
          <h2>휜다리 측정앱</h2>
          <div className='imgs_wrapper'>
            <div className='img_wrapper'>
              <Image src='/imgs/legApp/img01.png' fill alt='img' />
            </div>
            <div className='img_wrapper'>
              <Image src='/imgs/legApp/img02.png' fill alt='img' />
            </div>
            <div className='img_wrapper'>
              <Image src='/imgs/legApp/img03.png' fill alt='img' />
            </div>
          </div>
        </LegAppLayout>
        <XrayCompare />
      </main>
      <Footer />
    </IntroLayout>
  );
};

export default Intro;
