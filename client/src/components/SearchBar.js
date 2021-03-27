import { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ setChosen }) => {
  const [talalat, setTalalat] = useState(null);
  const [term, setTerm] = useState();
  //const [chosen, setChosen] = useState();

  useEffect(async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/autocomplete",
        {
          searchTerm: term,
        }
      );
      setTalalat(response.data);

      //   talalat.map((item) => {
      //     console.log(item);
      //   });
    } catch (error) {
      console.error(error);
    }
  }, [term]);

  const searchInput = (e) => {
    if (e.target.value) setTerm(e.target.value);
  };

  const printGameData = (item) => {
    console.log(item.commonTitle);

    //itt át kell adni a common title-t és behozni új oldalon azt hogy:
    //`http://localhost:5000/api/games/${item.commonTitle}` adatait
    //get request-tel
    //setChosen(item);
  };

  return (
    <div className="App">
      <input onChange={searchInput} type="text" />
      {talalat && (
        <ul>
          {talalat.map((item) => (
            <>
              <li onClick={() => printGameData(item)}>{item.fullGameTitle}</li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
