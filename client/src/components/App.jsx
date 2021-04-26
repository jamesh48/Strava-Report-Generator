import React from 'react';
const axios = require('axios');

import '../App.css';
import Report from './Report.jsx';
import Buttons from './Buttons.jsx';
import Profile from './Profile.jsx';
import Entry from './entry.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.getLoggedInUser = this.getLoggedInUser.bind(this)
    this.authorize = this.authorize.bind(this);
    this.getUserActivities = this.getUserActivities.bind(this);
    this.updateReport = this.updateReport.bind(this);
    this.showUserProfile = this.showUserProfile.bind(this);
    this.updateProgressBar = this.updateProgressBar.bind(this);
    this.renderEmpty = this.renderEmpty.bind(this);
    this.renderPageNumbers = this.renderPageNumbers.bind(this);
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
      // callback(this.props.testData);
      console.log(err.statusText);
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
    try {
      const individualEntryResponse = await axios('http://localhost:8000/individualEntry', { params: { 'entryid': testid } });
      this.setState({ currentActivity: individualEntryResponse.data });
      return individualEntryResponse;
    } catch (err) {
      console.log(err);
    }
  }



  setDistance = ({ target: { value } }, checked) => {
    if (typeof Number(value) !== 'number') {
      this.setState({ invalidEntry: true });
    } else if (checked) {
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

  updateProgressBar(end, reset) {
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

  // This Function is called inside of render so don't set state!
  renderEmpty() {
    return (
      <li className={this.props.styles.innerEntry}>
        <h4 className={this.props.styles.entryTitle} id='no-entries-found'>~No Entries Found~</h4>
        <p id={this.props.styles.champ}>But keep up the Good Work Champ!</p>
      </li>
    )
  }

  // This Function is called inside of render so don't set state!
  renderPageNumbers() {
    const { entries, currentPage, entriesPerPage } = this.state;

    return [...new Array(Math.ceil(entries.length / entriesPerPage))].map((x, index) => {
      return (index + 1);
    }).map(number => {
      return (
        <PageNo key={number} styleX={this.props.styles} number={number} page={this.state.currentPage} handleClick={this.handleClick} />
      )
    });
  }

  render() {
    const { currentActivity, entries, currentPage, entriesPerPage, profile, checked, progressBarProgress, sport, distance, format, invalidEntry, isLoaded } = this.state;
    const { handleClick, updateReport, setSport, setDistance, setFormat, updateProgressBar, renderEmpty, renderPageNumbers } = this;
    const { styles } = this.props;

    // https://stackoverflow.com/questions/40232847/how-to-implement-pagination-in-reactjs
    const currentEntries = entries.slice(((currentPage * entriesPerPage) - entriesPerPage), (currentPage * entriesPerPage))

    const renderEntries = currentEntries.map((entry, index) => {

      if (currentPage === 1 && (index >= 0 && index <= 3)) {
        return <li key={index}><Entry style={styles} currentActivity={currentActivity} showIndividualEntry={this.showIndividualEntry} no={index} sport={sport} entry={entry} format={format} /></li>
      } else {
        return <li className='entry' key={index}><Entry style={styles} currentActivity={currentActivity} showIndividualEntry={this.showIndividualEntry} sport={sport} entry={entry} format={format} /></li>
      }

    })

    return (
      <div id='body' >
        <div id={this.props.styles.upperSection}>
          <Profile style={styles} profile={profile} />
          <Buttons style={styles} setSport={setSport} updateReport={updateReport} sport={sport} checked={checked} updateProgressBar={updateProgressBar} progressBarProgress={progressBarProgress} distance={distance} setDistance={setDistance} setFormat={setFormat} format={format} />
        </div>
        <Report handleClick={handleClick} style={styles} invalidEntry={invalidEntry} isLoaded={isLoaded} progressBarProgress={progressBarProgress} currentEntries={currentEntries} currentPage={currentPage} entries={entries} entriesPerPage={entriesPerPage} renderEmpty={renderEmpty} renderEntries={renderEntries} />
      </div>

    )
  }
}
