import React from 'react';

export default ({profile}) => {


  return (
    <div className='profile-boxes' id='user-info'>
      <h3 id='user-name'>{profile.firstname} {profile.lastname}</h3>
      <h5 id='user-location'>{profile.city}, {profile.state} {profile.country}</h5>
    </div>
  )
}