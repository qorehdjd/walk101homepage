import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const XrayCompareLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  .left_wrapper {
    text-align: center;
    font-size: 2rem;
    margin-right: 3rem;
    .img_wrapper {
      img {
        position: relative !important;
        min-width: 200px;
      }
    }
  }
  .right_wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    .img_wrapper {
      flex: 1;
      border: 2px solid black;
      border-radius: 4px;
      img {
        position: relative !important;
        min-width: 200px;
      }
    }
  }
`;

const XrayCompare = () => {
  return (
    <XrayCompareLayout>
      <div className='left_wrapper'>
        <h2>전문의 40초</h2>
        <div className='img_wrapper'>
          <Image src='/imgs/Xray/legImg01.png' fill alt='img' />
        </div>
      </div>
      <div className='right_wrapper'>
        <div>
          <div>ScanoX 63% 단축</div>
          <div>Acc 95%</div>
        </div>
        <div className='img_wrapper'>
          <Image src='/imgs/Xray/legImg02.png' fill alt='img' />
        </div>
      </div>
    </XrayCompareLayout>
  );
};

export default XrayCompare;
