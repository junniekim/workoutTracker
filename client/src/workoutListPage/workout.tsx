import React from "react";
import Select from "react-select";
type WorkoutProps = {
  image: string;
  description: string;
  title: string;
  custom?: boolean;
  editing?: boolean;
  validTarget?: any[];
  index?: number;
  dataChange?: (data: any) => void;
};

const Workout: React.FC<WorkoutProps> = ({
  image,
  description,
  title,
  custom,
  index,
  editing,
  validTarget,
  dataChange,
}) => {
  const deleteWorkout = () => {
    dataChange &&
      dataChange((prevState: any) => {
        // Filter out the element at the specified index
        const newState: any[] = prevState.filter(
          (_: any, i: number) => i !== index
        );
        return newState;
      });
  };
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div
        className="mb-4 pt-2 text-center"
        style={{
          borderRadius: "10px",
          borderStyle: "solid",
          borderColor: "#DCDCDC",
          borderWidth: "1px",
        }}
      >
        {custom && editing ? (
          <div>
            <div>
              <button
                className="text-button"
                style={{ color: "red" }}
                onClick={() => deleteWorkout()}
              >
                <h4>X</h4>
              </button>
              <div className="form-group mb-2" style={{ margin: "0 10px" }}>
                <input
                  type="text"
                  className="form-control"
                  id="editTitle"
                  value={title}
                  onChange={(e) =>
                    dataChange &&
                    dataChange((prevState: any) => {
                      const newState = [...prevState];
                      const indexToUpdate: number | undefined = index;
                      newState[indexToUpdate!] = {
                        ...newState[indexToUpdate!],
                        workout_name: e.target.value,
                      };
                      return newState;
                    })
                  }
                />
              </div>
            </div>
            <button style={{ background: "transparent", border: "none" }}>
              <img
                src={image}
                className="img-fluid"
                style={{ maxHeight: "200px", minHeight: "200px" }}
                alt={title}
              />
            </button>
            <div className="form-group mb-2 mt-2" style={{ margin: "0 10px" }}>
              <Select
                options={validTarget}
                value={{
                  value: validTarget?.find(
                    (target) =>
                      target.value[target.value.length - 1] === description
                  ),
                  label: description,
                }}
                onChange={(selectedOption) =>
                  dataChange &&
                  dataChange((prevState: any) => {
                    const newState = [...prevState];
                    const indexToUpdate: number | undefined = index;
                    newState[indexToUpdate!] = {
                      ...newState[indexToUpdate!],
                      target: selectedOption?.value,
                    };
                    return newState;
                  })
                }
              />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h5>{title}</h5>
            </div>
            <img
              src={image}
              className="img-fluid"
              style={{ maxHeight: "200px", minHeight: "200px" }}
              alt={title}
            />
            <h5 className="grey">{description}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workout;

// {
//   custom && editing && (
//     <div
//       className="mb-4 pt-2 text-center"
//       style={{
//         borderRadius: "10px",
//         borderStyle: "solid",
//         borderColor: "#DCDCDC",
//         borderWidth: "1px",
//       }}
//     >
//       <div>
//         <button className="text-button" style={{ color: "red" }}>
//           <h4>X</h4>
//         </button>
//         <div className="form-group mb-2">
//           <input
//             type="text"
//             placeholder="Workout Title"
//             className="form-control"
//             id="editTitle"
//           />
//         </div>
//       </div>
//       <button>
//         <img
//           src={image}
//           className="img-fluid"
//           style={{ maxHeight: "200px", minHeight: "200px" }}
//           alt={title}
//         />
//       </button>
//       <div className="form-group mb-2">
//         <input
//           type="text"
//           placeholder="Target Dropdown"
//           className="form-control"
//           id="editTarget"
//         />
//       </div>
//     </div>
//   );
// }
