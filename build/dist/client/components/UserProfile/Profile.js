import React from "react";
import UserNameSection from "UserProfile/UserNameSection";
import RunningTotals from "UserProfile/RunningTotals";
import SwimmingTotals from "UserProfile/SwimmingTotals";
import { fetchDataUser } from "../FetchUser.js";
const resource = fetchDataUser();
const Profile = () => {
    const profile = resource.user.read();
    return (React.createElement("div", { id: "user-profile" },
        React.createElement("img", { id: "user-img", src: profile.profile }),
        React.createElement(UserNameSection, { profile: profile }),
        React.createElement(RunningTotals, { profile: profile }),
        React.createElement(SwimmingTotals, { profile: profile })));
};
export default Profile;
//# sourceMappingURL=Profile.js.map