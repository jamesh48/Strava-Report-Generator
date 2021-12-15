import React from "react";

interface UserNameSection {
  profile: {
    firstname: string;
    lastname: string;
    city: string;
    state: string;
    country: string;
  };
}

const UserNameSection: React.FC<UserNameSection> = ({ profile }) => {
  return (
    <div className="profile-boxes" id="user-info">
      <h3 id="user-name">
        {profile.firstname} {profile.lastname}
      </h3>
      <h5 id="user-location">
        {profile.city}, {profile.state} {profile.country}
      </h5>
    </div>
  );
};

export default UserNameSection;
