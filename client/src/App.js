import { useEffect, useState } from "react";
import "./App.css";

import axios from "axios";

const App = () => {
  const url = "http://localhost:5000/api/games/";
  const [talalat, setTalalat] = useState(null);
  const [term, setTerm] = useState();

  useEffect(() => {
    const response = axios
      .get(`http://localhost:5000/api/games/${term}`)
      .then((res) => {
        console.log(res.data);
        setTalalat(res.data);
        talalat.map((item) => {
          console.log(item.name);
        });
      })
      .catch((err) => console.error(err));
  }, [term]);

  const searchInput = (e) => {
    //console.log(e.target.value);
    setTerm(e.target.value);
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <input onChange={searchInput} type="text" />
      {talalat && (
        <ul>
          {talalat.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
