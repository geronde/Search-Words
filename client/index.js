import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

//import * as actions from "./actions/actionsCreators";

//store
import { Provider } from "react-redux";
import store from "./store";

//store.dispatch(actions.getDictionary())

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById("root")
);

// Webpack Hot Module Replacement API
if (module.hot) {
  const NextApp = require("./App").default;
  module.hot.accept("./App", () => {
    render(NextApp); // eslint-disable-line no-undef
  });
}
