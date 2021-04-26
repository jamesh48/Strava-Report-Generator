// import parse from 'html-react-parser';
import React from 'react';
const Profile = (props) => {
  const { style } = props;
  const { userProfile, userImg, userInfo, ytdTotals, ytdTotalsTitle } = style;

  if (Object.keys(props.profile).length === 0) {
    return null
  }
  return (
    // Basic Info
    <div id={userProfile}>
      <img id={userImg} src={props.profile.profile} />
      <div id={userInfo}>
        <h3 id='user-name'>{props.profile.firstname} {props.profile.lastname}</h3>
        <h5 id='user-location'>{props.profile.city}, {props.profile.state} {props.profile.country}</h5>
      </div>

      {/* Running Totals */}
      <div className={ytdTotals}>
        <h4 className={ytdTotalsTitle}>Year-To-Date Run Totals</h4>
        <p>Number of Runs: {props.profile.ytd_run_totals.count}</p>
        <p>Total Distance: {props.profile.ytd_run_totals.distance} Meters</p>
        <p>Average Speed:
      {(props.profile.ytd_run_totals.count === 0 ? 0 : (props.profile.ytd_run_totals.distance / props.profile.ytd_run_totals.elapsed_time).toFixed(2))} Meters per Second</p>
      </div>

      {/* Swimming Totals */}
      <div className={ytdTotals}>
        <h4 className={ytdTotalsTitle}>Year-To-Date Swim Totals</h4>
        <p>Number of Swims: {props.profile.ytd_swim_totals.count}</p>
        <p>Total Distance: {props.profile.ytd_swim_totals.distance} Meters</p>
        <p>Average Speed:
      {(props.profile.ytd_swim_totals.count === 0 ? 0 : (props.profile.ytd_swim_totals.distance / props.profile.ytd_swim_totals.elapsed_time).toFixed(2))} Meters per Second</p>
      </div>
    </div>
  )
}
export default Profile;