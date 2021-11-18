import React from "react";
import InputJSON from "OptionsProfile/Radios/input.json";
import RadioColumn from "OptionsProfile/Radios/RadioColumn";
import ProgressBar from "OptionsProfile/ProgressBar/ProgressBar";
import { useGlobalContext } from "GlobalStore";

export default (props) => {
  const [{ isLoaded }] = useGlobalContext();

  const initArr = [
    {
      title: "Choose Sport",
      setCallback: props.setSport,
      radioValues: InputJSON.chooseSportRadios,
    },
    {
      title: "Choose Distance",
      setCallback: props.setDistance,
      radioValues:
        props.sport === "Run"
          ? InputJSON.distanceRunRadios
          : props.sport === "Swim"
          ? InputJSON.distanceSwimRadios
          : [],
      checked: props.checked,
      distance: props.distance,
    },
    {
      title: "Choose Format",
      setCallback: props.setFormat,
      radioValues:
        props.sport === "Run"
          ? InputJSON.formatRunRadios
          : props.sport === "Swim"
          ? InputJSON.formatSwimRadios
          : [],
      format: props.format,
    },
  ];

  return (
    <div id="buttons-and-bar">
      <div id="button-layout">
        {initArr.map((radioColumn, index) => {
          return (
            <RadioColumn key={index} {...radioColumn} isLoaded={isLoaded} />
          );
        })}
      </div>
      <ProgressBar completed={props.progressBarProgress} />
    </div>
  );
};
