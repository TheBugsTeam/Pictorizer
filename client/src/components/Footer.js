import React from "react";
import styled from "styled-components";
import RawgLogo from "../images/logos/RawgLogo.png";
import github_logo from "../images/logos/github_logo.svg";

const Footer = () => {
  return (
    <StyledDiv>
      <StyledContainerDiv>
        <StyledBugText>
          <p>
            Contact us <br />
            Report a bug
          </p>
        </StyledBugText>
        <StyledTextConainer>
          <a href="https://rawg.io/apidocs">
            <p>
              We used RAWG API <br />
              for our back-end.
            </p>
            {<img src={RawgLogo} alt="RawgLogo" />}
          </a>
        </StyledTextConainer>
        <StyledCloudifiedLogoDiv>
          <a href="https://github.com/TheBugsTeam/cloudified">
            {<img src={github_logo} alt="github_logo" />}
            <p>Developed by TheBugsTeam</p>
          </a>
        </StyledCloudifiedLogoDiv>
      </StyledContainerDiv>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  font-weight: lighter;
  position: absolute;
  display: table;
  bottom: 0px; // leteszi a legaljára
  width: 100%;
  height: 15%;
  background-color: #363841;
  text-align: center;

  a {
    font-size: 17px;
    color: white;
  }
`;

// a styledDiv-en belul vertikalisan kozepre rakja a contentet
const StyledContainerDiv = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

const StyledBugText = styled.div`
  font-size: 17px;
  width: 33%;
  height: 100%;
  p {
    padding: 45px;
    line-height: 25px;
  }
`;

const StyledTextConainer = styled.div`
  text-align: center;
  width: 33%;
  height: 100%;
  line-height: 25px;
  padding-top: 20px;
  img {
    padding-top: 8px;
    height: 50px;
    vertical-align: bottom;
  }
`;

const StyledCloudifiedLogoDiv = styled.div`
  text-align: center;
  font-size: 12px;
  width: 33%;
  height: 100%;
  padding-top: 20px;
  img {
    height: 60px;
    min-height: 70px;
    padding-bottom: 5px;
  }
`;

export default Footer;
