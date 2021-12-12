import React, { Suspense } from "react";
import UserNameSection from "UserProfile/UserNameSection.js";
import RunningTotals from "UserProfile/RunningTotals.js";
import SwimmingTotals from "UserProfile/SwimmingTotals.js";
import { fetchDataUser } from "../FetchUser.js";

const resource = fetchDataUser();

const Profile = () => {
  const profile = resource.user.read();

  return (
    <div id="user-profile">
      <img id="user-img" src={profile.profile} />
      <UserNameSection profile={profile} />
      <RunningTotals profile={profile} />
      <SwimmingTotals profile={profile} />
    </div>
  );
};
export default Profile;
