import React from 'react';

export default (props) => {
  const { style } = props;
  const {noEntriesFound, innerEntry, entryTitle, champ} = style;

  return (
    <li className={innerEntry}>
      <h4 className={entryTitle} id={noEntriesFound}>~No Entries Found~</h4>
      <p id={champ}>But keep up the Good Work Champ!</p>
    </li>
  )
}