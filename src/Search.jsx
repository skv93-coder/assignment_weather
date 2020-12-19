import React from "react";
import axios from "axios";
import weatherContext from "./context/weatherContext";
export default function Search(props) {
  const { toggle } = React.useContext(weatherContext);
  const g = () => {
    axios
      .get({
        method: "get",

        responseType: "stream",

        url:
          "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=896a36af566187c2261cfa42f2582ad2"
      })
      .then((res) => console.log(res, 1))
      .catch((error) => console.log(error, 7));
  };
  return (
    <>
      <div class="pagination">
        <span>&laquo;</span>
        <span onClick={() => g()}>1</span>
        <span class="active">2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>&raquo;</span>
      </div>
    </>
  );
}
