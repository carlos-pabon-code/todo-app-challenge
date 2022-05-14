import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.section``;
const MenuSeparator = styled.hr``;

const Menu = () => {
  return (
    <>
      <MenuContainer>
        <nav>
          <ul>
            <li>
              <NavLink to="/all">All</NavLink>
              <NavLink to="/">Active</NavLink>
              <NavLink to="/">Completed</NavLink>
            </li>
          </ul>
        </nav>
      </MenuContainer>
      <MenuSeparator />
    </>
  );
};

export default Menu;
