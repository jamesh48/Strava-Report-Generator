import React from 'react';

export default (props) => {
  const {style, setDistance, checked, distance, isLoaded} = props;
  const {chooseTitle, chooseDistance, customDistance} = style

  return (
    <div className='choose-radio'>
      <h4 className={chooseTitle} id={chooseDistance}>Choose Distance</h4>
      <input type="radio" id="allresults" name="distance" value="0" checked={!distance ? 'checked' : null} onClick={setDistance} />
      <label for="allresults">All Results</label><br />

      <input disabled={!isLoaded ? true : false} type="radio" id="5k" name="distance" value="5000" onClick={setDistance} />
      <label for="5k">5k</label><br />

      <input disabled={!isLoaded ? true : false}  type="radio" id="10k" name="distance" value="10000" onClick={setDistance} />
      <label for="10k">10k</label><br />

      <input disabled={!isLoaded ? true : false}  type="radio" id="halfmarathon" name="distance" value="21097.5" onClick={setDistance} />
      <label for="halfmarathon">Half Marathon</label><br />

      <input disabled={!isLoaded ? true : false}  type="radio" id="marathon" name="distance" value="42195" onClick={setDistance} />
      <label for="marathon">Marathon</label><br />

      <input disabled={!isLoaded ? true : false}  type='radio' name='distance' disabled hidden checked={checked ? 'Checked' : null} />
      <input disabled={!isLoaded ? true : false}  id={customDistance} name='distance' onChange={setDistance} type='text' placeholder='Custom Distance' value={checked ? null : ''}></input>

    </div>
  )
}