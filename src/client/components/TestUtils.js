import axios from "axios";

const authorizeApp = async () => {
  const { data: authLink } = await axios("/authLink");
  window.open(authLink);
};

export const fetchDataUser = () => {
  const userPromise = fetchUser();
  return {
    user: wrapPromise(userPromise),
  };
};

export const fetchDataEntries = () => {
  const entriesPromise = fetchEntries();
  return {
    entries: wrapPromise(entriesPromise)
  }
}

const wrapPromise = (promise) => {

  // set initial status;
  let status = "pending";
  // Store Result
  let result;
  // Wait for promise
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const fetchUser = async () => {
  try {
    const { data } = await axios("/loggedInUser");
    return data;
  } catch (err) {
    authorizeApp();
  }
};

const fetchEntries = () => {
  console.log("Fetching Entries...");
  return axios('/allEntries')
    .then(res => res.data)
    .catch(err => console.log(err))
};
