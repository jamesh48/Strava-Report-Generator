import axios from "axios";

export const authorizeApp = async () => {
  const { data: authLink } = await axios("/authLink");
  window.open(authLink);
};

export const getUserActivities = async () => {
  try {
    const { data: userEntries } = await axios(`/allEntries`);
    return userEntries;
  } catch (err) {
    console.log(err);
  }
};

export const getIndividualEntry = async (entryId) => {
  try {
    const { data: individualEntryResponse } = await axios("/individualEntry", {
      params: { entryid: entryId }
    });
    return individualEntryResponse;
  } catch (err) {
    console.log(err);
  }
};
