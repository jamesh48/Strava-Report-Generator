import React from "react";

export interface StravaEntryProps {
  showIndividualEntry: React.MouseEventHandler<HTMLAnchorElement>;
  sport: string;
  entry: Entry;
  format: string | undefined;
  no: number | undefined;
  currentActivity?: CurrentActivity;
}

export interface EntryDescriptorProps {
  title: string;
  value: string;
}

export interface DetailedEntryProps {
  editing: boolean;
  editedDescription: string;
  currentActivity: CurrentActivity;
  handleEditingChange: React.MouseEventHandler<HTMLAnchorElement>;
  handleDescriptionChange: (e: { target: { value: string } }) => void;
  handleActivityUpdate: () => void;
}

export type Entry = {
  activityId: number;
  name: string;
  start_date: string;
  max_speed: number;
  distance: number;
  moving_time: number;
  elapsed_time: number;
};

export interface GeneralEntryProps {
  no: number | undefined;
  editing: boolean;
  editedName: string;
  entry: Entry;
  sport: string;
  format: string | undefined;
  handleNameChange: (e: { target: { value: string } }) => void;
  showIndividualEntry: React.MouseEventHandler<HTMLAnchorElement>;
}

export interface NestedEntryDescriptorProps {
  title: string;
  value: string;
  extra: string;
}

export type CurrentActivity = {
  id: number;
  name: string;
  kudos_count: number;
  comment_count: number;
  average_heartrate: number;
  max_heartrate: number;
  achievement_count: number;
  description: string;
  device_name: string;
  photos: {
    primary: {
      urls: {
        "600": string;
      };
    };
  };
};

export interface EntryUIProps {
  entries: Entry[];
  entriesPerPage: number;
  currentPage: number;
  currentActivity?: CurrentActivity;
  invalidEntry: boolean;
  sport: string;
  format?: string | undefined;
  showIndividualEntry: React.MouseEventHandler<HTMLAnchorElement>;
}
