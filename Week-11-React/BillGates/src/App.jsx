import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import Content from "./component/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
