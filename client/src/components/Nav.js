import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import SearchBar from "./SearchBar";

const Nav = () => {
  const [chosen, setChosen] = useState(null);
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Cloudified
        </Link>
      </h1>
      <SearchBar setChosen={setChosen} />
      <div id="horizontal">
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
          <li>
            <Link to="/gameservicies">Game Servicies</Link>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 5vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #363841;
  a {
    color: white;
    text-decoration: none;
  }
  #horizontal > ul {
    display: flex;
    list-style: none;
  }
  #horizontal > ul > li {
    padding-left: 1rem;
    position: relative;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
`;

export default Nav;
