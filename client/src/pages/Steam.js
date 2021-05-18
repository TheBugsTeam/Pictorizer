import React from "react";
import { useState } from "react";
import axios from "axios";
import SteamIdInput from "../components/SteamIdInput";
import GameCard from "../components/GameCard";
import styled from "styled-components";

const Steam = () => {
  const [steamID, setSteamID] = useState(null);
  const [games, setgames] = useState(null);

  const searchSteamID = async () => {
    const URL = "https://cloudified-api.herokuapp.com/api/steam/" + steamID;
    try {
      const response = await axios.get(URL);
      setgames(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return !games ? (
    <div>
      <SteamIdInput
        searchSteamID={searchSteamID}
        setSteamID={setSteamID}
        steamID={steamID}
      />
    </div>
  ) : (
    <div>
      <div>
        <StyledUl className="scroller">
          {games.map((item) => (
            <li>
              <GameCard
                to={`/games/${item.shortName}`}
                itemName={item.name}
                itemImage={item.image}
              />
            </li>
          ))}
        </StyledUl>
      </div>
    </div>
  );
};

const StyledUl = styled.ul`
  margin: 0 auto;
  height: 625px;
  width: 100%;
  overflow: auto;
  li {
    padding: 10px;
    text-align: center;
    display: inline-block;
    width: 33.33%;
    height: 30%;
  }
  ul {
    display: inline;
  }
`;

export default Steam;
