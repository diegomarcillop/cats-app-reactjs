import React from "react";
import { Link } from "react-router-dom";

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

function NavBar() {
  return (
    <>
      <Nav>
        <List>
          <li>
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/breeds" className="link">
              BREEDS
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              FAVOURITES
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              RANDOM
            </Link>
          </li>
        </List>
      </Nav>
    </>
  );
}
export default NavBar;
