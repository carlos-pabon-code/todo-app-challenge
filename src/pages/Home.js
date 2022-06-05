import styled from "styled-components";
import Menu from "../components/Menu";
import Footer from "./Footer";

const HomeContainer = styled.section`
  padding: 1rem;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;
const HomeTitle = styled.h1`
  font-family: var(--raleway);
  font-size: 36px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <main role="main">
        <HomeTitle>#todo</HomeTitle>
        <Menu />
      </main>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
