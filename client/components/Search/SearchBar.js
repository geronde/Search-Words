import React from "react";

import Input from "../Elements/Input";
import Button from "../Elements/Button";
import SearchSuggestionsMenu from "./SearchSuggestionsMenu";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { word: "", dropdown: false };
    this.changeHandler = this.changeHandler.bind(this);
    this.searchWords = this.searchWords.bind(this);
  }
  changeHandler(event) {
    this.setState({ word: event.target.value, dropdown: true }, () =>
      this.props.actions.getWordSuggestions(this.state.word)
    );
  }
  searchWords(e) {
    e.preventDefault();
    this.props.actions.getWord(this.state.word);
    this.setState({ dropdown: false });
  }

  render() {
    return (
      <section className="search-bar">
        <form>
          <Input
            type="text"
            list="suggestions"
            placeholder="Enter A Word To Define"
            onChangeAction={this.changeHandler}
          />

          {this.state.dropdown && this.props.suggestions ? (
            <SearchSuggestionsMenu
              id="suggestions"
              wordSuggestions={this.props.suggestions}
            />
          ) : null}
          <div className="search-button-container">
            <Button
              type="submit"
              name="search"
              onClickAction={this.searchWords}
            />
          </div>
        </form>
      </section>
    );
  }
}
export default SearchBar;
