import React from "react";

class AutoCorrect extends React.Component {
  render() {
    return (
      <article className="auto-correct">
        <h3>
          Did you Mean
          {
            //eslint-disable-next-line
          }<span onClick={this.props.onClick} tabIndex={0} role="link">
            {this.props.autoCorrectedWord}
          </span>{" "}
          ?{" "}
        </h3>
      </article>
    );
  }
}
export default AutoCorrect;
