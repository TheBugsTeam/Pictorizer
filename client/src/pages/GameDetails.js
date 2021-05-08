import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SideContainer from "../components/SideContainer";
import MainContainer from "../components/MainContainer";
import styled from "styled-components";

const GameDetails = () => {
  const [game, setGame] = useState();
  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/games/${id}`
        );
        //FIXME
        // in production
        //   const response = await axios.get(
        //     `https://cloudified.herokuapp.com/api/games/${id}`
        //   );
        setGame(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return game ? (
    <div>
      <h1
        style={{
          textAlign: "left",
          fontFamily: "Press Start 2P",
          marginLeft: "12%",
          marginTop: "20px",
        }}
      >
        YES! <StyledU>{game.name}</StyledU> is available for cloudgaming
      </h1>
      <MainContainer game={game} />
      <SideContainer game={game} />
    </div>
  ) : (
    <div>
      <h1>Nincs találat</h1>
    </div>
  );
};

const StyledU = styled.u`
  font-family: "Press Start 2P", cursive;
  font-size: 24px;
`;

export default GameDetails;
