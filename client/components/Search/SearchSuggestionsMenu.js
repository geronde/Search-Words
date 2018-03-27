import React from "react";

class SearchSuggestionsMenu extends React.Component {
  render() {
    return (
      <datalist id={this.props.id}>
        {this.props.wordSuggestions.map((el, key) => (
          <option key={key} value={el} />
        ))}
      </datalist>
    );
  }
}
export default SearchSuggestionsMenu;
