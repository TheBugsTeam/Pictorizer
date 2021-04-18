import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SideContainer from "../components/SideContainer";
import MainContainer from "../components/MainContainer";

const GameDetails = ({ chosen }) => {
    const [game, setGame] = useState();
    let { id } = useParams();
    useEffect(async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/api/games/${id}`
            );
            setGame(response.data);
            console.log(response.data);

            //   talalat.map((item) => {
            //     console.log(item);
            //   });
        } catch (error) {
            console.error(error);
        }
    }, []);
    return game ? (
        <div>
            <h1>{id}</h1>
            <MainContainer game={game} />
            <SideContainer chosen={chosen} />
        </div>
    ) : (
        <div>
            <h1>Nincs talalat</h1>
        </div>
    );
};

export default GameDetails;
