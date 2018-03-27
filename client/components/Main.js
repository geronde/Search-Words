import React from "react";

import SearchBar from "./Search/SearchBar";
import SearchResults from "./Search/SearchResults";

//connect component to redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsCreators from "../actions/actionsCreators";

function mapStateToProps(state) {
  return {
    word: state.dictionary.word,
    suggestions: state.dictionary.suggestions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionsCreators, dispatch)
  };
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <SearchBar {...this.props} />
        <SearchResults {...this.props} />
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
