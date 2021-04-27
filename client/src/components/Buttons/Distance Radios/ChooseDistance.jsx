import React from 'react';

import DistanceSwimRadios from './DistanceSwimRadios.jsx';
import DistanceRunRadios from './DistanceRunRadios.jsx';

export default (props) => {
  const { style, setDistance, distance, checked, sport, isLoaded } = props;
  const { chooseRadio, chooseTitle, chooseDistance, customDistance } = style;
  return sport === 'Swim' ? (
    <DistanceSwimRadios style={style} setDistance={setDistance} distance={distance} checked={checked} isLoaded={isLoaded} />
  ) : sport === 'Run' ? (
    <DistanceRunRadios style={style} setDistance={setDistance} distance={distance} checked={checked} isLoaded={isLoaded} />
  ) : null
}