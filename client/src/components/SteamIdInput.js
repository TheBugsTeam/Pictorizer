import React from "react";
import styled from "styled-components";
import SearchIcon from "../images/SearchIcon.png";

const SteamIdInput = ({ searchSteamID, setSteamID }) => {
  const search = (e) => {
    if (e.target.value) {
      setSteamID(e.target.value);
    }
  };

  return (
    <StyledContainerDiv>
      <StyledInput type="text" placeholder="Your Steam ID" onChange={search} />

      <StyledButton
        autoComplete="on"
        type="submit"
        value="Search"
        onClick={() => searchSteamID()}
      />
    </StyledContainerDiv>
  );
};

const StyledButton = styled.input`
  width: 20%;
  font-size: 20px;
  height: 3rem;
  background-color: #363841;
  color: white;
  border-width: 4px;
  border-left-width: 0px;
  border-color: #7d66bd;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const StyledInput = styled.input`
  padding-left: 10px;
  font-size: 20px;
  width: 30%;
  height: 3rem;
  background-color: #363841;
  color: white;
  border-width: 4px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-color: #7d66bd;
  outline: none;
  //background-image: url(${SearchIcon});
  //background-position: 10px 10px;
  //background-repeat: no-repeat;
`;

const StyledContainerDiv = styled.div`
  top: 40%;
  position: absolute;
  width: 100%;
  height: auto;
  text-align: center;
  flex-flow: column;
  vertical-align: middle;
`;

export default SteamIdInput;
