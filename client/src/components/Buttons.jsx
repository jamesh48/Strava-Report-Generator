import React from 'react';
import ProgressBar from './progressbar/progress-bar.jsx';
import ChooseSport from './chooseSport.jsx';
import ChooseDistance from './chooseDistance.jsx';
import ChooseFormat from './chooseFormat.jsx';

const Buttons = (props) => {
  const { style, setSport, sport, distance, setDistance, format, setFormat, checked, progressBarProgress } = props;
  const { buttonLayout } = style;
  return (
    <div>
      <div>
        <div id={buttonLayout}>
          <ChooseSport style={style} setSport={setSport} />
          <ChooseDistance style={style} sport={sport} distance={distance} setDistance={setDistance} checked={checked} />
          <ChooseFormat style={style} sport={sport} format={format} setFormat={setFormat} />
        </div>
        <ProgressBar styleX={style} completed={progressBarProgress} />
      </div>
    </div>
  );
}


export default Buttons;