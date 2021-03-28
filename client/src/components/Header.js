import React from "react";

import { useState } from "react";
import SearchBar from "./SearchBar";
import Nav from "./Nav";

const Header = () => {
  const [chosen, setChosen] = useState(null);
  return (
    <div>
      <SearchBar setChosen={setChosen} />
      <Nav />
    </div>
  );
};

export default Header;
