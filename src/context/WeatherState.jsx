import React from "react";
import WeatherContext from "./weatherContext";
import reducer from "./weatherReducer";
import { TOGGLE_CITIES } from "./types";
import axios from "axios";
export default function WeatherSate(props) {
  const obj = {
    name: "London",
    tem: 23,
    humidity: 29
  };
  const intial = {
    search: null,
    onCurrPage: { currPage: 1, date: {} },
    cities: [
      { name: "London", data: null },
      { name: "berlin", data: null },
      { name: "delhi", data: null },
      { name: "mumbai", data: null },
      { name: "seoul", data: null },
      { name: "tokyo", data: null },
      { name: "paris", data: null },
      { name: "toronto", data: null },
      { name: "vancuver", data: null },
      { name: "new york", data: null },
      { name: "cape town", data: null },
      { name: "durben", data: null },
      { name: "abuja", data: null },
      { name: "brasilia", data: null },
      { name: "Rio de Janeiro", data: null }
    ]
  };

  const [state, dispatch] = React.useReducer(reducer, intial);
  const toggle = (page = 1) => {
    const onPage = [];
    // if (!state.search) {
    const startPage = page - 1;
    const lastPage = page * 2 - 1;

    //   for (let i = startPage; i <= lastPage; i++) {
    //onPage.push(state.cities[i]);
    //console.log(state.cities[i].data);
    //if (!state.cities[i].data) {
    //const name = state.cities[i].name;

    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=896a36af566187c2261cfa42f2582ad2"
      )
      .then((res) => console.log(res, 1))
      .catch((error) => console.log(error, 7));

    //onPage.push(state.cities[i]);
    //   }
    //onPage.push(state.cities[i]);
    //  }
    /* } else {
    }*/
    //console.log(onPage);
    dispatch({
      type: TOGGLE_CITIES,
      payload: onPage
    });
  };
  return (
    <WeatherContext.Provider
      value={{
        cities: state.cities,
        toggle: toggle,

        onCurrPage: state.onCurrPage
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}
