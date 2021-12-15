import React from "react";
import { NestedEntryDescriptorProps } from "./EntryTypes";

const NestedEntryDescriptor: React.FC<NestedEntryDescriptorProps> = ({
  title,
  value,
  extra
}) => {
  return (
    <p className="entry-descriptor">
      {title} <p className="speed">{value}</p> {extra}
    </p>
  );
};

export default NestedEntryDescriptor;
