import React from "react";
import UserNameSection from "./UserNameSection";
import RunningTotals from "./RunningTotals";
import SwimmingTotals from "./SwimmingTotals";
import { fetchDataUser } from "../FetchUser.js";
var resource = fetchDataUser();
var Profile = function () {
    var profile = resource.user.read();
    return (React.createElement("div", { id: "user-profile" },
        React.createElement("img", { id: "user-img", src: profile.profile }),
        React.createElement(UserNameSection, { profile: profile }),
        React.createElement(RunningTotals, { profile: profile }),
        React.createElement(SwimmingTotals, { profile: profile })));
};
export default Profile;
//# sourceMappingURL=UserProfile.js.map