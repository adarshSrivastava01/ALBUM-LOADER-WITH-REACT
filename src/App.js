import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home.js";
import Search from "./components/Search/Search";
import axios from "axios";
import Songs from "./components/Songs/Songs";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [state, setState] = useState({
    query: "",
    results: [],
    loaded: false,
    selected: {},
  });

  const apiURL = "https://ws.audioscrobbler.com/2.0/?method=album.search&album=";

  const handleInput = (event) => {
    let query = event.target.value;
    setState((prevState) => {
      return { ...prevState, query: query };
    });
  };

  const getData = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          apiURL +
            state.query +
            "&api_key=7df8a1579606e08eeb9f217a4e576fb7&format=json"
        )
        .then((response) => {
          let results = response.data.results.albummatches.album;
          console.log(results);
          setState((prevState) => {
            return { ...prevState, results: results, loaded: true };
          });
        });
    }
  };

  return (
    <div className="App">
      <Home />
      <Search handleInput={handleInput} getData={getData} />
      {state.loaded ? <Songs songs={state.results} /> : <h1 className="Loading">Fill it Up...</h1>}
      <Footer />
    </div>
  );
};

export default App;
