import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

//import reducers
import dictionary from "./dictionary";

const rootReducer = combineReducers({
  dictionary: dictionary,
  routing: routerReducer
});

export default rootReducer;
