import React from "react";
import "./styles.css";
import Eg from "./eg";
import WeatherSate from "./context/WeatherState";

import weatherContext from "./context/weatherContext";
import Search from "./Search";
export default function App() {
  const srr = [1, 2, 3, 4, 5];
  const name = React.useContext(weatherContext);
  console.log(name, 1);
  return (
    <WeatherSate>
      {}
      <div className="App">
        <div className="search">
          <input type="text" />
        </div>
        {srr.map((k) => (
          <Eg />
        ))}
        <Search />
      </div>
    </WeatherSate>
  );
}
