import React from "react";

const Input = props => (
  <input
    type={props.type}
    name={props.name}
    ref={props.inputRef}
    list={props.list}
    value={props.value}
    onChange={props.onChangeAction}
    onBlur={props.onBlur}
    onFocus={props.onFocusAction}
    onInput={props.onInputAction}
    placeholder={props.placeholder}
  />
);

export default Input;
