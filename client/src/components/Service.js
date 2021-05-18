import React from "react";
import styled from "styled-components";

const Service = ({ props }) => {
    return (
        <StyledDiv>
            <a target="_blank" href={props.website}>
                <img src={props.logo.default} alt={props.name} />
            </a>
            <p>{props.text}</p>
        </StyledDiv>
    );
};

export default Service;

const StyledDiv = styled.div`
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    //border: 3px solid green;
    width: 50vw;
    background-color: #363841;
    border-radius: 10px;
    padding: 20px;
    justify-content: center;

    img {
        display: inline-block;
        height: 30px;
        margin-right: 30px;
    }

    a {
        text-decoration: none;
    }

    p {
        text-align: justify;
        text-justify: inter-word;
    }
`;
