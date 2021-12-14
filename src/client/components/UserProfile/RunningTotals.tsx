import React from "react";
import { RunningTotalsSection } from "./UserProfileTypes";


const RunningTotals: React.FC<RunningTotalsSection> = ({
  profile: { ytd_run_totals }
}) => {
  return (
    <div className={`ytd-totals profile-boxes`}>
      <h4 className="ytd-totals-title">Year-To-Date Run Totals</h4>
      <p className="ytd-descriptor">Number of Runs: {ytd_run_totals.count}</p>
      <p className="ytd-descriptor">
        Total Distance: {ytd_run_totals.distance} Meters
      </p>
      <p className="ytd-descriptor">
        {`Average Speed: `}
        {ytd_run_totals.count === 0
          ? 0
          : (ytd_run_totals.distance / ytd_run_totals.elapsed_time).toFixed(
              2
            )}{" "}
        Meters per Second
      </p>
    </div>
  );
};

export default RunningTotals;
