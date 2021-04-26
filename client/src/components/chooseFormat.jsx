import React from 'react';
export default (props) => {
  const {style, setFormat} = props;
  const {chooseFormat, chooseTitle} = style;
  return (
    <div className='choose-radio'>
      {
        props.sport === 'Swim' ?
          <div>
            <h4 className={chooseTitle} id={chooseFormat}>Choose Format</h4>
            <div>
              <input type='radio' id='avgmpace' name='format' value="avgmpace" defaultChecked onClick={setFormat} />
              <label for="avgmpace">Pace per 100 Meters</label>
            </div>
            <div>
              <input type='radio' id='avgypace' name='format' value="avgypace" onClick={setFormat} />
              <label for="avgypace">Pace per 100 Yards</label>
            </div>
          </div>
          :
          props.sport === 'Run' ?
            <div>
              <h4 className={chooseTitle} id={chooseFormat}>Choose Format</h4>
              <input type="radio" id="kph" name="format" value="kph" defaultChecked onClick={setFormat} />
              <label for="kph">Kilometers/Hour</label><br />

              <input type="radio" id="mph" name="format" value="mph" onClick={setFormat} />
              <label for="mph">Miles/Hour</label><br />

              <input type="radio" id="mps" name="format" value="mps" onClick={setFormat} />
              <label for="mps">Meters/Second</label><br />
            </div>
            : null
      }
    </div>

  )
}