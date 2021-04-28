import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SteamGame = ({ to, item }) => {
  return (
    <StyledContainerDiv>
      <Link style={{ color: "white", textDecoration: "none" }} to={to}>
        <StyledShortTytleDiv>
          <img
            src={item.image}
            alt="{item.image}"
            style={{ maxHeight: "50px" }}
          />
        </StyledShortTytleDiv>
        <StyledShortTytleDiv>{item.name}</StyledShortTytleDiv>
      </Link>
    </StyledContainerDiv>
  );
};

const StyledContainerDiv = styled.div`
  padding: 3rem;
`;
const StyledShortTytleDiv = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  img {
    min-height: 7rem;
  }
`;

export default SteamGame;
