require("dotenv").config({ path: "configs/dotenv/.env" });

module.exports = {
  getAthleteAuthConfig: (currentAccessToken: string, _currentScopes: string) => {
    return {
      url: "https://www.strava.com/api/v3/athlete",
      headers: {
        Authorization: currentAccessToken
      },
      scope: "activity:read_all"
    };
  },
  getAllEntriesConfig: (currentAccessToken: string) => {
    return {
      url: "https://www.strava.com/api/v3/athlete/activities",
      headers: {
        Authorization: currentAccessToken
      },
      params: {
        page: 1,
        per_page: 200
      },
      data: ""
    };
  },
  getStatsConfig: (currentAccessToken: string, athleteId: string) => {
    return {
      url: `https://www.strava.com/api/v3/athletes/${athleteId}/stats/`,
      headers: {
        Authorization: currentAccessToken
      },
      data: ""
    };
  },
  getIndEntryConfig: (currentAccessToken: string, entryId: string) => {
    return {
      url: `https://www.strava.com/api/v3/activities/${entryId}include_all_efforts=true`,
      headers: {
        Authorization: currentAccessToken
      }
    };
  },
  getRefreshedAccessTokenConfig: (refreshToken: string) => {
    return {
      method: "POST",
      url: "https://www.strava.com/api/v3/oauth/token",
      data: {
        client_id: process.env.USER_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: refreshToken
      }
    };
  }
};
