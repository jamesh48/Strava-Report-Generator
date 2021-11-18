import React from "react";
const axios = require("axios");
import "../App.scss";
import "../images/favicon.png";
import Report from "./Report.js";
import AllRadios from "OptionsProfile/Radios/AllRadios";
import Profile from "./UserProfile/Profile.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.getLoggedInUser = this.getLoggedInUser.bind(this);
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
      sport: "Run",
      checked: false,
      progressBarProgress: 0,
      distance: 0,
      format: "kph",
      isLoaded: false,
      invalidEntry: false,
      currentActivity: {},
    };
  }

  authorize(props) {
    window.open(
      `https://www.strava.com/oauth/authorize?client_id=${process.env.clientId}&response_type=code&redirect_uri=http://localhost:8000/exchange_token&approval_prompt=force&scope=activity:read_all`
    );
  }

  async getLoggedInUser(callback) {
    try {
      const loggedInUser = await axios(`/getLoggedInUser`);
      return loggedInUser.data;
    } catch (err) {
      this.authorize();
    }
  }

  async getUserActivities(updateProgressBar) {
    const moveProgressBar = setInterval(() => {
      var test = this.updateProgressBar();
      if (test === true) {
        clearInterval(moveProgressBar);
      }
    }, 90);

    try {
      const userEntries = await axios(`/allEntries`);
      await clearInterval(moveProgressBar);
      await this.updateProgressBar("end");
      setTimeout(() => {
        this.updateProgressBar(null, "reset");
      }, 400);
      return userEntries.data;
    } catch (err) {
      clearInterval(moveProgressBar);
      this.updateProgressBar("end");
      callback(this.props.testData);
      console.log(err);
    }
  }

  handleClick({ target: { id } }) {
    this.setState({
      currentPage: Number(id),
    });
  }

  setSport({ target: { value } }) {
    this.setState((prevState, props) => {
      return {
        currentPage: 1,
        checked: false,
        sport: value,
        format: value === "Run" ? "kph" : value === "Swim" ? "avgmpace" : "kph",
        entries: prevState.totalEntries.filter((entry) => entry.type === value),
        distance: 0,
      };
    });
  }

  async showIndividualEntry({
    target: {
      dataset: { testid },
    },
  }) {
    event.preventDefault();
    try {
      const individualEntryResponse = await axios(
        "http://localhost:8000/individualEntry",
        { params: { entryid: testid } }
      );
      this.setState({ currentActivity: individualEntryResponse.data });
      return individualEntryResponse;
    } catch (err) {
      console.log(err);
    }
  }

  setDistance({ target: { value, placeholder } }) {
    if (typeof Number(value) !== "number") {
      this.setState({ invalidEntry: true });
    } else if (placeholder === "Custom Distance" && Number(value) !== 0) {
      this.setState((prevState, props) => {
        return {
          currentPage: 1,
          invalidEntry: false,
          checked: true,
          distance: Number(value),
          entries: prevState.totalEntries
            .filter((entry) => Number(value) <= Number(entry.distance))
            .filter(
              (remainingEntry) => prevState.sport === remainingEntry.type
            ),
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          currentPage: 1,
          invalidEntry: false,
          checked: false,
          distance: Number(value),
          entries: prevState.totalEntries
            .filter((entry) => Number(value) <= Number(entry.distance))
            .filter(
              (remainingEntry) => prevState.sport === remainingEntry.type
            ),
        };
      });
    }
  }

  setFormat({ target: { value } }) {
    this.setState({ format: value });
  }

  updateReport(report) {
    this.setState((prevState, props) => {
      return {
        isLoaded: true,
        totalEntries: report,
        entries: report.filter((entry) => entry.type === "Run"),
      };
    });
  }

  showUserProfile(userProfile) {
    this.setState({ profile: userProfile });
  }

  updateProgressBar(end, reset) {
    if (end) {
      this.setState({ progressBarProgress: 100 });
    } else if (this.state.progressBarProgress === 95) {
      return true;
    } else if (reset) {
      this.setState({ progressBarProgress: 0 });
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          progressBarProgress: prevState.progressBarProgress + 1,
        };
      });
    }
  }

  async componentDidMount() {
    document.title = "Strava Report Generator";
    const user = await this.getLoggedInUser();
    this.showUserProfile(user);
    const results = await this.getUserActivities(this.updateProgressBar);
    this.updateReport(results);
  }

  render() {
    const {
      currentActivity,
      entries,
      currentPage,
      entriesPerPage,
      profile,
      checked,
      progressBarProgress,
      sport,
      distance,
      format,
      invalidEntry,
      isLoaded,
    } = this.state;
    const {
      handleClick,
      updateReport,
      setSport,
      setDistance,
      setFormat,
      updateProgressBar,
      showIndividualEntry,
    } = this;

    return (
      <div id="body">
        <div id="upper-section">
          <Profile profile={profile} />
          <AllRadios
            isLoaded={isLoaded}
            setSport={setSport}
            updateReport={updateReport}
            sport={sport}
            checked={checked}
            updateProgressBar={updateProgressBar}
            progressBarProgress={progressBarProgress}
            distance={distance}
            setDistance={setDistance}
            setFormat={setFormat}
            format={format}
          />
        </div>
        <Report
          sport={sport}
          format={format}
          entries={entries}
          handleClick={handleClick}
          invalidEntry={invalidEntry}
          isLoaded={isLoaded}
          progressBarProgress={progressBarProgress}
          currentActivity={currentActivity}
          currentPage={currentPage}
          entries={entries}
          entriesPerPage={entriesPerPage}
          showIndividualEntry={showIndividualEntry}
        />
      </div>
    );
  }
}
