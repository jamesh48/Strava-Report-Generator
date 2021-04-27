import React from 'react';


export default (props) => {
  const { style, profile } = props;
  const { userInfo } = style;

  return (
    <div id={userInfo}>
      <h3 id='user-name'>{profile.firstname} {profile.lastname}</h3>
      <h5 id='user-location'>{profile.city}, {profile.state} {profile.country}</h5>
    </div>
  )
}