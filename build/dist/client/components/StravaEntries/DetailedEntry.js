import React from "react";
import "StaticImages/heartrate.png";
import "StaticImages/kudos.jpeg";
import "StaticImages/trophy.jpeg";
var DetailedEntry = function (_a) {
    var currentActivity = _a.currentActivity, editing = _a.editing, editedDescription = _a.editedDescription, handleEditingChange = _a.handleEditingChange, handleDescriptionChange = _a.handleDescriptionChange, handleActivityUpdate = _a.handleActivityUpdate;
    return (React.createElement("div", { className: "detailed-entry" },
        React.createElement("div", { className: "top-activity-description" },
            React.createElement("h4", null, "Activity Description:"),
            editing ? (React.createElement("textarea", { className: "editing-activity-textarea", value: editedDescription, onChange: handleDescriptionChange })) : (React.createElement("p", { className: "top-activity-description" }, currentActivity.description))),
        React.createElement("div", { id: "fun-stats" },
            React.createElement("div", { id: "kudos-x" },
                React.createElement("img", { id: "kudos-img", src: "/images/kudos.jpeg" }),
                React.createElement("h5", { id: "kudos-count", className: "kudos" },
                    "Kudos- ",
                    React.createElement("p", null, currentActivity.kudos_count)),
                React.createElement("h5", { id: "comment-count", className: "kudos" },
                    "Comments- ",
                    React.createElement("p", null, currentActivity.comment_count))),
            currentActivity.average_heartrate ? (React.createElement("div", { id: "golden-heart-rate" },
                React.createElement("img", { id: "heart-rate-img", src: "/images/heartrate.png" }),
                React.createElement("h5", { id: "avg-heart-rate", className: "heart-rate" },
                    "Avg Heart Rate-",
                    " ",
                    React.createElement("p", null, "".concat(currentActivity.average_heartrate, " bpm"))),
                React.createElement("h5", { id: "max-heart-rate", className: "heart-rate" },
                    "Max Heart Rate- ",
                    React.createElement("p", null, "".concat(currentActivity.max_heartrate, " bpm"))))) : (React.createElement("div", { id: "golden-heart-rate" },
                React.createElement("img", { id: "heart-rate-img", src: "../../images/heartrate.png" }),
                React.createElement("h5", { className: "heart-rate", id: "avg-heart-rate" },
                    React.createElement("p", null, "No HR Info Available")),
                React.createElement("h5", { className: "heart-rate", id: "max-heart-rate" },
                    React.createElement("p", null)))),
            React.createElement("div", { id: "trophy-case" },
                React.createElement("img", { id: "trophy-img", src: "/images/trophy.jpeg" }),
                React.createElement("h5", { className: "achievements", id: "achievement-count" },
                    "Achievement Count-",
                    React.createElement("p", null, currentActivity.achievement_count)),
                React.createElement("h5", { className: "achievements", id: "empty-count" },
                    React.createElement("p", null))),
            React.createElement("div", null),
            currentActivity.photos.primary ? (React.createElement("img", { id: "activity-photo", src: currentActivity.photos.primary.urls["600"] })) : null),
        React.createElement("div", { id: "top-activity-gear" },
            React.createElement("p", null,
                "Gear: ",
                currentActivity.device_name)),
        React.createElement("div", { className: "editing-container" },
            editing && (React.createElement("a", { className: "editing-link", onClick: handleActivityUpdate }, "Submit!")),
            React.createElement("a", { className: "editing-link", onClick: handleEditingChange }, editing ? "Cancel" : "Edit"))));
};
export default DetailedEntry;
//# sourceMappingURL=DetailedEntry.js.map