import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SteamIdInput from "../components/SteamIdInput";
import SteamGame from "../components/SteamGame";
import styled from "styled-components";

const Steam = () => {
  const [steamID, setSteamID] = useState(null);
  const [games, setgames] = useState(null);
  const [term, setTerm] = useState();
  const [talalat, setTalalat] = useState(null);

  const searchSteamID = async () => {
    const URL = "http://localhost:5000/api/steam/" + steamID;
    console.log("Sent");
    try {
      const response = await axios.get(
        URL // 76561198094355991 is a valid SteamID
      );
      setgames(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
    } catch (error) {
      console.error(error);
    }
  }, [term]);

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
            <>
              <li>
                <SteamGame to={`/games/${item.shortName}`} item={item} />
              </li>
            </>
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
