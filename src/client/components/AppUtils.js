import axios from "axios";

const authorizeApp = async () => {
  const authLink = await axios('/authLink')
  window.open(authLink);
};

const getLoggedInUser = async (callback) => {
  try {
    const { data: loggedInUser } = await axios(`/loggedInUser`);
    return loggedInUser;
  } catch (err) {
    authorizeApp();
  }
};

const getUserActivities = async () => {
  // todo- implement progress bar.
  try {
    const { data: userEntries } = await axios(`/allEntries`);
    return userEntries;
  } catch (err) {
    console.log(err);
  }
};

const getIndividualEntry = async (entryId) => {
  try {
    const { data: individualEntryResponse } = await axios("/individualEntry", {
      params: { entryid: entryId },
    });
    return individualEntryResponse;
  } catch (err) {
    console.log(err);
  }
};

export { getLoggedInUser, getIndividualEntry, getUserActivities };
