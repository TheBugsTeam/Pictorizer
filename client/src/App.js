import Nav from "./components/Nav";
import { Switch, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

import GameDetails from "./pages/GameDetails";
import Forum from "./pages/Forum";
import GameServices from "./pages/GameServices";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
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
        <Route path="/games/:id">
          <GameDetails />
        </Route>
        <Route path="/gameservicies">
          <GameServices />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
