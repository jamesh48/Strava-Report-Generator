import React from 'react';
const axios = require('axios');

import '../App.css';
import '../images/favicon.png';
import Report from './Report.jsx';
import Buttons from './Buttons/Buttons.jsx';
import Profile from './UserProfile/Profile.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.getLoggedInUser = this.getLoggedInUser.bind(this)
    this.authorize = this.authorize.bind(this);
    this.getUserActivities = this.getUserActivities.bind(this);
    this.updateReport = this.updateReport.bind(this);
    this.showUserProfile = this.showUserProfile.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this);
    this.showIndividualEntry = this.showIndividualEntry.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setSport = this.setSport.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.setFormat = this.setFormat.bind(this);

    this.state = {
      profile: {},
      totalEntries: [],
      entries: [],
      currentPage: 1,
      entriesPerPage: 7,
      sport: 'Run',
      checked: false,
      progressBarProgress: 0,
      distance: 0,
      format: 'kph',
      isLoaded: false,
      invalidEntry: false,
      currentActivity: {}
    };
  };

  authorize = (props) => {
    console.log('authorizing')
    window.open(`https://www.strava.com/oauth/authorize?client_id=${61039}&response_type=code&redirect_uri=http://localhost:8000/exchange_token&approval_prompt=force&scope=activity:read_all`)
  }

  getLoggedInUser = async (callback) => {
    try {
      const loggedInUser = await axios(`http://localhost:8000/getLoggedInUser`);
      return loggedInUser.data;
    } catch (err) {
      this.authorize();
    }
  }

  getUserActivities = async (updateProgressBar) => {
    const moveProgressBar = setInterval(() => {
      var test = this.updateProgressBar()
      if (test === true) {
        clearInterval(moveProgressBar);
      }
    }, 90);

    try {
      const userEntries = await axios(`http://127.0.0.1:8000/getResults`);
      await clearInterval(moveProgressBar);
      await this.updateProgressBar('end')
      setTimeout(() => {
        this.updateProgressBar(null, 'reset');
      }, 400)
      return userEntries.data;
    } catch (err) {
      clearInterval(moveProgressBar);
      this.updateProgressBar('end');
      callback(this.props.testData);
      console.log(err);
    }
  }

  handleClick = ({ target: { id } }) => {
    this.setState({
      currentPage: Number(id)
    })
  }

  setSport = ({ target: { value } }) => {
    this.setState((prevState, props) => {
      return {
        currentPage: 1,
        checked: false,
        sport: value,
        format: value === 'Run' ? 'kph' :
          value === 'Swim' ? 'avgmpace' :
            'kph',
        entries: prevState.totalEntries.filter((entry) => entry.type === value),
        distance: 0
      }
    });
  }

  showIndividualEntry = async ({ target: { dataset: { testid } } }) => {
    event.preventDefault();
    try {
      const individualEntryResponse = await axios('http://localhost:8000/individualEntry', { params: { 'entryid': testid } });
      this.setState({ currentActivity: individualEntryResponse.data });
      return individualEntryResponse;
    } catch (err) {
      console.log(err);
    }
  }



  setDistance = ({ target: { value, placeholder } }) => {
    if (typeof Number(value) !== 'number') {
      this.setState({ invalidEntry: true });
    } else if (placeholder === 'Custom Distance' && Number(value) !== 0) {
      this.setState((prevState, props) => {
        return {
          currentPage: 1,
          invalidEntry: false,
          checked: true,
          distance: Number(value),
          entries: prevState.totalEntries.filter((entry) => Number(value) <= Number(entry.distance)).filter((remainingEntry) => prevState.sport === remainingEntry.type)
        }
      });
    } else {
      this.setState((prevState, props) => {
        return {
          currentPage: 1,
          invalidEntry: false,
          checked: false,
          distance: Number(value),
          entries: prevState.totalEntries.filter((entry) => Number(value) <= Number(entry.distance)).filter((remainingEntry) => prevState.sport === remainingEntry.type)
        }
      });
    }
  }


  setFormat = ({ target: { value } }) => {
    this.setState({ format: value });
  }

  updateReport(report) {
    this.setState((prevState, props) => {
      console.log(report)
      return {
        isLoaded: true,
        totalEntries: report,
        entries: report.filter((entry) => entry.type === 'Run')
      }
    }
    );
  }

  showUserProfile(userProfile) {
    this.setState({ profile: userProfile })
  }

  updateProgressBar = (end, reset) => {
    if (end) {
      this.setState({ progressBarProgress: 100 })
    } else if (this.state.progressBarProgress === 95) {
      return true;
    } else if (reset) {
      this.setState({ progressBarProgress: 0 });
    } else {
      this.setState(prevState => {
        return {
          ...prevState,
          progressBarProgress: prevState.progressBarProgress + 1
        }
      });
    }
  }

  async componentDidMount() {
    document.title = 'Strava Report Generator';
    const user = await this.getLoggedInUser();
    this.showUserProfile(user);
    const results = await this.getUserActivities(this.updateProgressBar);
    this.updateReport(results);
  }

  // componentDidMount() {
  //   document.title = 'Test Report Generator';
  //   const user = this.props.profileTestData;
  //   const results = this.props.testData;
  //   this.updateReport(results);
  // }

  render() {
    const { currentActivity, entries, currentPage, entriesPerPage, profile, checked, progressBarProgress, sport, distance, format, invalidEntry, isLoaded } = this.state;
    const { handleClick, updateReport, setSport, setDistance, setFormat, updateProgressBar, showIndividualEntry } = this;
    const { styles } = this.props;
    const { upperSection } = styles;

    return (
      <div id='body' >
        <div id={upperSection}>
          <Profile style={styles} profile={profile} />
          <Buttons style={styles} isLoaded={isLoaded} setSport={setSport} updateReport={updateReport} sport={sport} checked={checked} updateProgressBar={updateProgressBar} progressBarProgress={progressBarProgress} distance={distance} setDistance={setDistance} setFormat={setFormat} format={format} />
        </div>
        <Report sport={sport} format={format} entries={entries} handleClick={handleClick} style={styles} invalidEntry={invalidEntry} isLoaded={isLoaded} progressBarProgress={progressBarProgress} currentActivity={currentActivity} currentPage={currentPage} entries={entries} entriesPerPage={entriesPerPage} showIndividualEntry={showIndividualEntry} />
      </div>

    )
  }
}
