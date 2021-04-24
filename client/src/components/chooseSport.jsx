import React from 'react';
import '../App.css';

const ChooseSport = (props) => {
  return (
    <div className='choose-radio'>
      <h4 className ='choose-title' id='choose-sport'>Choose Sport</h4>
      <input type="radio" id="run" name="modality" value="Run" defaultChecked onClick={(event) => props.setSport(event)} />
      <label for="run">Running</label><br />
      <input type="radio" id="swim" name="modality" value="Swim" onClick={(event) => props.setSport(event)}/>
      <label for="swim">Swimming</label><br />
      <input type="radio" id="ride" name="modality" value="Ride" onClick={(event) => props.setSport(event)}/>
      <label for="ride">Cycling</label><br />
      <input type="radio" id="walk" name="modality" value="Walk" onClick={(event) => props.setSport(event)}/>
      <label for="walk">Walking</label><br />
    </div>
  )
};

export default ChooseSport;