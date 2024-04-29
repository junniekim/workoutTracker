import TitleHeader from "../Shared/titleHeader";
import "react-dropdown/style.css";
import Workout from "./workout";
import { useEffect, useState } from "react";
import { useUser } from "../SesssionManager/session";
import Select from "react-select";
import Swal from "sweetalert2";
const WorkoutListPage = () => {
  function arrayContainsArray<T>(
    arrayOfArrays: T[][],
    targetArray: T[]
  ): boolean {
    return arrayOfArrays.some((array) =>
      array.every((value, index) => value === targetArray[index])
    );
  }

  //STATES
  //current user data
  const { setUser, userData } = useUser();
  //valid set of options for setting target
  const [validTarget, setValidTarget] = useState<any[]>([]);
  //valid set of paths for each target
  const [validTargetPath, setValidTargetPath] = useState<any>([]);
  //workout List available
  const [workoutList, setWorkoutList] = useState<
    Array<{
      dateentered?: string;
      workout_name?: string;
      workout_picture?: string;
      custom?: boolean;
      target?: string[];
    }>
  >([]);
  //custom workout list available
  const [customWorkoutList, setCustomWorkoutList] = useState<
    Array<{
      dateentered?: string;
      workout_name: string;
      workout_picture?: string;
      custom?: boolean;
      target?: string[];
    }>
  >([]);
  //Save custom list in case user discard
  const [temporarySaving, setTemporarySaving] = useState<any[]>([]);

  //States that controls view mode
  const [adding, setAdding] = useState(false);
  const [customOnly, setCustomOnly] = useState(false);
  const [editing, setEditing] = useState(false);

  // 4 states for path selection
  const [path1, setPath1] = useState<any>("");
  const [path2, setPath2] = useState<any>("");
  const [path3, setPath3] = useState<any>("");
  const [path4, setPath4] = useState<any>("");

  //Store new name for new workout
  const [newWorkoutName, setNewWorkoutName] = useState<string>("");

  //fetch all non custom workout data
  const query = `http://localhost:3000/workout`;
  if (workoutList.length === 0) {
    fetch(query)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //Filter array so that each element has a unique path to the target
        let distinctWorkouts = data.filter(
          (workout: any, index: number, array: any[]) => {
            return !array
              .slice(0, index)
              .some(
                (prevWorkout: any) =>
                  prevWorkout.target.join() === workout.target.join()
              );
          }
        );
        //Set valid and unique path
        let distinctWorkoutPath = distinctWorkouts.map(
          (workout: any, index: number) => {
            return workout.target;
          }
        );
        setValidTargetPath(distinctWorkoutPath);
        //Set unique and valid target options
        let distinctWorkoutTargets = distinctWorkouts.map((workout: any) => {
          return {
            value: workout.target,
            label: workout.target[workout.target.length - 1],
          };
        });
        setValidTarget(distinctWorkoutTargets);
        //Filter out custom workouts
        let filteredWorkouts = data.filter(
          (workout: any) => workout.custom === false
        );
        setWorkoutList(filteredWorkouts);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //get custom workout list for the user
  useEffect(() => {
    const customQuery = `http://localhost:3000/customWorkout/${userData?._id}`;
    if (customWorkoutList.length === 0) {
      fetch(customQuery)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setCustomWorkoutList(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  //Set options for target path
  let option1: any[] = [];
  let option2: any[] = [];
  let option3: any[] = [];
  let option4: any[] = [];

  validTargetPath.forEach((path: any, index: number) => {
    if (path[0] && !option1.some((option: any) => option.value === path[0])) {
      option1.push({ value: path[0], label: path[0] });
    }
    if (path[1] && !option2.some((option: any) => option.value === path[1])) {
      option2.push({ value: path[1], label: path[1], previous: path[0] });
    }
    if (path[2] && !option3.some((option: any) => option.value === path[2])) {
      option3.push({ value: path[2], label: path[2], previous: path[1] });
    }
    if (path[3] && !option4.some((option: any) => option.value === path[3])) {
      option4.push({ value: path[3], label: path[3], previous: path[2] });
    }
  });

  const discardWorkoutChange = () => {
    setCustomWorkoutList(temporarySaving);
  };
  const saveWorkout = () => {
    if (editing) {
      //Input Validation
      if (
        customWorkoutList?.some(
          (workout: any) =>
            workout.workout_name === undefined ||
            workout.workout_name === null ||
            workout.workout_name === ""
        )
      ) {
        Swal.fire({
          icon: "error",
          title: "Please fill in all workout title",
        });
        return;
      }

      //Save change to custom workout to Database
      customWorkoutList.forEach((workout: any) => {
        const query = `http://localhost:3000/updateCustomWorkout/${workout._id}`;
        fetch(query, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(workout),
        })
          .then((response) => response.json())
          .then((data) => {})
          .catch((error) => {
            console.error("Error:", error);
          });
      });
      //Save custom workouts locally
      const customWorkoutNames = customWorkoutList.map(
        (workout) => workout.workout_name
      );
      userData!.customWorkout = customWorkoutNames;
      setUser(userData);

      //Save custom workout to database
      const query = `http://localhost:3000/update/${userData?._id}`;
      fetch(query, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {})
        .catch((error) => {
          console.error("Error:", error);
        });
      setEditing(false);
      //Edited: post to Workout
      //Deketed: put to User.
    } else if (adding) {
      //Input Validation
      let currentTargetPath: string[] = [];
      if (path1) currentTargetPath.push(path1.value);
      if (path2) currentTargetPath.push(path2.value);
      if (path3) currentTargetPath.push(path3.value);
      if (path4) currentTargetPath.push(path4.value);
      if (
        !newWorkoutName ||
        newWorkoutName.trim() === "" ||
        !arrayContainsArray(validTargetPath, currentTargetPath)
      ) {
        Swal.fire({
          icon: "error",
          title: "Please check your input",
        });
        return;
      }
      if (
        customWorkoutList.some(
          (workout) => workout.workout_name === newWorkoutName
        ) ||
        workoutList.some((workout) => workout.workout_name === newWorkoutName)
      ) {
        Swal.fire({
          icon: "error",
          title: "Workout name already exists",
        });
        return;
      }
      // Create a new WOrkout
      fetch("http://localhost:3000/newCustomWorkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workout_name: newWorkoutName,
          custom: true,
          target: currentTargetPath,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          //Fetch its ID, and update customWorkout List
          setCustomWorkoutList([...customWorkoutList, data]);
          const updatedCustomWorkout = [...userData!.customWorkout, data._id];
          userData!.customWorkout = updatedCustomWorkout;
          setUser(userData);
          return fetch(`http://localhost:3000/update/${userData?._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              console.log(userData);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log("User Data (1)", userData);

      clearPath();
      setAdding(false);
    }
  };

  //Handle drop down change
  useEffect(() => {
    setPath2("");
    setPath3("");
    setPath4("");
  }, [path1]);
  useEffect(() => {
    setPath3("");
    setPath4("");
  }, [path2]);
  useEffect(() => {
    setPath4("");
  }, [path3]);
  const clearPath = () => {
    setPath1("");
    setPath2("");
    setPath3("");
    setPath4("");
  };
  const cancelNewWorkout = () => {
    clearPath();
    setNewWorkoutName("");
    setAdding(false);
  };

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
        {adding && (
          <h4 className="text-center">Set the target of your custom workout</h4>
        )}
        <Select
          className="mt-2 mb-2  col-12 col-md-3 col-lg-2" // need to be bigger on bigger screen
          options={option1}
          placeholder="Select an option"
          value={path1}
          onChange={(selectedOption) => setPath1(selectedOption)}
        ></Select>

        {path1 &&
          option2.filter((option) => option.previous === path1?.value).length >
            0 && (
            <>
              <h2 className="mt-2 mb-2 col-auto">»</h2>
              <Select
                className=" mt-2 mb-2 col-12 col-md-3 col-lg-2" // need to be bigger on bigger screen
                options={option2.filter(
                  (option) => option.previous === path1?.value
                )}
                placeholder="Select an option"
                value={path2}
                onChange={(selectedOption) => setPath2(selectedOption)}
              ></Select>
            </>
          )}

        {path2 &&
          option3.filter((option) => option.previous === path2?.value).length >
            0 && (
            <>
              <h2 className="mt-2 mb-2 col-auto">»</h2>
              <Select
                className=" mt-2 mb-2 col-12 col-md-3 col-lg-2" // need to be bigger on bigger screen
                options={option3.filter(
                  (option) => option.previous === path2?.value
                )}
                placeholder="Select an option"
                value={path3}
                onChange={(selectedOption) => setPath3(selectedOption)}
              ></Select>
            </>
          )}

        {path3 &&
          option4.filter((option) => option.previous === path3?.value).length >
            0 && (
            <>
              <h2 className="mt-2 mb-2 col-auto">»</h2>
              <Select
                className=" mt-2 mb-2 col-12 col-md-3 col-lg-2" // need to be bigger on bigger screen
                options={option4.filter(
                  (option) => option.previous === path3?.value
                )}
                placeholder="Select an option"
                value={path4}
                onChange={(selectedOption) => setPath4(selectedOption)}
              ></Select>
            </>
          )}

        <button
          className=" mt-2 mb-2 col-12 col-md-3 col-lg-2 btn btn-danger" // need to be bigger on bigger screen
          style={{ marginLeft: "20px" }}
          disabled={path1 === ""}
          onClick={() => clearPath()}
        >
          Clear
        </button>

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
                    onChange={(e) => setNewWorkoutName(e.target.value)}
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
              onClick={() => saveWorkout()}
              className="btn btn-success col-4 col-sm-4 col-md-3 col-lg-2"
            >
              Save Workout
            </button>
            <button
              onClick={() => cancelNewWorkout()}
              className="btn btn-secondary col-4 col-sm-4 col-md-3 col-lg-2"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="col-12 row mt-2 justify-content-center">
            {!editing && (
              <button
                onClick={() => {
                  clearPath();
                  setAdding(true);
                }}
                className="btn btn-outline-primary col-4 col-sm-4 col-md-3 col-lg-2"
              >
                Add Custom Workout
              </button>
            )}
          </div>
        )}
      </div>

      <div className="mt-3 row d-flex">
        <div
          className="mt-1 col-12 col-md-6 d-flex justify-content-center"
          style={{ gap: "10px" }}
        >
          <input
            type="checkbox"
            id="customOnly"
            checked={customOnly || editing}
            disabled={editing}
            onChange={() => setCustomOnly(!customOnly)}
          />
          <h5 style={{ marginTop: "0.5rem" }}>Only Show Custom Workouts</h5>
        </div>
        {!adding && (
          <div className="col-12 col-md-6  d-flex justify-content-center">
            {editing ? (
              <div className=" d-flex " style={{ gap: "10px" }}>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    saveWorkout();
                  }}
                >
                  Save Changes
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    discardWorkoutChange();
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
                  setTemporarySaving(customWorkoutList);
                  setEditing(!editing);
                }}
              >
                Edit Custom Workout
              </button>
            )}
          </div>
        )}
      </div>

      <div className="mt-4 row d-flex flex-row">
        {!customOnly &&
          !editing &&
          workoutList
            .filter((workout: any) => {
              if (path4) return workout.target.includes(path4.value);
              if (path3) return workout.target.includes(path3.value);
              if (path2) return workout.target.includes(path2.value);
              if (path1) return workout.target.includes(path1.value);
              return true; // if none of the paths are defined, don't filter out any workouts
            })
            .map((workout: any, index: number) => (
              <Workout
                key={index}
                description={workout.target[workout.target.length - 1]}
                custom={workout.custom}
                editing={editing}
                image={workout.workout_picture}
                title={workout.workout_name}
              ></Workout>
            ))}
        {customWorkoutList
          .filter((workout: any) => {
            if (path4) return workout.target.includes(path4.value);
            if (path3) return workout.target.includes(path3.value);
            if (path2) return workout.target.includes(path2.value);
            if (path1) return workout.target.includes(path1.value);
            return true; // if none of the paths are defined, don't filter out any workouts
          })
          .map((workout: any, index: number) => (
            <Workout
              key={index}
              index={index}
              dataChange={setCustomWorkoutList}
              validTarget={validTarget}
              description={workout.target[workout.target.length - 1]}
              custom={workout.custom}
              editing={editing}
              image={workout.workout_picture}
              title={workout.workout_name}
            ></Workout>
          ))}
      </div>
    </div>
  );
};
export default WorkoutListPage;
