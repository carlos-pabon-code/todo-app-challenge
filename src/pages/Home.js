import styled from "styled-components";
import AllTasks from "../components/AllTasks";
import Menu from "../components/Menu";

const HomeTitle = styled.h1``;

const Home = () => {
  return (
    <>
      <HomeTitle>#todo</HomeTitle>
      <Menu />
      <AllTasks />
    </>
  );
};

export default Home;
