import React from 'react';
import '../App.css';
const ChooseFormat = (props) => {
  return (
    <div className='choose-radio'>
      {
        props.sport === 'Swim' ?
          <div>
            <h4 className ='choose-title' id='choose-format'>Choose Format</h4>
            <div>
              <input type='radio' id='avgmpace' name='format' value="avgmpace" defaultChecked onClick ={(event) => props.setFormat(event)} />
              <label for="avgmpace">Pace per 100 Meters</label>
            </div>
            <div>
              <input type='radio' id='avgypace' name='format' value="avgypace" onClick ={(event) => props.setFormat(event)} />
              <label for="avgypace">Pace per 100 Yards</label>
            </div>
          </div>
          :
          props.sport === 'Run' ?
            <div>
              <h4 className ='choose-title' id='choose-format'>Choose Format</h4>
              <input type="radio" id="kph" name="format" value="kph" defaultChecked onClick ={(event) => props.setFormat(event)}/>
              <label for="kph">Kilometers/Hour</label><br />

              <input type="radio" id="mph" name="format" value="mph" onClick ={(event) => props.setFormat(event)}/>
              <label for="mph">Miles/Hour</label><br />

              <input type="radio" id="mps" name="format" value="mps" onClick ={(event) => props.setFormat(event)}/>
              <label for="mps">Meters/Second</label><br />
            </div>
            : null
      }
    </div>

  )
}

export default ChooseFormat;