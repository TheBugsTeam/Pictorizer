import React from "react";
import { useState } from "react";
import Service from "../components/Service";
import data from "../data/GameServicies";

const GameServicies = () => {
  const [servicies, setServicies] = useState(data());
  return (
    <div>
      <Service props={servicies.geforce} />
      <Service props={servicies.stadia} />
      <Service props={servicies.vortex} />
      <Service props={servicies.luna} />
    </div>
  );
};

export default GameServicies;
