import React from "react";
import axios from "axios";
import { useProgressBarProgressStore } from "./useProgressBarProgress";
import { useInterval } from "./useInterval";
import { useGlobalContext } from "../../GlobalStore/globalStore.js";
import { ProgressBarProps } from "./ProgressBarTypes";

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const [{ isLoaded }, globalDispatch] = useGlobalContext();
  const {
    progressBarProgress,
    incrementProgressBarProgress,
    completeProgressBarProgress,
    resetProgressBarProgress
  } = useProgressBarProgressStore((state) => state);

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

  const updateEntries: () => Promise<void> = async () => {
    globalDispatch({ type: "TOGGLE LOADED OFF" });
    const { data: allActivities } = await axios.post("/addAllActivities");
    globalDispatch({ type: "TOGGLE LOADED ON" });
    globalDispatch({
      type: "SET TOTAL ENTRIES",
      payload: allActivities
    });
  };

  const setSortCondition: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    globalDispatch({
      type: "SET SORT CONDITION",
      payload: event.currentTarget.value
    });
  };

  return progressBarProgress === 0 ? (
    <div className="update-button-container">
      <select className="update-button" onChange={setSortCondition}>
        <option value="speedDesc">Speed: Fastest First</option>
        <option value="movingTimeDesc">Moving Time: Longest First</option>
        <option value="movingTimeAsc">Moving Time: Shortest First</option>
        <option value="timeElapsedDesc">Time Elapsed: Longest First</option>
        <option value="timeElapsedAsc">Time Elapsed: Shortest First</option>
      </select>
      <input
        type="button"
        className="update-button"
        value="Update!"
        onClick={updateEntries}
      />
      <input type="button" className="update-button" value="Destroy!" />
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
