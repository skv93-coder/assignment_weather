import React from "react";
import C from "./context/weatherContext";
export default function Eg() {
  const name = React.useContext(C);

  return (
    <>
      <div className="name">
        <div> City : London</div>
        <div>Clear View</div>
      </div>
      <div className="card">
        <div className="tem">
          <span className="currTem">
            23.2<sup>*</sup>C
          </span>
          <div>
            <span className="currTemMax">
              Curr Max 25.5 <sup>*</sup>C{" "}
            </span>
          </div>
          <div>
            <span className="currTemMin">
              Curr Min 20.5 <sup>*</sup>C
            </span>
          </div>
        </div>
        <div className="practiacl">
          <div className="tem">
            <span className="currTem">
              23.2<sup>*</sup>C
            </span>
          </div>

          <div>
            <span className="pressure">Pressure: 1023Pa</span>
          </div>
          <div>
            <span className="humidity">60% Humidity</span>
          </div>
        </div>
        <div className="air">
          <div className="speed currTem">
            <span>89 m/s</span>
          </div>
          <div className="visibility">
            <span>Visibility: 10Km</span>
          </div>
        </div>
      </div>
    </>
  );
}
