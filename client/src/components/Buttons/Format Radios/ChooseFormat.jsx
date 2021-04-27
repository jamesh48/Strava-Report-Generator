import React from 'react';
import FormatSwimRadios from './FormatSwimRadios.jsx';
import FormatRunRadios from './FormatRunRadios.jsx';

export default (props) => {
  const { style, setFormat, isLoaded, sport } = props;
  const { chooseFormat, chooseTitle } = style;
  return (
    <div className='choose-radio'>
      {
        sport === 'Swim' ?
          <FormatSwimRadios style={style} setFormat={setFormat} isLoaded={isLoaded} />
          :
          sport === 'Run' ?
            <FormatRunRadios style={style} setFormat={setFormat} isLoaded={isLoaded} />
            : null
      }
    </div>
  )
}