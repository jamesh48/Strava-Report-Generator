import React from 'react';

export default (props) => {
  const { style, isLoaded, setFormat } = props;
  const { chooseTitle, chooseFormat } = style;

  return (
    <div>
      <h4 className={chooseTitle} id={chooseFormat}>Choose Format</h4>
      <input disabled={!isLoaded ? true : false} type="radio" id="kph" name="format" value="kph" defaultChecked onClick={setFormat} />
      <label for="kph">Kilometers/Hour</label><br />

      <input disabled={!isLoaded ? true : false} type="radio" id="mph" name="format" value="mph" onClick={setFormat} />
      <label for="mph">Miles/Hour</label><br />

      <input disabled={!isLoaded ? true : false} type="radio" id="mps" name="format" value="mps" onClick={setFormat} />
      <label for="mps">Meters/Second</label><br />
    </div>
  )
}