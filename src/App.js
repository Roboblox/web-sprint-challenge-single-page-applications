import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./Form";

const App = () => {
  return (
    <>
      <header>
        <nav>
          <a href="#home"> Home</a>
          <a href="#about"> About</a>
          <a href="#content"> Content</a>
          <a href="#projects"> Projects</a>
        </nav>
      </header>
      <h1>Lambda Eats!</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
