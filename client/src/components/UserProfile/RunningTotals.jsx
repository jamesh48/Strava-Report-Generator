import React from 'react';

export default (props) => {
  const { style, profile } = props;
  const { ytdTotals, ytdTotalsTitle } = style;

  return (
    <div className={ytdTotals}>
      <h4 className={ytdTotalsTitle}>Year-To-Date Run Totals</h4>
      <p>Number of Runs: {profile.ytd_run_totals.count}</p>
      <p>Total Distance: {profile.ytd_run_totals.distance} Meters</p>
      <p>{`Average Speed: `}
        {(profile.ytd_run_totals.count === 0 ? 0 : (profile.ytd_run_totals.distance / profile.ytd_run_totals.elapsed_time).toFixed(2))} Meters per Second</p>
    </div>
  )
}