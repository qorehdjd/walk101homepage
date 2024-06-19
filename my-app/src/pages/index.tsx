import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styled from 'styled-components';

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  main {
    flex: 1;
  }
`;

const Home = () => {
  return (
    <HomeLayout>
      <Header />
      <main></main>
      <Footer />
    </HomeLayout>
  );
};

export default Home;
