import { useState, useEffect } from "react";
import Select from "react-select";
import { useUser } from "../SesssionManager/session";

interface WorkoutRecordProps {
  title: string;
  repetition?: string;
  weight?: string;
  note?: string;
  actionId?: number;
  minute?: number;
  editing: boolean;
  set: number;
  index: number;
  cardio: boolean;
  dataChange?: (data: any) => void;
}

const WorkoutRecord: React.FC<WorkoutRecordProps> = ({
  title,
  repetition,
  weight,
  note,
  actionId,
  minute,
  editing,
  index,
  cardio,
  set,
  dataChange,
}) => {
  const { userData } = useUser();
  const deleteWorkout = () => {
    dataChange &&
      dataChange((prevState: any) => ({
        ...prevState,
        workout_list: prevState.workout_list.filter(
          (workout: any, i: number) => i !== index
        ),
      }));
  };
  const [cardioWorkoutList, setCardioWorkoutList] = useState<any[]>([]);
  const [weightWorkoutList, setWeightWorkoutList] = useState<any[]>([]);
  let cardioWorkoutListArr: any = [];
  let weightWorkoutListArr: any = [];
  //////////////////////////////////////////////////////////////////////////////////
  const query = `http://localhost:3000/workout`;
  useEffect(() => {
    cardioWorkoutListArr = [];
    weightWorkoutListArr = [];
    if (weightWorkoutList.length === 0 || cardioWorkoutList.length === 0) {
      fetch(query)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data.filter((workout: any) => {
            if (workout.custom === false) {
              workout.target[0] === "Cardio"
                ? cardioWorkoutListArr.push(workout.workout_name)
                : weightWorkoutListArr.push(workout.workout_name);
            } else {
              if (
                userData!.customWorkout.includes(workout._id) ||
                userData!.customWorkout.includes(workout.workout_name)
              ) {
                workout.target[0] === "Cardio"
                  ? cardioWorkoutListArr.push(workout.workout_name)
                  : weightWorkoutListArr.push(workout.workout_name);
              }
            }
          });
          console.log(cardioWorkoutListArr, weightWorkoutListArr);
          setCardioWorkoutList(cardioWorkoutListArr);
          setWeightWorkoutList(weightWorkoutListArr);
        })
        .catch((error) => {});
    }
  }, []);

  return (
    <>
      {editing ? (
        <tr>
          <td>
            {cardio ? (
              <select
                name="workouts"
                id="workouts"
                className="form-control"
                value={title || ""}
                onChange={(e) =>
                  dataChange &&
                  dataChange((prevState: any) => ({
                    ...prevState,
                    workout_list: prevState.workout_list.map(
                      (item: any, i: number) =>
                        i === index
                          ? { ...item, workout: e.target.value }
                          : item
                    ),
                  }))
                }
              >
                <option value=""></option>
                {cardioWorkoutList.map((workout: any) => (
                  <option key={Math.random().toFixed(8)} value={workout}>
                    {workout}
                  </option>
                ))}
              </select>
            ) : (
              <select
                value={title || ""}
                name="workouts"
                id="workouts"
                className="form-control"
                onChange={(e) =>
                  dataChange &&
                  dataChange((prevState: any) => ({
                    ...prevState,
                    workout_list: prevState.workout_list.map(
                      (item: any, i: number) =>
                        i === index
                          ? { ...item, workout: e.target.value }
                          : item
                    ),
                  }))
                }
              >
                <option value=""></option>
                {weightWorkoutList.map((workout: any) => (
                  <option key={Math.random().toFixed(8)} value={workout}>
                    {workout}
                  </option>
                ))}
              </select>
            )}
          </td>
          {cardio ? (
            <td colSpan={3}>
              <input
                type="number"
                placeholder="In Minute..."
                className="form-control"
                defaultValue={minute || ""}
                id="editMinute"
                onBlur={(e) =>
                  dataChange &&
                  dataChange((prevState: any) => ({
                    ...prevState,
                    workout_list: prevState.workout_list.map(
                      (item: any, i: number) =>
                        i === index
                          ? { ...item, minute: Number(e.target.value) }
                          : item
                    ),
                  }))
                }
              />
            </td>
          ) : (
            <>
              <td>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={repetition || ""}
                  id="editRep"
                  onBlur={(e) =>
                    dataChange &&
                    dataChange((prevState: any) => ({
                      ...prevState,
                      workout_list: prevState.workout_list.map(
                        (item: any, i: number) =>
                          i === index
                            ? { ...item, rep: Number(e.target.value) }
                            : item
                      ),
                    }))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={set || ""}
                  id="editSet"
                  onBlur={(e) =>
                    dataChange &&
                    dataChange((prevState: any) => ({
                      ...prevState,
                      workout_list: prevState.workout_list.map(
                        (item: any, i: number) =>
                          i === index
                            ? { ...item, set: Number(e.target.value) }
                            : item
                      ),
                    }))
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  defaultValue={weight || ""}
                  id="editWeight"
                  onBlur={(e) =>
                    dataChange &&
                    dataChange((prevState: any) => ({
                      ...prevState,
                      workout_list: prevState.workout_list.map(
                        (item: any, i: number) =>
                          i === index
                            ? { ...item, weight: Number(e.target.value) }
                            : item
                      ),
                    }))
                  }
                />
              </td>
            </>
          )}

          <td>
            <button
              className="text-button-delete"
              onClick={() => deleteWorkout()}
            >
              X
            </button>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{title}</td>
          {cardio ? (
            <>
              <td colSpan={3}>
                {minute} {minute && "Minutes"}
              </td>
            </>
          ) : (
            <>
              <td>{repetition}</td>
              <td>{set}</td>
              <td>{weight}</td>
            </>
          )}
        </tr>
      )}
    </>
  );
};

export default WorkoutRecord;
