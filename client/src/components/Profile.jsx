// import parse from 'html-react-parser';

const Profile = (props) => {
  if (Object.keys(props.profile).length === 0) {
    return null
  }
  return (
    // Basic Info
    <div id='user-profile'>
      <img id='user-img' src={props.profile.profile}/>
      <div id='user-info'>
        <h3 id='user-name'>{props.profile.firstname} {props.profile.lastname}</h3>
        <h5 id='user-location'>{props.profile.city}, {props.profile.state} {props.profile.country}</h5>
      </div>

      {/* Running Totals */}
      <div className='ytd-totals'>
        <h4 className = 'ytd-totals-title'>Year-To-Date Run Totals</h4>
        <p>Number of Runs: {props.profile.ytd_run_totals.count}</p>
        <p>Total Distance: {props.profile.ytd_run_totals.distance} Meters</p>
        <p>Average Speed:
      {(props.profile.ytd_run_totals.count === 0 ? 0 : (props.profile.ytd_run_totals.distance / props.profile.ytd_run_totals.elapsed_time).toFixed(2))} Meters per Second</p>
      </div>

      {/* Swimming Totals */}
      <div className='ytd-totals'>
        <h4 className = 'ytd-totals-title'>Year-To-Date Swim Totals</h4>
        <p>Number of Swims: {props.profile.ytd_swim_totals.count}</p>
        <p>Total Distance: {props.profile.ytd_swim_totals.distance} Meters</p>
        <p>Average Speed:
      {(props.profile.ytd_swim_totals.count === 0 ? 0 : (props.profile.ytd_swim_totals.distance / props.profile.ytd_swim_totals.elapsed_time).toFixed(2))} Meters per Second</p>
      </div>
    </div>
  )
}
export default Profile;