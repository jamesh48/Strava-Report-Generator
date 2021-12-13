import React from "react";

export default ({ no, entry, sport, format, showIndividualEntry }) => {
  const m2y = 1.094;
  const mps2kph = 3.6;

  const pastTense =
    sport === "Walk"
      ? "Walked-"
      : sport === "Swim"
      ? "Swam-"
      : sport === "Ride"
      ? "Rode-"
      : sport === "Run"
      ? "Ran"
      : "traveled-";

  const handleTime = (movingTime, pace) => {
    if (movingTime !== Infinity) {
      if (pace) {
        return new Date(movingTime * 1000).toISOString().substr(15, 4);
      }
      return new Date(movingTime * 1000).toISOString().substr(11, 8);
    } else {
      return "00:00";
    }
  };

  return (
    <div
      id={
        Number(no) === 0
          ? "entry1"
          : Number(no) === 1
          ? "entry2"
          : Number(no) === 2
          ? "entry3"
          : null
      }
      className="inner-entry"
    >
      <div
        className={
          Number(no) >= 0 && Number(no) <= 2
            ? `${"general-entry"} ${"special-entry"}`
            : "general-entry"
        }
      >
        <a
          className="entry-title"
          data-indentry={entry.id}
          href=""
          onClick={showIndividualEntry}
        >
          {entry.name}
        </a>
        {format !== "avgypace" ? (
          <p className="entry-descriptor">
            Distance {pastTense} {entry.distance} Meters
          </p>
        ) : (
          <p className="entry-descriptor">
            Distance {pastTense} {(entry.distance * 1.094).toFixed()} Yards
          </p>
        )}
        <p className="entry-descriptor">
          Time Elapsed- {handleTime(entry.elapsed_time)}
        </p>

        <p className="entry-descriptor">
          Moving Time- {handleTime(entry.moving_time)}
        </p>

        {/* For Debugging  */}
        {/* <p className="entry-descriptor">id = {entry.activityId}</p> */}

        {/* Format */}
        {format === "kph" ? (
          <p className="entry-descriptor">
            Avg Pace-{" "}
            <p className="speed">
              {((entry.distance / entry.moving_time) * mps2kph).toFixed(2)}{" "}
            </p>{" "}
            kph
          </p>
        ) : format === "mph" ? (
          <p className="entry-descriptor">
            Avg Pace-{" "}
            <p className="speed">
              {((entry.distance / entry.moving_time) * 2.237).toFixed(2)}{" "}
            </p>
            mph
          </p>
        ) : format === "mps" ? (
          <p className="entry-descriptor">
            Avg Pace-{" "}
            <p className="speed">
              {(entry.distance / entry.moving_time).toFixed(2)}{" "}
            </p>
            mps
          </p>
        ) : format === "avgypace" ? (
          <p className="entry-descriptor">
            Avg Pace-{" "}
            <p className="speed">
              {handleTime(
                entry.moving_time / ((entry.distance * 1.094) / 100),
                "pace"
              )}
            </p>
            /100 yards
          </p>
        ) : format === "avgmpace" ? (
          <p className="entry-descriptor">
            Avg Pace-{" "}
            <p className="speed">
              {handleTime(entry.moving_time / (entry.distance / 100), "pace")}
            </p>
            /100 Meters
          </p>
        ) : null}
        {/* Max Speed Format  */}

        {format === "kph" ? (
          <p className="entry-descriptor">
            Max Speed-{" "}
            <p className="speed">{(entry.max_speed * mps2kph).toFixed(2)} </p>
            kph
          </p>
        ) : format === "mph" ? (
          <p className="entry-descriptor">
            Max Speed-{" "}
            <p className="speed">{(entry.max_speed * 2.237).toFixed(2)}</p> mph
          </p>
        ) : format === "mps" ? (
          <p className="entry-descriptor">
            Max Speed- <p className="speed">{entry.max_speed.toFixed(2)}</p> mps
          </p>
        ) : format === "avgypace" ? (
          <p className="entry-descriptor">
            Max Speed-{" "}
            <p className="speed">
              {handleTime(100 / (entry.max_speed * m2y), "pace")}
            </p>
            /100 yards
          </p>
        ) : format === "avgmpace" ? (
          <p className="entry-descriptor">
            Max Speed-{" "}
            <p className="speed">{handleTime(100 / entry.max_speed, "pace")}</p>
            /100 Meters
          </p>
        ) : null}

        <p className="entry-descriptor">
          {new Date(entry.start_date).toLocaleString()}
        </p>
      </div>
    </div>
  );
};
