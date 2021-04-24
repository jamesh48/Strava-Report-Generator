import React from 'react';
import '../App.css';
// import '86592.png' from './86592.png';


const Entry = (props) => {
  const {style} = props;
  const {innerEntry, entryTitle} = style;
  var pastTense = '';
  if (props.sport === 'Walk') {
    pastTense = 'Walked-'
  } else if (props.sport === 'Swim') {
    pastTense = 'Swam-'
  } else if (props.sport === 'Ride') {
    pastTense = 'Rode-'
  } else if (props.sport === 'Run') {
    pastTense = 'Ran-'
  } else {
    pastTense = 'traveled-'
  }

  const m2y = 1.094;
  const mps2kph = 3.6;


  const handleTime = (movingTime, pace) => {
    if (movingTime !== Infinity) {
      if (pace) {
        return new Date(movingTime * 1000).toISOString().substr(15, 4)
      }
      return new Date(movingTime * 1000).toISOString().substr(11, 8)
    } else {
      return '00:00'
    }
  }

  // Detailed Entry
  if (props.currentActivity.id === props.entry.id) {
    return (
      <div id={(Number(props.no) >= 0 && Number(props.no) <= 2) ? ('entry' + (Number(props.no) + 1)) : null} className={innerEntry}>
      <div className={(Number(props.no) >= 0 && Number(props.no) <= 2) ? ('general-entry special-entry') : 'general-entry'}>
          <a className={entryTitle} data-testId={props.entry.id} href='' onClick={(event => { event.preventDefault(); props.showIndividualEntry(event) })}>{props.entry.name}</a>
          {props.format !== 'avgypace' ?
            <p>Distance {pastTense} {props.entry.distance} Meters</p> :
            <p>Distance {pastTense} {(props.entry.distance * m2y).toFixed()} Yards</p>
          }
          <p>Time Elapsed- {handleTime(props.entry.moving_time)}</p>

          {/* Avg Speed Format */}
          {props.format === 'kph' ? <p>Avg Pace- <p className='speed'>{((props.entry.distance / props.entry.moving_time) * mps2kph).toFixed(2)} </p> Kilometers Per Hour</p> :
            props.format === 'mph' ? <p>Avg Pace- <p className='speed'>{((props.entry.distance / props.entry.moving_time) * 2.237).toFixed(2)} </p> Miles Per Hour</p> :
              props.format === 'mps' ? <p>Avg Pace- <p className='speed'>{((props.entry.distance / props.entry.moving_time)).toFixed(2)}</p> Meters Per Second</p> :
                props.format === 'avgypace' ? <p>Avg Pace- <p className='speed'>{handleTime((props.entry.moving_time / ((props.entry.distance * m2y) / 100)), 'pace')}</p>/100 yards</p> :

                  props.format === 'avgmpace' ? <p>Avg Pace- <p className='speed'>{handleTime(props.entry.moving_time / (props.entry.distance / 100), 'pace')}</p>/100 Meters</p>
                    : null
          }
          {/* Max Speed Format  */}
          {props.format === 'kph' ? <p>Max Speed- <p className='speed'>{(props.entry.max_speed * mps2kph).toFixed(2)} </p>kph</p> :
            props.format === 'mph' ? <p>Max Speed- <p className='speed'>{(props.entry.max_speed * 2.237).toFixed(2)}</p> mph</p> :
              props.format === 'mps' ? <p>Max Speed- <p className='speed'>{(props.entry.max_speed).toFixed(2)}</p> mps</p> :
                props.format === 'avgypace' ? <p>Max Speed- <p className='speed'>{handleTime(100 / (props.entry.max_speed * m2y), 'pace')}</p>/100 yards</p> :

                  props.format === 'avgmpace' ? <p>Max Speed- <p className='speed'>{handleTime((100 / props.entry.max_speed), 'pace')}</p>/100 Meters</p>
                    : null
          }
          <p>{new Date(props.entry.start_date).toLocaleString()}</p>
        </div>

        <div className='detailed-entry'>
          {/* Description */}
          <div id='top-activity-description'>
            <h4>Activity Description:</h4>
            <p id='top-activity-description'>{props.currentActivity.description}</p>
          </div>
          {/* Kudos & Comments */}
          <div id='fun-stats'>
            <div id='kudos'>
              <img id='kudos-img' src='/images/kudos.jpeg' />
              <h5 id='kudos-count' className='kudos'>Kudos- <p>{props.currentActivity.kudos_count}</p></h5>
              <h5 id='comment-count' className='kudos'>Comments- <p>{props.currentActivity.comment_count}</p></h5>
            </div>

            {/* Heart Rate */}

            {props.currentActivity.average_heartrate !== undefined ?
              <div id='golden-heart-rate'>
                <img id='heart-rate-img' src='/images/heartrate.png' />
                <h5 id='avg-heart-rate' className='heart-rate'>Avg Heart Rate- <p>{props.currentActivity.average_heartrate} bpm</p></h5>
                <h5 id='max-heart-rate' className='heart-rate'>Max Heart Rate- <p>{props.currentActivity.max_heartrate} bpm</p></h5>
              </div>

              :
              <div id='golden-heart-rate'>
                <img id='heart-rate-img' src='/images/heartrate.png' />
                <h5 className='heart-rate' id='avg-heart-rate'><p>No HR Info Available</p></h5>
                <h5 className='heart-rate' id='max-heart-rate'><p></p></h5>
              </div>
            }

            {/* Trophy Case */}
            <div id='trophy-case'>
              <img id='trophy-img' src='/images/trophy.jpeg' />
              <h5 className='achievements' id='acheivement-count'>Achievement Count-
               <p>{props.currentActivity.achievement_count}</p>
              </h5>
              <h5 className='achievements' id='empty-count'><p></p></h5>
            </div>

            {/* Empty Div For Spacing */}
            <div></div>

            {
              props.currentActivity.photos.primary === null ? null :
                <img id='activity-photo' src={props.currentActivity.photos.primary.urls['600']}></img>
            }

          </div>
          {/* Gear */}
          <div id='top-activity-gear'>
            <p>Gear: {props.currentActivity.device_name}</p>
          </div>

        </div>
      </div>
    )
  }

  // General Entry
  return (
    <div id={(Number(props.no) >= 0 && Number(props.no) <= 2) ? ('entry' + (Number(props.no) + 1)) : null} className={innerEntry}>
      <div className={(Number(props.no) >= 0 && Number(props.no) <= 2) ? ('general-entry special-entry') : 'general-entry'}>
        <a className={entryTitle} data-testId={props.entry.id} href='' onClick={(event => { event.preventDefault(); props.showIndividualEntry(event) })}>{props.entry.name}</a>
        {props.format !== 'avgypace' ?
          <p>Distance {pastTense} {props.entry.distance} Meters</p> :
          <p>Distance {pastTense} {(props.entry.distance * 1.094).toFixed()} Yards</p>
        }
        <p>Time Elapsed- {handleTime(props.entry.moving_time)}</p>

        {/* Format */}
        {props.format === 'kph' ? <p>Avg Pace- <p className='speed'>{((props.entry.distance / props.entry.moving_time) * mps2kph).toFixed(2)} </p> kph</p> :
          props.format === 'mph' ? <p>Avg Pace- <p className='speed'>{((props.entry.distance / props.entry.moving_time) * 2.237).toFixed(2)} </p>mph</p> :
            props.format === 'mps' ? <p>Avg Pace- <p className='speed'>{((props.entry.distance / props.entry.moving_time)).toFixed(2)} </p>mps</p> :
              props.format === 'avgypace' ? <p>Avg Pace- <p className='speed'>{handleTime((props.entry.moving_time / ((props.entry.distance * 1.094) / 100)), 'pace')}</p>/100 yards</p> :

                props.format === 'avgmpace' ? <p>Avg Pace- <p className='speed'>{handleTime(props.entry.moving_time / (props.entry.distance / 100), 'pace')}</p>/100 Meters</p>
                  : null
        }
        {/* Max Speed Format  */}

        {props.format === 'kph' ? <p>Max Speed- <p className='speed'>{(props.entry.max_speed * mps2kph).toFixed(2)} </p>kph</p> :
          props.format === 'mph' ? <p>Max Speed- <p className='speed'>{(props.entry.max_speed * 2.237).toFixed(2)}</p> mph</p> :
            props.format === 'mps' ? <p>Max Speed- <p className='speed'>{(props.entry.max_speed).toFixed(2)}</p> mps</p> :
              props.format === 'avgypace' ? <p>Max Speed- <p className='speed'>{handleTime(100 / (props.entry.max_speed * m2y), 'pace')}</p>/100 yards</p> :

                props.format === 'avgmpace' ? <p>Max Speed- <p className='speed'>{handleTime((100 / props.entry.max_speed), 'pace')}</p>/100 Meters</p>
                  : null
        }

        <p>{new Date(props.entry.start_date).toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Entry;


// return data.filter(entry => entry.type === sport && entry.distance !== 0 && entry.distance >= distance).map((entry, index) => {
//   var entryStr = `<div id=${'entry' + (index + 1)} class='entry'>`
//   entryStr += `<p class='entry-title'>${index + 1}. ${entry.name}</p>`
//   entryStr += `<p>Distance ${pastTense} ${entry.distance} Meters</p>`
  // entryStr += `<p>Time Elapsed- ${handleTime(entry['moving_time'])}</p>`
//   entryStr += `<p><p className='speed'> ${((entry.distance / entry.moving_time) * 3.6).toFixed(2)} </p> Kilometers per Hour</p>`


//   var entryDate = new Date(entry.start_date).toLocaleString();
//   entryStr += `<p>On ${entryDate}</p>`
//   entryStr += `</div>`
//   return parse(entryStr);
// })