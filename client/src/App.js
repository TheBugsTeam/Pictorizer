import Nav from "./components/Nav";
import { Switch, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./components/GlobalStyle";

import GameDetails from "./pages/GameDetails";
import Steam from "./pages/Steam";
import GameServices from "./pages/GameServices";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import Footer from "./components/Footer";

const App = () => {
    const location = useLocation();
    const [chosen, setChosen] = useState(null);
    return (
        <div className="App">
            <GlobalStyle />
            <div className="content-wrapper">
                <Nav chosen={chosen} setChosen={setChosen} />
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/search" exact>
                        <Search />
                    </Route>
                    <Route path="/steam" exact>
                        <Steam />
                    </Route>
                    <Route
                        path="/games/:id"
                        children={<GameDetails chosen={chosen} />}
                    />
                    <Route path="/gameservicies">
                        <GameServices />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    );
};

export default App;
