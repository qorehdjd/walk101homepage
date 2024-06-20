import React from 'react';
import styled from 'styled-components';

const BusinessModelLayout = styled.div`
  text-align: center;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  h2 {
    margin: 2rem 0;
  }
  .row {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    .border {
      border: 1px solid black;
      padding: 2rem;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const BusinessModel = () => {
  return (
    <BusinessModelLayout>
      <h2>Business Model (overall)</h2>
      <div style={{ border: '1px solid black' }}>
        <div className='row'>
          <div className='border'>B2B</div>
          <div className='border'>
            보조기/
            <br />
            Insole
          </div>
          <div className='border'>
            헬스장/요가/
            <br />
            필라테스
          </div>
          <div className='border'>
            재활의학과/
            <br />
            물리치료사
          </div>
          <div className='border'>병원</div>
          <div className='border'>초기</div>
        </div>
        <div className='row'>
          <div className='border'>B2C</div>
          <div className='border'>개인 결제</div>
          <div className='border'>구독 서비스</div>
          <div className='border'>임상시험</div>
          <div className='border'>2년</div>
          <div className='border'>처방</div>
        </div>
        <div className='row'>
          <div className='border'>R&D</div>
          <div className='border'>
            인공지능
            <br />
            의료기기
          </div>
          <div className='border'>
            디지털
            <br />
            치료기기
          </div>
          <div className='border'>
            신의료
            <br />
            기술
          </div>
          <div className='border'>
            혁신
            <br />
            의료기술
          </div>
          <div className='border'>3년</div>
        </div>
      </div>
    </BusinessModelLayout>
  );
};

export default BusinessModel;
