import React from "react";
import { AdditionalFilterProps } from "./RadioTypes";

const AdditionalFilters: React.FC<AdditionalFilterProps> = (props) => {

  return (
    <div className="additional-filters">
      <input
        placeholder="Title Includes..."
        onChange={props.setTitleQuery}
        value={props.titleQuery}
        type="text"
      />
    </div>
  );
};

export default AdditionalFilters;
