import { configureStore } from "@reduxjs/toolkit";
import { entriesApi } from "./services/entriesApi";

export const createStore = (initialState = {}) => {
  const store = configureStore({
    reducer: { [entriesApi.reducerPath]: entriesApi.reducer },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(entriesApi.middleware),
  });
  return store;
};

const store = createStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
