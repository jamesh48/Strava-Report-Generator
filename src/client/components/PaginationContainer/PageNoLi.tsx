import React from "react";
import { PageNoLiProps } from "./PaginationTypes";

const PageNoLi: React.FC<PageNoLiProps> = ({ handleClick, number, page }) => {
  console.log(page, number);
  return (
    <li
      key={number}
      style={Number(page) === number ? { backgroundColor: "coral" } : {}}
      id={"pageno-" + number}
      onClick={handleClick}
      className="page-nos"
    >
      {number}
    </li>
  );
};

export default PageNoLi;
