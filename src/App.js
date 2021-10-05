import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getTime } from "./network";

// import getTime
// hooks: useState  -> involve an array (tuple)
//        useEffect -> access or modify something outside of
//                     the scope of this function

function App() {
  const [currentTime, setCurrentTime] = useState("cat cow");

  useEffect(() => {
    async function thing() {
      const time = await getTime();
      setCurrentTime(time);
    }
    thing();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{currentTime}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
