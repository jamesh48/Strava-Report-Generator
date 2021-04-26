import React from 'react';
const ChooseDistance = (props) => {
  const {style, setDistance} = props;
  const {chooseRadio, chooseTitle, chooseDistance, customDistance} = style;

  if (props.sport === 'Swim') {
    return (
      <div className='choose-radio'>
        <h4 className={chooseTitle} id={chooseDistance}>Choose Distance</h4>

        <input type="radio" id="allresults" name="swimdistance" value="0" checked={props.distance === 0 ? 'checked' : null} onClick={setDistance} />
        <label for="allresults">All Results</label><br />

        <input type="radio" id="mile" name="swimdistance" value="1500" onClick={setDistance} />
        <label for="mile">Mile</label><br />

        <input type="radio" id="3k" name="swimdistance" value="3000" onClick={setDistance} />
        <label for="3k">3k</label><br />

        <input type="radio" id="5k" name="swimdistance" value="5000" onClick={setDistance} />
        <label for="5k">5k</label><br />

        <input type="radio" id="10k" name="swimdistance" value="10000" onClick={setDistance} />
        <label for="10k">10k</label><br />

        <input type='radio' name='swimdistance' disabled hidden checked={props.checked ? 'Checked' : null}/>
        <input id={customDistance} name='swimdistance' onChange={(event) => {event.preventDefault(); props.setDistance(event, 'check') }} type='text' placeholder='Custom Distance' value={props.checked ? null : ''}></input>
      </div>
    )
  } else if (props.sport === 'Run') {
    return (
      <div className='choose-radio'>
        <h4 className={chooseTitle} id={chooseDistance}>Choose Distance</h4>
        <input type="radio" id="allresults" name="distance" value="0" checked={props.distance === 0 ? 'checked' : null} onClick={(event) => props.setDistance(event)} />
        <label for="allresults">All Results</label><br />

        <input type="radio" id="5k" name="distance" value="5000" onClick={setDistance} />
        <label for="5k">5k</label><br />

        <input type="radio" id="10k" name="distance" value="10000" onClick={setDistance} />
        <label for="10k">10k</label><br />

        <input type="radio" id="halfmarathon" name="distance" value="21097.5" onClick={setDistance} />
        <label for="halfmarathon">Half Marathon</label><br />

        <input type="radio" id="marathon" name="distance" value="42195" onClick={setDistance} />
        <label for="marathon">Marathon</label><br />

        <input type='radio' name='distance' disabled hidden checked={props.checked ? 'Checked' : null}/>
        <input id={customDistance} name='distance' onChange={(event) => {event.preventDefault(); props.setDistance(event, 'check') }} type='text' placeholder='Custom Distance' value={props.checked ? null : ''}></input>

      </div>
    )
  } else {
    return null;
  }
}

export default ChooseDistance;