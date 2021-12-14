import React from "react";
import { AdditionalFilterProps } from "../RadioTypes";
import "./additionalFilters.scss";

const AdditionalFilters: React.FC<AdditionalFilterProps> = (props) => {
  return (
    <div className="additional-filters">
      <span className="additional-filter-container">
        <span className="date-filter">
          <label>From...</label>
          <input
            className="additional-filter"
            type="date"
            onChange={props.setFromDateQuery}
          />
        </span>
        <span className="date-filter">
          <label>To...</label>
          <input
            className="additional-filter"
            type="date"
            onChange={props.setToDateQuery}
          />
        </span>
      </span>
      <span className="additional-filter-container">
        <input
          className="additional-filter"
          placeholder="Title Includes..."
          onChange={props.setTitleQuery}
          value={props.titleQuery}
          type="text"
        />
      </span>
    </div>
  );
};

export default AdditionalFilters;
