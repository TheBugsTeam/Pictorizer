import Nav from "./components/Nav";
import { Switch, Route, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalStyle from "./components/GlobalStyle";

import GameDetails from "./pages/GameDetails";
import Forum from "./pages/Forum";
import GameServices from "./pages/GameServices";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";

const App = () => {
  const location = useLocation();
  const [chosen, setChosen] = useState(null);
  useEffect(() => {
    console.log(chosen);
  }, [chosen]);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav chosen={chosen} setChosen={setChosen} />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/Forum" exact>
          <Forum />
        </Route>
        <Route path="/games/:id" children={<GameDetails />} />
        <Route path="/gameservicies">
          <GameServices />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
