import React from 'react';

export default ({profile: {ytd_swim_totals}}) => {
  return (
    <div className={`ytd-totals profile-boxes`}>
      <h4 className='ytd-totals-title'>Year-To-Date Swim Totals</h4>
      <p>Number of Swims: {ytd_swim_totals.count}</p>
      <p>Total Distance: {ytd_swim_totals.distance} Meters</p>
      <p>{`Average Speed: `}
        {ytd_swim_totals.count !== 0 ? (ytd_swim_totals.distance / ytd_swim_totals.elapsed_time).toFixed(2) : 0} Meters per Second</p>
    </div>
  )
}