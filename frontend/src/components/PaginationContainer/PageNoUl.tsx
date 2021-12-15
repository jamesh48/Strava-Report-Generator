import React from "react";
import { Entry } from "../StravaEntries/EntryTypes";
import PageNo from "./PageNoLi";

interface PageNoUlProps {
  handleClick: React.MouseEventHandler<HTMLLIElement>;
  currentPage: number;
  entriesPerPage: number;
  entries: Entry[];
}
const PageNoUl: React.FC<PageNoUlProps> = ({
  entries,
  entriesPerPage,
  currentPage,
  handleClick
}) => {
  const renderPageNumbers = () => {
    return [...new Array(Math.ceil(entries.length / entriesPerPage))]
      .map((x, index) => {
        return index + 1;
      })
      .map((number) => {
        return (
          <PageNo
            key={number}
            number={number}
            page={currentPage}
            handleClick={handleClick}
          />
        );
      });
  };

  return (
    <ul className="page-no-uls" id="page-numbers">
      {renderPageNumbers()}
    </ul>
  );
};

export default PageNoUl;
