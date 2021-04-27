import React from 'react';

export default (props) => {
  const { style, profile } = props;
  const { ytdTotals, ytdTotalsTitle } = style;

  return (
    <div className={ytdTotals}>
      <h4 className={ytdTotalsTitle}>Year-To-Date Swim Totals</h4>
      <p>Number of Swims: {profile.ytd_swim_totals.count}</p>
      <p>Total Distance: {profile.ytd_swim_totals.distance} Meters</p>
      <p>{`Average Speed: `}
        {profile.ytd_swim_totals.count !== 0 ? (profile.ytd_swim_totals.distance / profile.ytd_swim_totals.elapsed_time).toFixed(2) : 0} Meters per Second</p>
    </div>
  )
}