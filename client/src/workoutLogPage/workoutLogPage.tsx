import TitleHeader from "../Shared/titleHeader";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./workoutLogPage.css";
import creator from "../assets/creator.png";
import AddWorkoutForm from "./addWorkoutForm";
import WorkoutRecord from "./workoutRecord";
import WorkoutJournal from "./workoutJournal";
import { UserData, useUser } from "../SesssionManager/session";
const WorkoutLogPage = () => {
  const { userData } = useUser();
  const dateFormatter = (date: any) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };
  const [selectedDate, setSelectedDate] = useState<String>(
    dateFormatter(new Date())
  );
  const [temporaryChanges, setTemporaryChanges] = useState<UserData | null>(
    userData
  );
  const [currentDayWorkout, setCurrentDayWorkout] = useState<any>(null);
  const [currentDayWeight, setCurrentDayWeight] = useState(0);
  const [editing, setEditing] = useState(false);
  const onChange = (date: any) => {
    setSelectedDate(dateFormatter(date));
    userData?.workoutHistory.find((element: any) => {
      if (element.date.substring(0, 10) === dateFormatter(date)) {
        setCurrentDayWorkout(element);
      } else {
        setCurrentDayWorkout(null);
      }
    });
    userData?.bodyweight_history.find((element: any) => {
      if (element.date.substring(0, 10) === dateFormatter(date)) {
        setCurrentDayWeight(element.weight);
      } else {
        setCurrentDayWeight(0);
      }
    });
  };
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
  return (
    <div>
      <TitleHeader title="💪My Tracking"></TitleHeader>
      <div className="d-flex justify-content-center">
        <Calendar
          maxDetail="month"
          onChange={onChange}
          maxDate={new Date()}
          tileClassName={tileClassName}
        />
      </div>
      <div className="col-12 text-center mt-3">
        <button
          className="btn mb-3 btn-primary"
          onClick={() => setEditing(!editing)}
        >
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
          <table className="mb-3" style={{ width: "100%" }}>
            <colgroup>
              <col style={{ width: "40%" }}></col>
              <col style={{ width: "25%" }}></col>
              <col style={{ width: "5%" }}></col>
              <col style={{ width: "20%" }}></col>
              <col style={{ width: "5%" }}></col>
            </colgroup>
            <thead>
              <tr>
                <th>Title</th>
                <th>Rep/Sets</th>
                <th>Weight</th>
                <th>Note</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentDayWorkout?.workout_list?.map((workout: any) => (
                <WorkoutRecord
                  key={workout._id}
                  title={workout.workout}
                  repetition={workout.rep}
                  weight={workout.weight}
                  note={workout.note}
                  actionId={workout.actionId}
                ></WorkoutRecord>
              ))}
            </tbody>
          </table>
          {editing ? (
            <button className="btn btn-outline-primary">Add Workout</button>
          ) : null}
        </div>
        <WorkoutJournal
          dataChange={setTemporaryChanges}
          rate={currentDayWorkout?.rate}
          picture={currentDayWorkout?.daily_picture}
          weight={currentDayWeight}
          journal={currentDayWorkout?.journal}
          editing={editing}
        ></WorkoutJournal>
      </div>
    </div>
  );
};
export default WorkoutLogPage;
