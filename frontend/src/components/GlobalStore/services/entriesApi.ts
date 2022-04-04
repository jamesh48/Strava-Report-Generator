import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  CurrentActivity,
  DetailedEntryProps,
  Entry,
  StravaEntryProps,
} from "src/components/StravaEntries/EntryTypes";

export const entriesApi = createApi({
  reducerPath: "entriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  tagTypes: ["Entry", "IndEntry"],
  endpoints: (builder) => ({
    getAllEntries: builder.query<Entry[], void>({
      providesTags: ["Entry"],
      query: () => ({ url: "/allEntries", method: "GET" }),
    }),
    getIndividualEntry: builder.query<CurrentActivity, number>({
      providesTags: ["IndEntry"],
      query: (id) => ({ url: "/individualEntry", method: "GET", params: { entryid: id } }),
    }),
    putActivityUpdate: builder.mutation<any, any>({
      invalidatesTags: ["IndEntry"],
      query: (update) => ({
        url: "/putActivityUpdate",
        method: "PUT",
        params: {
          activityId: update.activityId,
          name: update.name,
          description: update.description,
        },
        headers: { "Content-type": "application/json" },
      }),
    }),
  }),
});

export const {
  useGetAllEntriesQuery,
  usePutActivityUpdateMutation,
  useGetIndividualEntryQuery,
  usePrefetch,
} = entriesApi;
