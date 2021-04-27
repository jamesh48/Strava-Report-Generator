import React from 'react';

export default (props) => {
  const { style, setDistance, distance, checked, isLoaded } = props;
  const { chooseTitle, chooseDistance, customDistance } = style;
  return (
    <div className='choose-radio'>
      <h4 className={chooseTitle} id={chooseDistance}>Choose Distance</h4>

      <input disabled={!isLoaded ? true : false}  type="radio" id="allresults" name="swimdistance" value="0" checked={!distance ? 'checked' : null} onClick={setDistance} />
      <label for="allresults">All Results</label><br />

      <input disabled={!isLoaded ? true : false}  type="radio" id="mile" name="swimdistance" value="1500" onClick={setDistance} />
      <label for="mile">Mile</label><br />

      <input disabled={!isLoaded ? true : false}  type="radio" id="3k" name="swimdistance" value="3000" onClick={setDistance} />
      <label for="3k">3k</label><br />

      <input disabled={!isLoaded ? true : false}  type="radio" id="5k" name="swimdistance" value="5000" onClick={setDistance} />
      <label for="5k">5k</label><br />

      <input disabled={!isLoaded ? true : false}  type="radio" id="10k" name="swimdistance" value="10000" onClick={setDistance} />
      <label for="10k">10k</label><br />

      <input disabled={!isLoaded ? true : false}  type='radio' name='swimdistance' disabled hidden checked={checked ? 'Checked' : null} />
      <input disabled={!isLoaded ? true : false}  id={customDistance} name='swimdistance' onChange={setDistance} type='text' placeholder='Custom Distance' value={checked ? null : ''}></input>
    </div>
  )
}