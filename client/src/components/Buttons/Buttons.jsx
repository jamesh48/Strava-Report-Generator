import React from 'react';
import ProgressBar from './progressbar/progress-bar.jsx';
import ChooseSport from './Sport Radios/ChooseSport.jsx';
import ChooseDistance from './Distance Radios/ChooseDistance.jsx';
import ChooseFormat from './Format Radios/ChooseFormat.jsx';

export default (props) => {
  const { style, isLoaded, setSport, sport, distance, setDistance, format, setFormat, checked, progressBarProgress } = props;
  const { buttonLayout } = style;
  return (
    <div>
      <div>
        <div id={buttonLayout}>
          <ChooseSport isLoaded={isLoaded} style={style} setSport={setSport} />
          <ChooseDistance isLoaded={isLoaded} style={style} sport={sport} distance={distance} setDistance={setDistance} checked={checked} />
          <ChooseFormat isLoaded={isLoaded} style={style} sport={sport} format={format} setFormat={setFormat} />
        </div>
        <ProgressBar styleX={style} completed={progressBarProgress} />
      </div>
    </div>
  );
}