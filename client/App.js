import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import style from "./css/styles.css"; // eslint-disable-line no-unused-vars

import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
