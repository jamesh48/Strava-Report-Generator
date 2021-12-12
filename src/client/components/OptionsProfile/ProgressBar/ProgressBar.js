import React from "react";
import axios from "axios";
import { useProgressBarProgressStore } from "./useProgressBarProgress";
import { useInterval } from "./useInterval";
import { useGlobalContext } from "GlobalStore";

const ProgressBar = (props) => {
  const [{ isLoaded }, globalDispatch] = useGlobalContext();
  const {progressBarProgress, incrementProgressBarProgress, completeProgressBarProgress, resetProgressBarProgress } =
    useProgressBarProgressStore((state) => state);

  useInterval(
    () => {
      if (isLoaded) {
        completeProgressBarProgress();
        setTimeout(() => {
          resetProgressBarProgress();
        }, 750);
      } else if (isLoaded === false) {
        incrementProgressBarProgress();
      }
    },
    isLoaded === true || isLoaded === null ? -1 : 75
  );

  const fillerStyles = {
    width: `${progressBarProgress}%`
  };

  const updateEntries = async () => {
    globalDispatch({ type: "TOGGLE LOADED OFF" });
    const { data: allActivities } = await axios.post("/addAllActivities");
    globalDispatch({ type: "TOGGLE LOADED ON" });
    globalDispatch({
      type: "SET TOTAL ENTRIES",
      payload: allActivities
    });
  };

  return progressBarProgress === 0 ? (
    <div className="update-button-container">
      <input
        type="button"
        className="update-button"
        value="Update!"
        onClick={updateEntries}
      />
    </div>
  ) : (
    <div className="update-button-container">
      <div id="progress-bar-container">
        <div className="progress-bar-filler" style={fillerStyles}>
          <span className="progress-bar-counter">{`${progressBarProgress}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
