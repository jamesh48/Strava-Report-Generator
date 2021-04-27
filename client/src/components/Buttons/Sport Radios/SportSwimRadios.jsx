import React from 'react';

export default (props) => {
  const { isLoaded, setSport } = props;
  return (
    <>
      <input disabled={!isLoaded ? true : false} type="radio" id="swim" name="modality" value="Swim" onClick={setSport} />
      <label for="swim">Swimming</label><br />
    </>
  )
}