import React from 'react';

const ChooseSport = (props) => {
  const {style, setSport} = props;
  const {chooseTitle, chooseSport} = style;
  return (
    <div className='choose-radio'>
      <h4 className ={chooseTitle} id={chooseSport}>Choose Sport</h4>
      <input type="radio" id="run" name="modality" value="Run" defaultChecked onClick={setSport} />
      <label for="run">Running</label><br />
      <input type="radio" id="swim" name="modality" value="Swim" onClick={setSport}/>
      <label for="swim">Swimming</label><br />
      <input type="radio" id="ride" name="modality" value="Ride" onClick={setSport}/>
      <label for="ride">Cycling</label><br />
      <input type="radio" id="walk" name="modality" value="Walk" onClick={setSport}/>
      <label for="walk">Walking</label><br />
    </div>
  )
};

export default ChooseSport;