import React from 'react';
import '../../images/heartrate.png';
import '../../images/kudos.jpeg';
import '../../images/trophy.jpeg';


export default (props) => {
  const { style, currentActivity } = props;
  const { detailedEntry, topActivityDescription, funStats, kudosX, kudos, kudosImg, kudosCount, commentCount, heartRate, avgHeartRate, maxHeartRate, heartRateImg, goldenHeartRate, trophyCase, trophyImg, achievementCount, emptyCount, topActivityGear, achievements, activityPhoto } = style;

  return (
    <div className={detailedEntry}>
      {/* Description */}
      <div className={topActivityDescription}>
        <h4>Activity Description:</h4>
        <p className={topActivityDescription}>{currentActivity.description}</p>
      </div>
      {/* Kudos & Comments */}
      <div id={funStats}>
        <div id={kudosX}>
          <img id={kudosImg} src='/images/kudos.jpeg' />
          <h5 id={kudosCount} className={kudos}>Kudos- <p>{currentActivity.kudos_count}</p></h5>
          <h5 id={commentCount} className={kudos}>Comments- <p>{currentActivity.comment_count}</p></h5>
        </div>

        {/* Heart Rate */}
        {currentActivity.average_heartrate ?
          <div id={goldenHeartRate}>
            <img id={heartRateImg} src='/images/heartrate.png' />
            <h5 id={avgHeartRate} className={heartRate}>Avg Heart Rate- <p>{`${currentActivity.average_heartrate} bpm}`}</p></h5>
            <h5 id={maxHeartRate} className={heartRate}>Max Heart Rate- <p>{`${currentActivity.max_heartrate} bpm`}</p></h5>
          </div>
          :
          <div id={goldenHeartRate}>
            <img id={heartRateImg} src='../../images/heartrate.png' />
            <h5 className={heartRate} id={avgHeartRate}><p>No HR Info Available</p></h5>
            <h5 className={heartRate} id={maxHeartRate}><p></p></h5>
          </div>
        }

        {/* Trophy Case */}
        <div id={trophyCase}>
          <img id={trophyImg} src='/images/trophy.jpeg' />
          <h5 className={achievements} id={achievementCount}>Achievement Count-
       <p>{currentActivity.achievement_count}</p>
          </h5>
          <h5 className={achievements} id={emptyCount}><p></p></h5>
        </div>

        {/* Empty Div For Spacing */}
        <div></div>

        {
          currentActivity.photos.primary ?
            <img id={activityPhoto} src={currentActivity.photos.primary.urls['600']}></img> : null
        }

      </div>
      {/* Gear */}
      <div id={topActivityGear}>
        <p>Gear: {currentActivity.device_name}</p>
      </div>
    </div>
  )
}