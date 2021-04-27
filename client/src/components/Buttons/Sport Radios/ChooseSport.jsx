import React from 'react';
import SportRunRadios from './SportRunRadios.jsx';
import SportSwimRadios from './SportSwimRadios.jsx';
import SportCycleRadios from './SportCycleRadios.jsx';
import SportWalkRadios from './SportWalkRadios.jsx';

export default (props) => {
  const { style, setSport, isLoaded } = props;
  const { chooseTitle, chooseSport } = style;
  return (
    <div className='choose-radio'>
      <h4 className={chooseTitle} id={chooseSport}>Choose Sport</h4>
      <SportRunRadios isLoaded={isLoaded} setSport={setSport} />
      <SportSwimRadios isLoaded={isLoaded} setSport={setSport} />
      <SportCycleRadios isLoaded={isLoaded} setSport={setSport} />
      <SportWalkRadios isLoaded={isLoaded} setSport={setSport} />
    </div>
  )
};