import React from "react";

export default (props) => {
  return props.type === "radio" ? (
    <div className="single-radio-button-container">
      <input
        defaultChecked={props.index === 0}
        disabled={!props.isLoaded ? true : false}
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.value}
        checked={props.name.indexOf('distance') > - 1 && props.index === 0 && !props.distance ? "checked" : null}
        onClick={props.setCallback}
      />
      <label htmlFor="allresults">{props.labelText}</label>
      <br />
    </div>
  ) : props.type === "radioAndText" ? (
    <div className="single-radio-button-container">
      <input
        type="radio"
        name={props.name}
        disabled
        hidden
        checked={props.checked ? "Checked" : null}
      />
      <input
        disabled={!props.isLoaded ? true : false}
        id={props.id}
        name={props.name}
        onChange={props.setCallback}
        type="text"
        placeholder={props.placeholder}
        value={props.checked ? null : ""}
      />
    </div>
  ) : null;
};
