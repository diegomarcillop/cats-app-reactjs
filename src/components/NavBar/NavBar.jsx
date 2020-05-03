import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-top: 20px;
  padding-right: 16px;
`;

const NavLink = styled.a`
  padding-left: 1vh;
  padding-right: 2vh;
  text-decoration: none;
  font-size: 2.1vh;
  color: #0f0e4e;
  letter-spacing: 1px;
`;

function NavBar() {
  return (
    <>
      <Nav>
        <List>
          <li>
            <NavLink href="/"> HOME </NavLink>
          </li>
          <li>
            <NavLink href="/"> BREEDS </NavLink>
          </li>
          <li>
            <NavLink href="/"> FAVOURITES </NavLink>
          </li>
          <li>
            <NavLink href="/"> RANDOM </NavLink>
          </li>
        </List>
      </Nav>
    </>
  );
}
export default NavBar;
