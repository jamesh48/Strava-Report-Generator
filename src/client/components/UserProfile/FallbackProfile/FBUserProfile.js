import React from "react";
import UserNameSection from "UserProfile/FallbackProfile/FBUserNameSection";
import RunningTotals from "UserProfile/FallbackProfile/FBRunningTotals";
import SwimmingTotals from "UserProfile/FallbackProfile/FBSwimmingTotals";

const FBUserProfile = () => (
  <div id="user-profile">
    <img id="user-img" />
    <UserNameSection />
    <RunningTotals />
    <SwimmingTotals />
  </div>
);

export default FBUserProfile;
