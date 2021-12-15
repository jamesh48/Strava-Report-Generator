import React from "react";
import { RadioColumnProps } from "./RadioTypes";
import SingleRadio from "./SingleRadio";

const RadioColumn: React.FC<RadioColumnProps> = (props) => {
  return (
    <div className="choose-radio-container">
      <h4
        className="choose-title"
        id={props.title.split(" ").join("-").toLowerCase()}
      >
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

export default RadioColumn;
