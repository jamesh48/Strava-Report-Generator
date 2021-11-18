const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

const totalEntries = (state = [], action) => {
  switch (action.type) {
    case "SET TOTAL ENTRIES":
      return action.payload;
    default:
      return state;
  }
};

const isLoaded = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE LOADED ON":
      return true;
    default:
      return state;
  }
}

export default combineReducers({ totalEntries, isLoaded });
