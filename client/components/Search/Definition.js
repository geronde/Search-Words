import React from "react";

class Definition extends React.Component {
  render() {
    const { word, definition } = this.props;
    return (
      <article className="definition-wrapper">
        <h1>{word}</h1>
        <h3 className="syllables">
          <span>
            {definition.syllables
              ? definition.syllables.list.map((sy, i) => <i key={i}>-{sy}</i>)
              : ""}
          </span>{" "}
          <i>|</i>
          <span>
            {definition.pronunciation
              ? definition.pronunciation.simplified
              : " "}
          </span>
        </h3>
        {definition.definitions.map((el, index) => (
          <div className="definition" key={index}>
            <h2>{el.partOfSpeech}</h2>
            <p>{el.definition}</p>
            {el.examples ? (
              <ul>
                <li>Examples:</li>
                <li>{el.examples.join("\n")}</li>
              </ul>
            ) : (
              ""
            )}
            {el.synonyms ? (
              <h4>
                <span> Synonyms : </span>
                {el.synonyms.join(", ")}
              </h4>
            ) : (
              ""
            )}
            {el.typeOf ? (
              <h4>
                <span> Type Of : </span>
                {el.typeOf.join(", ")}
              </h4>
            ) : (
              ""
            )}
            {el.hasType ? (
              <h4>
                <span> Similar To : </span>
                {el.hasType.join(", ")}
              </h4>
            ) : (
              ""
            )}
            {el.derivation ? (
              <h4>
                <span> Derivation :</span> {el.derivation.join(", ")}
              </h4>
            ) : (
              ""
            )}
          </div>
        ))}
      </article>
    );
  }
}
export default Definition;
