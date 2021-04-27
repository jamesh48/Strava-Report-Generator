import React from 'react';

export default (props) => {
  const { isLoaded, setSport } = props;
  return (
    <>
      <input disabled={!isLoaded ? true : false} type="radio" id="run" name="modality" value="Run" defaultChecked onClick={setSport} />
      <label for="run">Running</label><br />
    </>
  )
}