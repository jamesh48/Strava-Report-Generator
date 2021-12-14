export interface StravaEntryProps {
  showIndividualEntry: () => void;
  sport: string;
  entry: {
    activityId: number;
    name: string;
    start_date: string;
    max_speed: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
  };
  format: string;
  no: number;
  currentActivity: {
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
  updateIndividualEntry: (currentActivityId: number) => void;
}

export interface EntryDescriptorProps {
  title: string;
  value: string;
}

export interface DetailedEntryProps {
  editing: boolean;
  editedDescription: string;
  currentActivity: {
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
  handleEditingChange: React.MouseEventHandler<HTMLAnchorElement>;
  handleDescriptionChange: (e: { target: { value: string } }) => void;
  handleActivityUpdate: () => void;
}

export interface GeneralEntry {
  no: number;
  editing: boolean;
  editedName: string;
  entry: {
    activityId: number;
    name: string;
    start_date: string;
    max_speed: number;
    distance: number;
    moving_time: number;
    elapsed_time: number;
  };
  sport: string;
  format: string;
  handleNameChange: (e: { target: { value: string } }) => void;
  showIndividualEntry: () => void;
}

export interface NestedEntryDescriptorProps {
  title: string;
  value: string;
  extra: string;
}
