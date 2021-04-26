import React from 'react';
const Profile = (props) => {
  const { style, profile } = props;
  const { userProfile, userImg, userInfo, ytdTotals, ytdTotalsTitle } = style;

  return Object.keys(profile).length !== 0 ? (
    // Basic Info
    <div id={userProfile}>
      <img id={userImg} src={profile.profile} />
      <div id={userInfo}>
        <h3 id='user-name'>{profile.firstname} {profile.lastname}</h3>
        <h5 id='user-location'>{profile.city}, {profile.state} {profile.country}</h5>
      </div>

      {/* Running Totals */}
      <div className={ytdTotals}>
        <h4 className={ytdTotalsTitle}>Year-To-Date Run Totals</h4>
        <p>Number of Runs: {profile.ytd_run_totals.count}</p>
        <p>Total Distance: {profile.ytd_run_totals.distance} Meters</p>
        <p>{`Average Speed: `}
      {(profile.ytd_run_totals.count === 0 ? 0 : (profile.ytd_run_totals.distance / profile.ytd_run_totals.elapsed_time).toFixed(2))} Meters per Second</p>
      </div>

      {/* Swimming Totals */}
      <div className={ytdTotals}>
        <h4 className={ytdTotalsTitle}>Year-To-Date Swim Totals</h4>
        <p>Number of Swims: {profile.ytd_swim_totals.count}</p>
        <p>Total Distance: {profile.ytd_swim_totals.distance} Meters</p>
        <p>{`Average Speed: `}
      {profile.ytd_swim_totals.count !== 0 ? (profile.ytd_swim_totals.distance / profile.ytd_swim_totals.elapsed_time).toFixed(2) : 0} Meters per Second</p>
      </div>
    </div>
  ) : null;
}
export default Profile;