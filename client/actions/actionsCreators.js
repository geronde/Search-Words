import axios from "axios";

export const GET_WORD = "GET_WORD";
export const GET_WORD_SUGGESTIONS = "GET_WORD_SUGGESTIONS";
export const ERROR = "ERROR";

function getWordAction(response) {
  return {
    type: GET_WORD,
    response
  };
}
function getWordSuggestionsAction(response) {
  return {
    type: GET_WORD_SUGGESTIONS,
    response
  };
}
function error(err) {
  return {
    type: ERROR,
    err
  };
}

export function getWord(word) {
  return dispatch => {
    axios
      .get(`https://search-words-api.herokuapp.com/api/${word}`)
      .then(response => dispatch(getWordAction(response)))
      .catch(err => error(err));
  };
}
export function getWordSuggestions(keyword) {
  return dispatch => {
    axios
      .get(`https://search-words-api.herokuapp.com/search/${keyword}`)
      .then(response => dispatch(getWordSuggestionsAction(response)))
      .catch(err => error(err));
  };
}
