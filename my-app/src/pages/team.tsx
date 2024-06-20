import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import styled from 'styled-components';

const TeamLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    flex: 1;
    width: 100%;
    font-weight: 600;
    .team_wrapper {
      font-size: 2rem;
      white-space: nowrap;
      margin: 5rem 5rem 0 5rem;
      .cate {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-bottom: 1.5rem;
        font-weight: 600;
      }
      .team {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-bottom: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 1430px) {
    main {
      .team_wrapper {
        font-size: 1.2rem;
        .cate {
          grid-template-columns: 20% 35% 1fr;
        }
        .team {
          grid-template-columns: 20% 35% 1fr;
        }
      }
    }
  }
  @media screen and (max-width: 580px) {
    main {
      .team_wrapper {
        font-size: 1rem;
        margin-right: 1rem;
        margin-left: 1rem;
      }
    }
  }
`;

const Team = () => {
  return (
    <TeamLayout>
      <Header />
      <main>
        <div className='team_wrapper'>
          <div className='cate'>
            <div>직위</div>
            <div>담당 업무</div>
            <div>보유 역량</div>
          </div>
          <div className='team'>
            <div>CEO</div>
            <div>전략 / 경영 / 기술 수립</div>
            <div>의과대학 교수 / 정형외과전문의 / 의사(20년)</div>
          </div>
          <div className='team'>
            <div>CFO</div>
            <div>재무 / 회계 / 투자 / 인사</div>
            <div>자연과학대학사 / 경영(10년) / 바이오, AI(4년)</div>
          </div>
          <div className='team'>
            <div>부장</div>
            <div>CRO / 기술개발 / 임상 논문</div>
            <div>의학박사과정 / 간호사(9년) / CRO(8년)</div>
          </div>
          <div className='team'>
            <div>부장</div>
            <div>프로그램 개발 / GMP품질관리</div>
            <div>자연과학대학사 / AI 진단 프로그램(5건)</div>
          </div>
          <div className='team'>
            <div>연구간호사</div>
            <div>CRO / 데이터 수집, 전처리</div>
            <div>간호사(7년) / 데이터전처리(2년)</div>
          </div>
          <div className='team'>
            <div>개발자</div>
            <div>백엔드</div>
            <div>API / Server</div>
          </div>
          <div className='team'>
            <div>개발자</div>
            <div>프론트엔드</div>
            <div>디자인 / API</div>
          </div>
          <div className='team'>
            <div>개발자</div>
            <div>인공지능</div>
            <div>컴퓨터 전공</div>
          </div>
        </div>
      </main>
      <Footer />
    </TeamLayout>
  );
};

export default Team;
