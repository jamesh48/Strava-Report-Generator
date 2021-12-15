import React from "react";
import { EntryDescriptorProps } from "./EntryTypes";

const EntryDescriptor: React.FC<EntryDescriptorProps> = ({ title, value }) => {
  return (
    <p className="entry-descriptor">
      {title} {value}
    </p>
  );
};

export default EntryDescriptor;
