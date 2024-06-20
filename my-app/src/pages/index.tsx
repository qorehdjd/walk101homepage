import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import styled from 'styled-components';

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    flex: 1;
    margin-top: 4rem;
    position: relative;
    .representative_intro {
      display: flex;
      justify-content: center;
      .text_wrapper {
        font-size: 2rem;
        font-weight: 600;
        width: 30%;
        margin-top: 4rem;
      }
      .representative_img {
        margin-left: 3rem;
        img {
          position: relative !important;
          min-width: 200px;
          max-height: 400px;
        }
      }
    }
    .cooperativeFirm_wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-size: 2rem;
        margin: 2rem 0;
      }
      .imgs_wrapper {
        display: flex;
        .img_wrapper {
          img {
            position: relative !important;
            min-width: 100px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 900px) {
    main {
      .greeting_wrapper {
        p {
          width: 80%;
        }
      }
    }
  }
`;

const Home = () => {
  return (
    <HomeLayout>
      <Header />
      <main>
        <div className='representative_intro'>
          <div className='text_wrapper'>
            <p>안녕하십니까?</p>
            <p>walk101 대표 채동식입니다.</p>
            <br />
            <p>
              휜다리는 외적으로 보았을 때도 불편함이 있겠지만 무릎 관절에 비정상적인 체중 부하로 인해 관절염이 진행될 수
              있습니다. 휜다리는 무릎이 닿지 않는 오다리와 무릎은 붙고 발목이 붙지 않는 안짱다리가 있습니다. 외관상
              휘어져 있기 때문에 미적인 핏을 살리기 어렵고 무릎 연골이 빨리 닳아 퇴행성 관절염이 빠르게 찾아올 수
              있습니다. 측정앱을 활용해 만성 퇴행성 질환인 관절염을 미리 인식하고 예방한다면 노년 시기에도 잘 걸을 수
              있고 삶의 질 역시 향상될 것입니다. 그런 세상을 기여하는 기업을 만들어 나가고 싶은 것이 저의 목표입니다.
            </p>
          </div>
          <div className='representative_img'>
            <Image src='/imgs/img2.png' fill alt='대표' />
          </div>
        </div>
        <div className='cooperativeFirm_wrapper'>
          <h2>협력업체</h2>
          <div className='imgs_wrapper'>
            <div className='img_wrapper'>
              <Image src='/imgs/collaborate/collaborate01.png' fill alt='img' />
            </div>
            <div className='img_wrapper'>
              <Image src='/imgs/collaborate/collaborate02.png' fill alt='img' />
            </div>
            <div className='img_wrapper'>
              <Image src='/imgs/collaborate/collaborate03.jpg' fill alt='img' />
            </div>
            <div className='img_wrapper'>
              <Image src='/imgs/collaborate/collaborate04.png' fill alt='img' />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </HomeLayout>
  );
};

export default Home;
