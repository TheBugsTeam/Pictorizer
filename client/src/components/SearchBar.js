import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchBar = ({ setChosen }) => {
  const [talalat, setTalalat] = useState(null);
  const [term, setTerm] = useState();
  //const [chosen, setChosen] = useState();

  useEffect(async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/autocomplete",
        {
          searchTerm: term,
        }
      );
      console.log(response.data);
      setTalalat(response.data);

      //   talalat.map((item) => {
      //     console.log(item);
      //   });
    } catch (error) {
      console.error(error);
    }
  }, [term]);

  const searchInput = (e) => {
    if (e.target.value) setTerm(e.target.value);
  };

  const printGameData = (item) => {
    //console.log(item.commonTitle);
    console.log(term);
    setTerm("");
    setChosen(item.commonTitle);
    setTalalat(null);
    //itt át kell adni a common title-t és behozni új oldalon azt hogy:
    ////`http://localhost:5000/api/games/${item.commonTitle}` adatait
    //get request-tel
    //setChosen(item);
  };

  const elkattint = () => {
    setTalalat(null);
    console.log("ok");
  };

  return (
    <StyledContainerDiv>
      <p
        style={{
          fontFamily: "'Press Start 2P', cursive",
          float: "left",
          paddingTop: "15px",
          paddingRight: "15px",
        }}
      >
        is
      </p>
      <StyledSearchDiv>
        <input
          //onBlur={elkattint}
          onChange={searchInput}
          type="text"
          style={{
            width: "350px",
            height: "100%",
            paddingLeft: "8px",
            paddingTop: "6px",
            paddingBottom: "6px",
            borderColor: "#7d66bd",
            backgroundColor: "#27282f",
            borderRadius: "30px",
            borderWidth: "5px",
            fontSize: "20px",
            color: "white",
            outline: "none",
          }}
          placeholder="Search..."
        />
        <p
          style={{
            fontFamily: "'Press Start 2P', cursive",
            float: "right",
            paddingTop: "15px",
            paddingLeft: "15px",
          }}
        >
          cloudified?
        </p>
        <StyledSuggestionsDiv>
          {talalat && (
            <ul>
              {talalat.map((item) => (
                <>
                  <Link to={`/games/${item.commonTitle}`}>
                    <li onClick={() => printGameData(item)}>
                      <div>{<StyledImg src={item.imageURL} alt="" />}</div>
                      <StyledText>{item.fullGameTitle}</StyledText>
                    </li>
                  </Link>
                </>
              ))}
            </ul>
          )}
        </StyledSuggestionsDiv>
      </StyledSearchDiv>
    </StyledContainerDiv>
  );
};

const StyledContainerDiv = styled.div`
  width: 37%; // így nem kilóméterekre van a cloudified felirat a searchbar-tól
`;

const StyledSearchDiv = styled.div``;

const StyledSuggestionsDiv = styled.div`
  cursor: pointer;
  position: absolute;
  ul {
    width: 350px;
    list-style-type: none;
    display: block;
    border-radius: 15px;
    background-color: #363841;
    box-shadow: 0 0 11px #111;
    padding: 10px;
    padding-bottom: 0px;
  }

  ul li {
    height: 70px;
    color: white;
    padding: 5px;
  }
`;

const StyledText = styled.div`
  margin-top: 15px;
  vertical-align: middle;
  float: middle;
`;

const StyledImg = styled.img`
  width: 100px;
  margin-left: 5px;
  padding-right: 10px;
  vertical-align: middle;
  float: left;
  max-height: 55px;
`;

export default SearchBar;
