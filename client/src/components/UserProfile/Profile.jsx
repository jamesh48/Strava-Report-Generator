import React from 'react';
import UserNameSection from './UserNameSection.jsx';
import RunningTotals from './RunningTotals.jsx';
import SwimmingTotals from './SwimmingTotals.jsx';

const Profile = (props) => {
  const { style, profile } = props;
  const { userProfile, userImg, userInfo, ytdTotals, ytdTotalsTitle } = style;

  return Object.keys(profile).length !== 0 ? (
    // Basic Info
    <div id={userProfile}>
      <img id={userImg} src={profile.profile} />
      <UserNameSection style={style} profile={profile} />
      {/* Running Totals */}
      <RunningTotals style={style} profile={profile} />
      {/* Swimming Totals */}
      <SwimmingTotals style={style} profile={profile} />
    </div>
  ) : null;
}
export default Profile;