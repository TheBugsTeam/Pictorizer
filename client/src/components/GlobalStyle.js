import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #27282E;
    font-family: "Montserrat", sans-serif;
    color: white;
    font-size: 1rem;
}
/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  //box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #363841; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
/*
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem ;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all .5s ease;
    font-family: 'Inter', sans-serif;

    &:hover{
        background-color: #23d997;
        color: white;
    }
    
}
h2{
    font-weight: lighter;
    font-size: 4rem;
}
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
*/
`;

export default GlobalStyle;
