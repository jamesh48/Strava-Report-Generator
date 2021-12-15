import axios, { AxiosRequestConfig } from "axios";
import path = require("path");
// const axios = require("axios");

const {
  findAccessTokenFromCookie,
  findRefreshTokenFromCookie,
  upsertAccessToken,
  upsertRefreshToken
} = require(path.resolve("database/controllers"));

module.exports = {
  getStravaResults: async (config: AxiosRequestConfig) => {
    try {
      const { data: response } = await axios(config);
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  getCurrCredentials: async (athleteId: string) => {
    try {
      const currentAccessToken = await findAccessTokenFromCookie(athleteId);
      return currentAccessToken;
      if (!currentAccessToken) {
        throw new Error("No Cookied User");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  },

  refreshAccessToken: async (getRefreshedAccessTokenConfig: (refreshToken: string) => AxiosRequestConfig, athleteId: string) => {
    // Get the refreshToken based on the cookied users athlete id
    const { refreshToken } = await findRefreshTokenFromCookie(athleteId);
    // With that refresh token, get a new access token
    const {
      data: { access_token, expires_at, refresh_token, token_type }
    } = await axios(getRefreshedAccessTokenConfig(refreshToken));

    const authBearer = `${token_type} ${access_token}`;

    // And update both the access token and the refresh token in the database.
    await upsertAccessToken({
      athleteId: athleteId,
      expiresAt: expires_at * 1000,
      accessToken: authBearer
    });

    await upsertRefreshToken({
      athleteId: athleteId,
      refreshToken: refresh_token
    });

    return authBearer;
  },

  recurseResults: async (config: AxiosRequestConfig, resultArr: [], callback: any) => {
    const currentPageResults = await module.exports.getStravaResults(config);
    console.log(
      `Current Page: ${config.params.page}, Results Length: ${currentPageResults.length}`
        .yellow
    );
    const nextArr = resultArr.concat(currentPageResults);

    if (currentPageResults.length < 200) {
      return callback(nextArr);
    } else {
      config.params.page = config.params.page + 1;
      module.exports.recurseResults(config, nextArr, callback);
    }
  }
};
