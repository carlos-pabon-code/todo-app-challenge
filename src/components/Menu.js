import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.section`
  text-align: center;
  width: 100%;
`;

const MenuNavigation = styled.nav`
  padding-top: 3rem;
`;

const MenuLink = styled.span`
  font-family: var(--montserrat);
  font-size: 14px;
  color: var(--dark-color);
  font-weight: 600;
  margin: 0 1rem;
  @media (min-width: 768px) {
    margin: 0 3rem;
  }
`;

const MenuSeparator = styled.hr`
  width: 100%;
  border: 1px solid var(--gray-color);
  margin: 1.1rem auto;
`;

let active = {
  borderBottom: "4px solid var(--primary-color)",
  borderRadius: "4px",
  padding: "1rem 0",
};

const Menu = () => {
  return (
    <>
      <MenuContainer>
        <MenuNavigation>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? active : undefined)}
                to=""
              >
                <MenuLink>All</MenuLink>
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? active : undefined)}
                to="active"
              >
                <MenuLink>Active</MenuLink>
              </NavLink>
              <NavLink
                style={({ isActive }) => (isActive ? active : undefined)}
                to="completed"
              >
                <MenuLink>Completed</MenuLink>
              </NavLink>
            </li>
          </ul>
        </MenuNavigation>
      </MenuContainer>
      <MenuSeparator />
      <Outlet />
    </>
  );
};

export default Menu;
