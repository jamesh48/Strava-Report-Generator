import React from "react";

const EmptyEntry: React.FC<{}> = () => {
  return (
    <li>
      <div className="inner-entry">
        <div className="general-entry">
          <h4 className="entry-title" id="no-entries-found">
            ~No Entries Found~
          </h4>
          <p id="champ">But keep up the Good Work Champ!</p>
        </div>
      </div>
    </li>
  );
};

export default EmptyEntry;
