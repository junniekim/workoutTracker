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
  // console.log("workout record title:", title);
  // console.log("workout record repetition:", repetition);
  // console.log("workout record weight:", weight);
  // console.log("workout record note:", note);
  // console.log("workout record actionId:", actionId);
  // console.log("workout record minute:", minute);
  // console.log("workout record editing:", editing);
  // console.log("workout record index:", index);
  // console.log("workout record cardio:", cardio);
  // console.log("workout record set:", set);
  // console.log("workout record dataChange:", dataChange);
  return (
    <>
      {editing ? (
        <tr>
          <td>{title}</td>
          {cardio ? (
            <td colSpan={3}>
              <input
                type="number"
                placeholder="In Minute..."
                className="form-control"
                value={minute || ""}
                id="editMinute"
                onChange={(e) =>
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
                  value={repetition || ""}
                  id="editRep"
                  onChange={(e) =>
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
                  value={set || ""}
                  id="editSet"
                  onChange={(e) =>
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
                  value={weight || ""}
                  id="editWeight"
                  onChange={(e) =>
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

          <td>{note}</td>
          <td>
            <button className="text-button-delete">X</button>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{title}</td>
          {cardio ? (
            <>
              <td colSpan={3}>{minute} Minutes</td>
            </>
          ) : (
            <>
              <td>{repetition}</td>
              <td>{set}</td>
              <td>{weight}</td>
            </>
          )}
          <td>{note}</td>
        </tr>
      )}
    </>
  );
};

export default WorkoutRecord;
