import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const SpecialityLayout = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  h2 {
    margin: 2rem 0;
  }
  .speciality_wrapper {
    display: flex;
    justify-content: center;
    .left_speciality_wrapper {
      border: 1px solid black;
      .left_cate {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        div {
          border: 1px solid black;
        }
      }
      .left_content_wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        .border {
          div {
            border: 1px solid black;
          }
        }
        img {
          position: relative !important;
          width: 100%;
        }
      }
    }
  }
  .right_speciality_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    .border {
      border: 1px solid black;
      width: fit-content;
    }
  }
`;

const Speciality = () => {
  return (
    <SpecialityLayout>
      <h2>Speciality & Network</h2>
      <div className='speciality_wrapper'>
        <div className='left_speciality_wrapper'>
          <div className='left_cate'>
            <div>정형외과</div>
            <div>전문성 (인력양성)</div>
            <div>자문 (제품 고도화)</div>
          </div>
          <div className='left_content_wrapper'>
            <div>
              <Image src='/imgs/speciality/speciality1.png' fill alt='img' />
            </div>
            <div className='border' style={{ display: 'flex' }}>
              <div style={{ width: '50%' }}>
                근골결계
                <br />
                영상 분석
                <br />
                자동화 연구
              </div>
              <div style={{ width: '50%' }}>
                머닝러닝
                <br />
                데이터 사이언스
              </div>
            </div>
            <div className='border' style={{ display: 'flex' }}>
              <div style={{ width: '50%' }}>
                이화여대
                <br />
                신**교수
              </div>
              <div style={{ width: '50%' }}>
                휴먼기계
                <br />
                바이오공학부
              </div>
            </div>
          </div>
          <div className='left_content_wrapper'>
            <div>
              <Image src='/imgs/speciality/speciality2.png' fill alt='img' />
            </div>
            <div className='border' style={{ display: 'flex' }}>
              <div style={{ width: '50%' }}>
                대학원 강의
                <br />
                보건의료정보관
                <br />
                리학1,2
              </div>
              <div style={{ width: '50%' }}>
                박사과정 1명
                <br />
                석사과정 5명
              </div>
            </div>
            <div className='border' style={{ display: 'flex' }}>
              <div style={{ width: '50%' }}>
                한양대
                <br />
                윤**교수
              </div>
              <div style={{ width: '50%' }}>기계공학과</div>
            </div>
          </div>
          <div className='left_content_wrapper'>
            <div>
              <Image src='/imgs/speciality/speciality3.png' fill alt='img' />
            </div>
            <div className='border' style={{ display: 'flex' }}>
              <div style={{ width: '50%' }}>SCI 논문</div>
              <div style={{ width: '50%' }}>최근3년간 6건</div>
            </div>
            <div className='border' style={{ display: 'flex' }}>
              <div style={{ width: '50%' }}>
                교통대
                <br />
                박**교수
              </div>
              <div style={{ width: '50%' }}>
                기계자동차
                <br />
                항공공학부
              </div>
            </div>
          </div>
          <div className='left_content_wrapper'>
            <div>
              <Image src='/imgs/speciality/speciality4.png' fill alt='img' />
            </div>
            <div className='border' style={{ display: 'flex' }}>
              <div style={{ width: '50%' }}>
                인공지능
                <br />
                관련 특허
              </div>
              <div style={{ width: '50%' }}>6건</div>
            </div>
            <div className='border' style={{ display: 'flex' }}>
              <div style={{ width: '50%' }}>
                UNIST
                <br />
                김**교수
              </div>
              <div style={{ width: '50%' }}>전기전자공학과</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='right_speciality_wrapper'>
      <div>
        <div className='border'>
          <h3>다기관 임상시험</h3>
          <div>NIA 인공지능 학습용</div>
          <div>데이터 구축 사업</div>
          <div>가톨릭관동대병원</div>
          <div>신촌세브란스</div>
          <div>강남세브란스</div>
          <div>건국대</div>
          <div>건양대</div>
          <div>동백세브란스</div>
          <div>이화여대</div>
          <div>안양샘병원</div>
          <div>삼성큰병원</div>
        </div>
      </div>
    </div> */}
    </SpecialityLayout>
  );
};

export default Speciality;
