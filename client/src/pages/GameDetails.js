import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const GameDetails = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default GameDetails;
