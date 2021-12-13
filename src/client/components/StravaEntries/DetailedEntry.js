import React from "react";
import "StaticImages/heartrate.png";
import "StaticImages/kudos.jpeg";
import "StaticImages/trophy.jpeg";

export default ({
  currentActivity,
  editing,
  editedDescription,
  handleEditingChange,
  handleDescriptionChange,
  handleActivityUpdate
}) => {
  return (
    <div className="detailed-entry">
      {/* Description */}
      <div className="top-activity-description">
        <h4>Activity Description:</h4>
        {editing ? (
          <textarea
            className="editing-activity-textarea"
            value={editedDescription}
            onChange={handleDescriptionChange}
          ></textarea>
        ) : (
          <p className="top-activity-description">
            {currentActivity.description}
          </p>
        )}
      </div>
      {/* Kudos & Comments */}
      <div id="fun-stats">
        <div id="kudos-x">
          <img id="kudos-img" src="/images/kudos.jpeg" />
          <h5 id="kudos-count" className="kudos">
            Kudos- <p>{currentActivity.kudos_count}</p>
          </h5>
          <h5 id="comment-count" className="kudos">
            Comments- <p>{currentActivity.comment_count}</p>
          </h5>
        </div>

        {/* Heart Rate */}
        {currentActivity.average_heartrate ? (
          <div id="golden-heart-rate">
            <img id="heart-rate-img" src="/images/heartrate.png" />
            <h5 id="avg-heart-rate" className="heart-rate">
              Avg Heart Rate-{" "}
              <p>{`${currentActivity.average_heartrate} bpm`}</p>
            </h5>
            <h5 id="max-heart-rate" className="heart-rate">
              Max Heart Rate- <p>{`${currentActivity.max_heartrate} bpm`}</p>
            </h5>
          </div>
        ) : (
          <div id="golden-heart-rate">
            <img id="heart-rate-img" src="../../images/heartrate.png" />
            <h5 className="heart-rate" id="avg-heart-rate">
              <p>No HR Info Available</p>
            </h5>
            <h5 className="heart-rate" id="max-heart-rate">
              <p></p>
            </h5>
          </div>
        )}

        {/* Trophy Case */}
        <div id="trophy-case">
          <img id="trophy-img" src="/images/trophy.jpeg" />
          <h5 className="achievements" id="achievement-count">
            Achievement Count-
            <p>{currentActivity.achievement_count}</p>
          </h5>
          <h5 className="achievements" id="empty-count">
            <p></p>
          </h5>
        </div>

        {/* Empty Div For Spacing */}
        <div></div>

        {currentActivity.photos.primary ? (
          <img
            id="activity-photo"
            src={currentActivity.photos.primary.urls["600"]}
          ></img>
        ) : null}
      </div>
      {/* Gear */}
      <div id={"top-activity-gear"}>
        <p>Gear: {currentActivity.device_name}</p>
      </div>
      {
        <div className="editing-container">
          {editing && (
            <a className="editing-link" onClick={handleActivityUpdate}>
              Submit!
            </a>
          )}
          <a className="editing-link" onClick={handleEditingChange}>
            {editing ? "Cancel" : "Edit"}
          </a>
        </div>
      }
    </div>
  );
};
