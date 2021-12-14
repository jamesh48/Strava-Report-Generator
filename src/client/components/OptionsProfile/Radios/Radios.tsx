import React from "react";
import InputJSON from "./input.json";
import RadioColumn from "../Radios/RadioColumn";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useGlobalContext } from "../../GlobalStore/globalStore.js";
import { RadiosProps } from "./RadioTypes";
import AdditionalFilters from "./AdditionalFilters/AdditionalFilters";

const Radios: React.FC<RadiosProps> = (props) => {
  const [{ totalEntries }] = useGlobalContext();

  const initArr = [
    {
      title: "Choose Sport",
      setCallback: props.setSport,
      radioValues: InputJSON.chooseSportRadios
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
      customDistance: props.customDistance,
      distance: props.distance
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
      format: props.format
    }
  ];

  return (
    <div id="buttons-and-bar">
      <div id="button-layout">
        {initArr.map((radioColumn, index) => {
          return (
            <RadioColumn
              key={index}
              {...radioColumn}
              isLoaded={!!totalEntries.length}
            />
          );
        })}
      </div>
      <AdditionalFilters
        setTitleQuery={props.setTitleQuery}
        titleQuery={props.titleQuery}
        setFromDateQuery={props.setFromDateQuery}
        setToDateQuery={props.setToDateQuery}
      />
      <ProgressBar />
    </div>
  );
};

export default Radios;
