import React from 'react';

export default (props) => {
  const { isLoaded, setSport } = props;
  return (
    <>
      <input disabled={!isLoaded ? true : false} type="radio" id="walk" name="modality" value="Walk" onClick={setSport} />
      <label for="walk">Walking</label><br />
    </>
  )
}