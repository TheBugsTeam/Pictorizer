import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import GameCard from "../components/GameCard";

const HomePage = () => {
    const [lastGames, setLastGames] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    "https://cloudified-api.herokuapp.com/api/lasts"
                );
                setLastGames(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return !lastGames ? (
        <div>
            <h1>Something went wrong</h1>
        </div>
    ) : (
        <div>
            <h1>10 Last Added Game</h1>
            <div>
                <StyledUl>
                    {lastGames.map((item) => (
                        <GameCard
                            to={`/games/${item.commonTitle}`}
                            itemName={item.fullGameTitle}
                            itemImage={item.imageURL}
                        />
                    ))}
                </StyledUl>
            </div>
        </div>
    );
};

const StyledUl = styled.ul`
    margin: 0 auto;
    /* height: 625px; */
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

export default HomePage;
