import React from "react";
import useRandom from "./CustomHook";
import "./App.scss";

function App() {
  const randomNumbers = useRandom(5, 2);
  const randomUppercase = useRandom(3, 3, "uppercase");
  const randomLowercase = useRandom(3, 3, "lowercase");

  return (
    <div className="Container">
      <h2 className="Container__par">Random Numbers:</h2>
      <ul className="Container__info">
        {randomNumbers.map((number, index) => (
          <li className="Container__str" key={index}>
            {number}
          </li>
        ))}
      </ul>
      <h2 className="Container__par">Random Uppercase Strings:</h2>
      <ul className="Container__info">
        {randomUppercase.map((str, index) => (
          <li className="Container__str" key={index}>
            {str}
          </li>
        ))}
      </ul>
      <h2 className="Container__par">Random Lowercase Strings:</h2>
      <ul className="Container__info">
        {randomLowercase.map((str, index) => (
          <li className="Container__str" key={index}>
            {str}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
