//import modules
import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

//import reducers
import rootReducer from "./reducers/index";

//define middleware
var middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== "production") {
  const loggerMiddleware = createLogger();
  middleware = [...middleware, loggerMiddleware];
}

//create store
function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middleware),
      typeof window === "object" &&
      typeof window.devToolsExtension !== "undefined"
        ? window.devToolsExtension()
        : f => f
    )
  );
}

const store = configureStore();

export default store;
