import TitleHeader from "../Shared/titleHeader";
import Dropdown from "react-dropdown";
import noImage from "../assets/noImage.png";
import "react-dropdown/style.css";
import Workout from "./workout";
import { useState } from "react";
const WorkoutListPage = () => {
  const options = ["Upperbody", "Chest", "Upper Chest", "Cardio"];
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  return (
    <div>
      <TitleHeader title="✏️My List"></TitleHeader>
      <div
        className="row d-flex flex-row"
        style={{
          margin: "0 5px 0 5px",
          borderRadius: "10px",
          borderStyle: "solid",
          borderColor: "#DCDCDC",
          borderWidth: "1px", // Modify the border width here
          padding: "20px",
        }}
      >
        <Dropdown
          className="mt-2 mb-2  col-12 col-md-3 col-lg-2" // need to be bigger on bigger screen
          options={options}
          value={options[3]}
          placeholder="Select an option"
        ></Dropdown>
        <h2 className="mt-2 mb-2 col-auto">»</h2>
        <Dropdown
          className=" mt-2 mb-2 col-12 col-md-3 col-lg-2" // need to be bigger on bigger screen
          options={options}
          value={options[0]}
          placeholder="Select an option"
        ></Dropdown>

        {adding ? (
          <div
            className="col-12 row mt-2 justify-content-center"
            style={{ gap: "10px" }}
          >
            <div className="col-12 d-flex justify-content-center">
              <form>
                <div className="form-group ">
                  <input
                    type="text"
                    placeholder="Workout Name"
                    className="form-control"
                    id="title"
                  />
                </div>
              </form>
            </div>
            <div className="col-12 d-flex mb-1 justify-content-center">
              <button className="text-button btn btn-outline-secondary">
                Upload Image
              </button>
            </div>

            <button
              onClick={() => {
                setAdding(false);
              }}
              className="btn btn-success col-4 col-sm-4 col-md-3 col-lg-2"
            >
              Save Workout
            </button>
            <button
              onClick={() => {
                setAdding(false);
              }}
              className="btn btn-secondary col-4 col-sm-4 col-md-3 col-lg-2"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="col-12 row mt-2 justify-content-center">
            <button
              onClick={() => {
                setAdding(true);
              }}
              className="btn btn-outline-primary col-4 col-sm-4 col-md-3 col-lg-2"
            >
              Add Workout
            </button>
          </div>
        )}
      </div>
      <div className="mt-3 row d-flex">
        <div className="col-12 col-md-6  d-flex justify-content-center">
          {editing ? (
            <div className=" d-flex " style={{ gap: "10px" }}>
              <button
                className="btn btn-success"
                onClick={() => {
                  setEditing(!editing);
                }}
              >
                Save Changes
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  setEditing(!editing);
                }}
              >
                Discard
              </button>
            </div>
          ) : (
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setEditing(!editing);
              }}
            >
              Edit Workout
            </button>
          )}
        </div>

        <div
          className="mt-1 col-12 col-md-6 d-flex justify-content-center"
          style={{ gap: "10px" }}
        >
          <input type="checkbox" id="customOnly" />
          <h5 style={{ marginTop: "0.5rem" }}>Only Show Custom Workouts</h5>
        </div>
      </div>
      <div className="mt-4 row d-flex flex-row">
        <Workout
          description="Lower Back"
          custom={true}
          editing={editing}
          image={noImage}
          title="Lat Pull Down"
        ></Workout>
        <Workout
          description="Lower Back"
          image="https://github.com/chaosbastler/opentraining-exercises/blob/master/Biceps-curl-reverse-1.png?raw=true"
          title="Lat Pull Down"
        ></Workout>
        <Workout
          description="Lower Back"
          image="https://github.com/chaosbastler/opentraining-exercises/blob/master/Cross-body-crunch-1.png?raw=true"
          title="Lat Pull Down"
        ></Workout>
      </div>
    </div>
  );
};
export default WorkoutListPage;
