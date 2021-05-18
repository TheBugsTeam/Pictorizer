import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SteamGame = ({ to, itemName, itemImage }) => {
    return (
        <StyledContainerDiv>
            <Link style={{ color: "white", textDecoration: "none" }} to={to}>
                <StyledShortTytleDiv>
                    <img
                        src={itemImage}
                        alt="game_image"
                        style={{ maxHeight: "50px" }}
                    />
                </StyledShortTytleDiv>
                <StyledShortTytleDiv>{itemName}</StyledShortTytleDiv>
            </Link>
        </StyledContainerDiv>
    );
};

const StyledContainerDiv = styled.li`
    padding: 3rem;
    float: left;
`;
const StyledShortTytleDiv = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    img {
        min-height: 7rem;
    }
`;

export default SteamGame;
