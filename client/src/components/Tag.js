import styled from "styled-components";

const Tag = (props) => {
    return <StyledSpan>{props.text}</StyledSpan>;
};

const StyledSpan = styled.span`
    height: 5px;
    font-size: 8px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: black;
    border-radius: 10px;
`;

export default Tag;
