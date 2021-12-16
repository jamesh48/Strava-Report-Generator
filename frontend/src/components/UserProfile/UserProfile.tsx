import React from "react";
import UserNameSection from "./UserNameSection";
import RunningTotals from "./RunningTotals";
import SwimmingTotals from "./SwimmingTotals";
import { ProfileData } from "./UserProfileTypes";
import { fetchDataUser } from "../FetchUser.js";

const resource = fetchDataUser();

const Profile: React.FC<{}> = () => {
  //@ts-ignore
  const profile: ProfileData & number = resource.user.read();

  return (
    (profile !== 429 && (
      <div id="user-profile">
        <img id="user-img" src={profile.profile} />
        <UserNameSection profile={profile} />
        <RunningTotals profile={profile} />
        <SwimmingTotals profile={profile} />
      </div>
    )) || (
      <div id="user-profile">
        <div id='rate-limit-container'>
          <span className="rate-limit-message">
            Collective Rate Limit Exceeded
          </span>
          <span className="rate-limit-message">Come again tomorrow champ</span>
        </div>
      </div>
    )
  );
};
export default Profile;
