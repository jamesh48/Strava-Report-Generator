import React from "react";
import SingleRadio from "OptionsProfile/Radios/SingleRadio";

export default (props) => {
  return (
    <div className="choose-radio-container">
      <h4 className="choose-title" id={props.title.split(' ').join('-').toLowerCase()}>
        {props.title}
      </h4>
      <div className="multiple-radio-button-container">
        {props.radioValues.map((radio, index) => {
          return <SingleRadio {...radio} {...props} index={index} />;
        })}
      </div>
    </div>
  );
};
