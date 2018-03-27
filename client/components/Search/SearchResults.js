import React from "react";

import AutoCorrect from "./AutoCorrect";
import NotFound from "./NotFound";
import Definition from "./Definition";

class SearchResults extends React.Component {
  clickHandler(e) {
    e.preventDefault();
    this.props.actions.getWord(this.props.correction);
  }
  render() {
    if (this.props.word === undefined) {
      return <section />;
    }
    const { word, definition, correction } = this.props.word;
    return (
      <section className="search-results-wrapper">
        {correction === word ? null : (
          <AutoCorrect
            autoCorrectedWord={correction}
            onClick={this.clickHandler.bind(this)}
          />
        )}
        <article className="search-results">
          {!definition || definition.definitions.length === 0 ? (
            <NotFound />
          ) : (
            <Definition word={word} definition={definition} />
          )}
        </article>
      </section>
    );
  }
}
export default SearchResults;
