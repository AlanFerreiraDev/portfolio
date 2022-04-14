import HomeHero from 'components/HomeHero';
import { Container, Main } from 'styles/HomeStyles';
import Header from 'components/Header';

export default function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <HomeHero />
      </Main>
    </Container>
  );
}
