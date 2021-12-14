import React from "react";
var UserNameSection = function (_a) {
    var profile = _a.profile;
    return (React.createElement("div", { className: "profile-boxes", id: "user-info" },
        React.createElement("h3", { id: "user-name" },
            profile.firstname,
            " ",
            profile.lastname),
        React.createElement("h5", { id: "user-location" },
            profile.city,
            ", ",
            profile.state,
            " ",
            profile.country)));
};
export default UserNameSection;
//# sourceMappingURL=UserNameSection.js.map