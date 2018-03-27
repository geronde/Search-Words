import * as actionsCreators from "../actions/actionsCreators";

function dictionaryReducer(state = {}, action) {
  switch (action.type) {
    case actionsCreators.GET_WORD: {
      return { ...state, word: action.response.data };
    }
    case actionsCreators.GET_WORD_SUGGESTIONS: {
      return { ...state, suggestions: action.response.data };
    }
    default: {
      return state;
    }
  }
}

export default dictionaryReducer;
