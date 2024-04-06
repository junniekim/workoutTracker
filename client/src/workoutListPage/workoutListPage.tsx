import TitleHeader from "../Shared/titleHeader";
import Dropdown from "react-dropdown";
import noImage from "../assets/noImage.png";
import "react-dropdown/style.css";
import Workout from "./workout";
// import { useState } from "react";
const WorkoutListPage = () => {
  const options = ["Upperbody", "Chest", "Upper Chest", "Cardio"];
  // const [adding, setAdding] = useState(false);
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
        <h2 className="mt-2 mb-2 col-auto">»</h2>
        <Dropdown
          className=" mt-2 mb-2 col-12 col-md-3 col-lg-2" // need to be bigger on bigger screen
          options={options}
          value={options[1]}
          placeholder="Select an option"
        ></Dropdown>
        <h2 className="mt-2 mb-2 col-auto">»</h2>
        <Dropdown
          className="mt-2 mb-2  col-12 col-md-3 col-lg-2" // need to be bigger on bigger screen
          options={options}
          value={options[2]}
          placeholder="Select an option"
        ></Dropdown>

        <h2 className="mt-2 mb-2 col-auto">»</h2>
        <Dropdown
          className="mt-2 mb-2 col-12 col-md-3 col-lg-2" // need to be bigger on bigger screen
          options={options}
          value={options[2]}
          placeholder="Select an option"
        ></Dropdown>

        {/* {adding ? (
          <div
            className="col-12 row mt-2 justify-content-center"
            style={{ gap: "10px" }}
          >
            <div className="col-12 d-flex justify-content-center">
              <form>
                <div className="form-group mb-2">
                  <input
                    type="email"
                    placeholder="Workout Name"
                    className="form-control"
                    id="email"
                  />
                </div>
              </form>
            </div>

            <button className="btn btn-outline-secondary col-4 col-sm-4 col-md-3 col-lg-2">
              Update my profile picture
            </button>

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
              className="btn btn-primary col-4 col-sm-4 col-md-3 col-lg-2"
            >
              Add Workout
            </button>
          </div>
        )} */}
      </div>

      <div className="mt-4 row d-flex flex-row">
        <Workout
          description="Lower Back"
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
          image="https://github.com/chaosbastler/opentraining-exercises/blob/master/Biceps-curl-reverse-1.png?raw=true"
          title="Lat Pull Down"
        ></Workout>
        <Workout
          description="Lower Back"
          image="https://github.com/chaosbastler/opentraining-exercises/blob/master/Cross-body-crunch-1.png?raw=true"
          title="Lat Pull Down"
        ></Workout>
        <Workout
          description="Lower Back"
          image="https://github.com/chaosbastler/opentraining-exercises/blob/master/Dumbbell-decline-flys-2.png?raw=true"
          title="Lat Pull Down"
        ></Workout>
        <Workout
          description="Lower Back"
          image="https://github.com/chaosbastler/opentraining-exercises/blob/master/Biceps-curl-reverse-1.png?raw=true"
          title="Lat Pull Down"
        ></Workout>
      </div>
    </div>
  );
};
export default WorkoutListPage;
