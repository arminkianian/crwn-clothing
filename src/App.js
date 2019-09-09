import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = props => {
  console.log(props);
  return <h1>Hats Page</h1>;
};

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop/hats" component={HatsPage}></Route>
    </Switch>
  );
}

export default App;
