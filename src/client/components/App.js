import React, { Suspense } from "react";
import { useGlobalContext } from "GlobalStore";
import { getUserActivities } from "./AppUtils.js";
import Report from "./Report";
import UserProfile from "UserProfile/Profile";
import AllRadios from "OptionsProfile/Radios/AllRadios";
import "../App.scss";

const App = () => {
  // Global
  const [{ totalEntries }, globalDispatch] = useGlobalContext();
  // Radios
  const [sport, setSport] = React.useState("Run");
  const [format, setFormat] = React.useState("kph");
  const [distance, setDistance] = React.useState(0);
  const [checked, setChecked] = React.useState(false);
  const [progressBarProgress, setProgressBarProgress] = React.useState(0);

  // When Total Entries is defined, set isLoaded to true
  entries_loaded_signal: React.useEffect(() => {
    if (totalEntries.length) {
      globalDispatch({ type: "TOGGLE LOADED ON" });
    }
  }, [totalEntries]);

  componentDidMount: React.useEffect(() => {
    document.title = "Strava Report Generator";
    const fetchEntries = async () => {
      const returningEntries = await getUserActivities();
      globalDispatch({ type: "SET TOTAL ENTRIES", payload: returningEntries });
    };
    fetchEntries();
  }, []);

  reset_distance_on_sport_change: React.useEffect(() => {
    setDistance(0);
  }, [sport]);

  reset_format_on_sport_change: React.useEffect(() => {
    setFormat(sport === "Run" ? "kph" : sport === "Swim" ? "avgmpace" : "kph");
  }, [sport]);

  reset_checked_on_sport_change: React.useEffect(() => {
    setChecked(false);
  }, [sport]);

  const setSportCallback = ({ target: { value } }) => {
    setSport(value);
  };

  const setDistanceCallback = ({ target: { value, placeholder } }) => {
    setDistance(Number(value));

    if (placeholder === "Custom Distance" && Number(value) !== 0) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const setFormatCallback = ({ target: { value } }) => {
    setFormat(value);
  };

  return (
    <div id="body">
      <Suspense fallback={<div>Loading Profile...</div>}>
        <div id="upper-section">
          <UserProfile />

          <AllRadios
            setSport={setSportCallback}
            setDistance={setDistanceCallback}
            setFormat={setFormatCallback}
            sport={sport}
            checked={checked}
            distance={distance}
            format={format}
            // updateProgressBar={updateProgressBar}
            // progressBarProgress={progressBarProgress}
          />
        </div>
      </Suspense>
      <Report
        sport={sport}
        format={format}
        distance={distance}
        // progressBarProgress={progressBarProgress}
      />
    </div>
  );
};

export default App;
