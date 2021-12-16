import React, { Suspense } from "react";
import { useGlobalContext } from "./GlobalStore/globalStore.js";
import { getUserActivities } from "./AppUtils.js";
import Report from "./StravaEntries/Report";
import FBUserProfile from "./UserProfile/FallbackProfile/FBUserProfile";
import UserProfile from "./UserProfile/UserProfile";
import Radios from "./OptionsProfile/Radios/Radios";
import "../App.scss";

const App: React.FC<{}> = () => {
  // Global
  const [{}, globalDispatch] = useGlobalContext();
  // Radios
  const [sport, setSport] = React.useState("Run");
  const [format, setFormat] = React.useState("kph");
  const [titleQuery, setTitleQuery] = React.useState("");
  const [fromDateQuery, setFromDateQuery] = React.useState("");
  const [toDateQuery, setToDateQuery] = React.useState("");
  const [distance, setDistance] = React.useState(0);
  const [customDistance, setCustomDistance] = React.useState(false);

  // When Total Entries is defined, set isLoaded to true
  // entries_loaded_signal: React.useEffect(() => {
  //   if (totalEntries.length) {
  //     globalDispatch({ type: "TOGGLE LOADED ON" });
  //   }
  // }, [totalEntries]);

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
    setCustomDistance(false);
  }, [sport]);

  const setSportCallback: React.MouseEventHandler<HTMLInputElement> = ({
    currentTarget: { value }
  }) => {
    setSport(value);
  };

  const setDistanceCallback: React.MouseEventHandler<HTMLInputElement> = ({
    currentTarget: { value, placeholder }
  }) => {
    setDistance(Number(value));

    if (placeholder === "Custom Distance" && Number(value) !== 0) {
      setCustomDistance(true);
    } else {
      setCustomDistance(false);
    }
  };

  const setFormatCallback: React.MouseEventHandler<HTMLInputElement> = ({
    currentTarget: { value }
  }) => {
    setFormat(value);
  };

  const setTitleQueryCallback: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTitleQuery(event.currentTarget.value);
  };

  const setFromDateQueryCallback: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFromDateQuery(event.currentTarget.value);
  };

  const setToDateQueryCallback: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setToDateQuery(event.currentTarget.value);
  };

  return (
    <div id="body">
      <Suspense
        fallback={
          <div id="upper-section">
            <FBUserProfile />
            <Radios
              sport={sport}
              customDistance={customDistance}
              distance={distance}
              format={format}
              titleQuery={titleQuery}
              setSport={setSportCallback}
              setDistance={setDistanceCallback}
              setFormat={setFormatCallback}
              setTitleQuery={setTitleQueryCallback}
              setFromDateQuery={setFromDateQueryCallback}
              setToDateQuery={setToDateQueryCallback}
            />
          </div>
        }
      >
        <div id="upper-section">
          <UserProfile />

          <Radios
            setSport={setSportCallback}
            setDistance={setDistanceCallback}
            setFormat={setFormatCallback}
            setTitleQuery={setTitleQueryCallback}
            setFromDateQuery={setFromDateQueryCallback}
            setToDateQuery={setToDateQueryCallback}
            titleQuery={titleQuery}
            sport={sport}
            customDistance={customDistance}
            distance={distance}
            format={format}
          />
        </div>
      </Suspense>
      <Report
        sport={sport}
        format={format}
        distance={distance}
        titleQuery={titleQuery}
        fromDateQuery={fromDateQuery}
        toDateQuery={toDateQuery}
      />
    </div>
  );
};

export default App;
