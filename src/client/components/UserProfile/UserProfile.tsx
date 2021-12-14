import React from "react";
import UserNameSection from "./UserNameSection";
import RunningTotals from "./RunningTotals";
import SwimmingTotals from "./SwimmingTotals";
import { ProfileData } from "./UserProfileTypes";
import { fetchDataUser } from "../FetchUser.js";

const resource = fetchDataUser();

const Profile: React.FC<null> = () => {
  const profile: ProfileData = resource.user.read();

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
