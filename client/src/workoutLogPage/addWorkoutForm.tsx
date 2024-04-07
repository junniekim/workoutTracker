import React, { useState } from "react";

const AddWorkoutForm = () => {
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [set, setSet] = useState("");
  const [rep, setRep] = useState("");
  const [isWarmUp, setIsWarmUp] = useState(false);
  const [isMax, setIsMax] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutTitle(e.target.value);
  };

  const handleSetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSet(e.target.value);
  };

  const handleRepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRep(e.target.value);
  };

  const handleWarmUpChange = () => {
    setIsWarmUp(!isWarmUp);
  };

  const handleMaxChange = () => {
    setIsMax(!isMax);
  };

  const handleDelete = () => {
    // Implement delete functionality
  };

  return (
    <div
      className="row mb-3 mt-3"
      style={{
        borderStyle: "solid",
        borderWidth: "1px",
        borderRadius: "5px",
        borderColor: "grey",
        margin: "5px",
        padding: "10px",
      }}
    >
      {/* IF cardio, then set and rep box replaced to minutes, and two checkbox disappear  */}
      <div className="col-12 col-md-6 form-group mb-2">
        <input
          type="text"
          placeholder="Workout Title"
          className="form-control"
          id="editTitle"
          value={workoutTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div className="form-group col-6 col-md-3 mb-2">
        <input
          type="text"
          placeholder="Weight"
          className="form-control"
          id="editTitle"
          value={set}
          onChange={handleSetChange}
        />
      </div>
      <div className="form-group  col-6 col-md-3 mb-2">
        <input
          type="text"
          placeholder="Rep"
          className="form-control"
          id="editTitle"
          value={rep}
          onChange={handleRepChange}
        />
      </div>
      <div className="d-flex justify-content-center" style={{ gap: "10px" }}>
        <div className="d-flex" style={{ gap: "10px" }}>
          <input
            type="checkbox"
            checked={isWarmUp}
            onChange={handleWarmUpChange}
          />
          <h5 style={{ marginTop: "0.5rem" }}>Warm Up</h5>
        </div>
        <div className="d-flex" style={{ gap: "10px" }}>
          <input type="checkbox" checked={isMax} onChange={handleMaxChange} />
          <h5 style={{ marginTop: "0.5rem" }}>MAX</h5>
        </div>
      </div>
      <div className="col-12 text-center">
        <button className="text-button-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddWorkoutForm;
