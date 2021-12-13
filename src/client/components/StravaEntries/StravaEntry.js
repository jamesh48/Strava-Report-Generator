import React from "react";
import GeneralEntry from "StravaEntries/GeneralEntry.js";
import DetailedEntry from "StravaEntries/DetailedEntry.js";
import axios from "axios";

export default ({
  showIndividualEntry,
  sport,
  entry,
  format,
  no,
  currentActivity,
  updateIndividualEntry
}) => {
  const [editing, toggleEditing] = React.useState(false);
  // const [currentActivityId, setCurrentActivityId] = React.useState(-1);
  const [editedName, setEditedName] = React.useState("");
  const [editedDescription, setEditedDescription] = React.useState("");

  React.useEffect(() => {
    if (currentActivity.id === Number(entry.activityId)) {
      setEditedName(currentActivity.name);
      setEditedDescription(currentActivity.description);
      // setCurrentActivityId(currentActivity.id);
    }
  }, [currentActivity]);

  const handleActivityUpdate = async () => {
    toggleEditing(false);
    const { data: updatedActivity } = await axios.put(
      "/putActivityUpdate",
      null,
      {
        params: {
          activityId: currentActivity.id,
          name: editedName,
          description: editedDescription
        }
      }
    );

    // Update the entry
    await updateIndividualEntry(currentActivity.id);
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleEditingChange = (e) => {
    if (e.target.innerHTML === "Cancel") {
      setEditedDescription(currentActivity.description);
    }
    toggleEditing((x) => !x);
  };

  return (
    <div>
      <GeneralEntry
        sport={sport}
        no={no}
        entry={entry}
        format={format}
        editing={editing}
        editedName={editedName}
        handleNameChange={handleNameChange}
        showIndividualEntry={showIndividualEntry}
      />
      {currentActivity.id === Number(entry.activityId) && (
        <DetailedEntry
          editing={editing}
          currentActivity={currentActivity}
          editedDescription={editedDescription}
          handleEditingChange={handleEditingChange}
          handleDescriptionChange={handleDescriptionChange}
          handleActivityUpdate={handleActivityUpdate}
          updateIndividualEntry={updateIndividualEntry}
        />
      )}
    </div>
  );
};
