import styled from "styled-components";

const Tag = (props) => {
  if (props.tag == "true") {
    return <StyledLi>#{props.text}</StyledLi>;
  }
  return <StyledLi>{props.text}</StyledLi>;
};

const StyledLi = styled.li`
  font-size: 9px;
  padding: 3px 10px 3px 10px;
  background-color: #31333a;
  border-radius: 10px;
  color: white;
  display: inline-block;
  margin: 5px;
`;

export default Tag;
