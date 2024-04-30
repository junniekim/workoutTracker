import TitleHeader from "../Shared/titleHeader";
import { useState } from "react";
import Calendar from "react-calendar";
import Swal from "sweetalert2";
// import AddWorkoutForm from "./addWorkoutForm";
import WorkoutRecord from "./workoutRecord";
import WorkoutJournal from "./workoutJournal";
import { useUser } from "../SesssionManager/session";
import "react-calendar/dist/Calendar.css";
import "./workoutLogPage.css";

const WorkoutLogPage = () => {
  //helper
  const tileClassName = ({ date }: { date: Date }): string | null => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const tileYear = date.getFullYear();
    const tileMonth = date.getMonth();
    if (tileYear === currentYear && tileMonth === currentMonth) {
      return "custom-tile-highlight";
    }
    return null;
  };
  const dateFormatter = (date: any) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  const addWorkoutHandler = (determine: boolean) => {
    let det = determine;

    setCurrentDayWorkout((prevState?: any) => ({
      ...(prevState || {}),
      workout_list: [...(prevState?.workout_list || []), { cardio: det }],
    }));
  };

  const { userData, setUser } = useUser();
  //workout at selected date.
  const [currentDayWorkout, setCurrentDayWorkout] = useState<any>(null);
  //weight at the selected date
  const [currentDayWeight, setCurrentDayWeight] = useState<any>(null);
  //current mode
  const [editing, setEditing] = useState(false);
  //selected date
  const [selectedDate, setSelectedDate] = useState<String>(
    dateFormatter(new Date())
  );

  //when date changes
  const onChange = (date: any) => {
    setSelectedDate(dateFormatter(date));
    //update currentDayWorkout and currentDayWeight
    const foundWorkout = userData?.workoutHistory.find((element: any) => {
      return element.date.substring(0, 10) === dateFormatter(date);
    });

    setCurrentDayWorkout(foundWorkout || null);
    const foundWeight = userData?.bodyweight_history.find((element: any) => {
      return element.date.substring(0, 10) === dateFormatter(date);
    });
    setCurrentDayWeight(foundWeight || null);
  };

  const saveHandler = (): void => {
    if (editing) {
      if (
        currentDayWorkout?.workout_list.some(
          (workout: any) =>
            workout.workout === undefined || workout.workout === null
        )
      ) {
        Swal.fire({
          icon: "error",
          title: "Please fill in all workout title",
        });
        return;
      }
      //see if there is any data entered
      if (currentDayWorkout !== null) {
        //see if the data already exists
        // If no, create, if yes, update
        if (!currentDayWorkout.date) {
          userData!.workoutHistory.push({
            date: String(selectedDate),
            daily_picture: currentDayWorkout.daily_picture ?? "",
            journal: currentDayWorkout.journal ?? "",
            rate: currentDayWorkout.rate ?? "",
            workout_list: currentDayWorkout.workout_list ?? [],
          });
        } else {
          let workoutHistoryIndex: any = userData?.workoutHistory.findIndex(
            (element: any) => {
              return element.date.substring(0, 10) === selectedDate;
            }
          );
          if (workoutHistoryIndex !== -1) {
            userData!.workoutHistory[workoutHistoryIndex] = currentDayWorkout;
          }
        }
      }
      //repeat for body weight
      if (currentDayWeight !== null) {
        if (!currentDayWeight.date) {
          userData!.bodyweight_history.push({
            weight: currentDayWeight.weight,
            date: String(selectedDate),
          });
        } else {
          let weightHistoryIndex: any = userData?.bodyweight_history.findIndex(
            (element: any) => {
              return element.date.substring(0, 10) === selectedDate;
            }
          );
          if (weightHistoryIndex !== -1) {
            userData!.bodyweight_history[weightHistoryIndex] = currentDayWeight;
          }
        }
      }
      setUser(userData);
      //update database
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
    }
    setEditing(!editing);
  };

  return (
    <div>
      <TitleHeader title="💪My Tracking"></TitleHeader>
      <div className="d-flex justify-content-center">
        {!editing && (
          <Calendar
            defaultValue={(() => {
              const date = new Date(selectedDate.toString());
              date.setDate(date.getDate() + 1);
              return date;
            })()}
            maxDetail="month"
            onChange={onChange}
            maxDate={new Date()}
            tileClassName={tileClassName}
          />
        )}
      </div>
      <div className="col-12 text-center mt-3">
        <button className="btn mb-3 btn-primary" onClick={() => saveHandler()}>
          {editing
            ? `Save Your Journey on ${selectedDate}`
            : `Mark Your Journey on ${selectedDate}`}
        </button>
      </div>
      <div
        className="row"
        style={{ margin: "0.5px", gap: "5px", justifyContent: "center" }}
      >
        <div className="col-12 col-lg-6 text-center">
          <h4>Workout Tracker</h4>
          {/* No workout given, then display no content */}
          {currentDayWorkout?.workout_list.length > 0 ? (
            <table className="mb-3" style={{ width: "100%" }}>
              <colgroup>
                <col style={{ width: "40%" }}></col>
                <col style={{ width: "20%" }}></col>
                <col style={{ width: "20%" }}></col>
                <col style={{ width: "20%" }}></col>
                {editing && <col style={{ width: "5%" }}></col>}
              </colgroup>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Rep</th>
                  <th>Set</th>
                  <th>Weight</th>
                  {editing && <th></th>}
                </tr>
              </thead>
              <tbody>
                {currentDayWorkout?.workout_list?.map(
                  (workout: any, index: number) => (
                    <WorkoutRecord
                      key={Math.random().toFixed(8)}
                      cardio={workout.cardio}
                      title={workout.workout}
                      repetition={workout.rep}
                      weight={workout.weight}
                      note={workout.note}
                      set={workout.set}
                      minute={workout.minute}
                      actionId={workout.actionId}
                      editing={editing}
                      index={index}
                      dataChange={setCurrentDayWorkout}
                    ></WorkoutRecord>
                  )
                )}
              </tbody>
            </table>
          ) : (
            <div>No content</div>
          )}

          {editing ? (
            <div
              className="d-flex justify-content-center"
              style={{ gap: "10px" }}
            >
              <button
                className="mt-2 btn btn-outline-primary"
                onClick={() => addWorkoutHandler(false)}
              >
                Add Weight Training
              </button>
              <button
                className="mt-2 btn btn-outline-primary"
                onClick={() => addWorkoutHandler(true)}
              >
                Add Cardio Training
              </button>
            </div>
          ) : null}
        </div>
        <WorkoutJournal
          dataChange={setCurrentDayWorkout}
          weightChange={setCurrentDayWeight}
          rate={currentDayWorkout?.rate}
          picture={currentDayWorkout?.daily_picture}
          weight={currentDayWeight?.weight}
          journal={currentDayWorkout?.journal}
          editing={editing}
        ></WorkoutJournal>
      </div>
    </div>
  );
};
export default WorkoutLogPage;
