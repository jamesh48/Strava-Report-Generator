import React from 'react';

export default (props) => {
  const { style, isLoaded, setFormat } = props;
  const { chooseTitle, chooseFormat } = style;
  return (
    <div>
      <h4 className={chooseTitle} id={chooseFormat}>Choose Format</h4>
      <div>
        <input disabled={!isLoaded ? true : false} type='radio' id='avgmpace' name='format' value="avgmpace" defaultChecked onClick={setFormat} />
        <label for="avgmpace">Pace per 100 Meters</label>
      </div>
      <div>
        <input disabled={!isLoaded ? true : false} type='radio' id='avgypace' name='format' value="avgypace" onClick={setFormat} />
        <label for="avgypace">Pace per 100 Yards</label>
      </div>
    </div>
  )
}