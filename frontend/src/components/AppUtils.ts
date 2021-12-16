import axios, { AxiosResponse } from "axios";

export const authorizeApp = async () => {
  const { data: authLink }: AxiosResponse = await axios("/authLink");
  window.open(authLink, '_blank');
};

export const getUserActivities = async () => {
  try {
    const { data: userEntries }: AxiosResponse = await axios(`/allEntries`);
    return userEntries;
  } catch (err) {
    console.log(err);
  }
};

export const getIndividualEntry = async (entryId: number) => {
  try {
    const { data: individualEntryResponse }: AxiosResponse = await axios("/individualEntry", {
      params: { entryid: entryId }
    });
    return individualEntryResponse;
  } catch (err) {
    console.log(err.message);
  }
};
