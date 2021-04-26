import React from 'react';
import '../App.css';

import ProgressBar from './progressbar/progress-bar.jsx';
import ChooseSport from './chooseSport.jsx';
import ChooseDistance from './chooseDistance.jsx';
import ChooseFormat from './chooseFormat.jsx';

const Buttons = (props) => {
  const {style} = props;
  const {buttonLayout} = style;
  return (
    <div>
      <div>
        <div id={buttonLayout}>
          <ChooseSport setSport={props.setSport}  style={style}/>
          <ChooseDistance distance={props.distance} sport={props.sport} setDistance={props.setDistance}  checked={props.checked} style={style}/>
          <ChooseFormat format={props.format} sport={props.sport} setFormat={props.setFormat} style={style}/>
        </div>
        <ProgressBar completed={props.progressBarProgress} styleX={style}/>
      </div>
    </div>
  );
}


export default Buttons;