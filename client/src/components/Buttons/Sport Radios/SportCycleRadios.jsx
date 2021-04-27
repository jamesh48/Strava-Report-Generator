import React from 'react';

export default (props) => {
  const { isLoaded, setSport } = props;
  return (
    <>
      <input disabled={!isLoaded ? true : false} type="radio" id="ride" name="modality" value="Ride" onClick={setSport} />
      <label for="ride">Cycling</label><br />
    </>
  )
}