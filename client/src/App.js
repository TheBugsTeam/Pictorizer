import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import AvailabilityContainer from "./components/AvailabilityContainer";

const App = () => {
  const [chosen, setChosen] = useState(null);

  return (
    <div className="App">
      <SearchBar setChosen={setChosen} />
      {chosen && <AvailabilityContainer chosen={chosen} />}
    </div>
  );
};

export default App;
