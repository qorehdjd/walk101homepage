import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const PatentLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    flex: 1;
    margin: 10rem 5rem;
    .img_wrapper {
      box-sizing: border-box;
      gap: 5rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      height: 100%;
      img {
        position: relative !important;
        width: 100%;
        height: 100%;
        border: 1px solid black;
        border-radius: 4px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    main {
      .img_wrapper {
        grid-template-columns: 1fr;
      }
    }
  }
  @media screen and (max-width: 600px) {
    main {
      margin: 5rem 1rem;
    }
  }
`;

const Patent = () => {
  return (
    <PatentLayout>
      <Header />
      <main>
        <div className='img_wrapper'>
          <div>
            <Image src='/imgs/patent/img1.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img2.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img3.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img5.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img7.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img8.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img9.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img11.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img4.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img10.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img6.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img12.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img13.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img14.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img15.png' fill alt='img' />
          </div>
          <div>
            <Image src='/imgs/patent/img16.png' fill alt='img' />
          </div>
        </div>
        <div></div>
      </main>
      <Footer />
    </PatentLayout>
  );
};

export default Patent;
