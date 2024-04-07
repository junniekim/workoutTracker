import React from "react";

type WorkoutProps = {
  image: string;
  description: string;
  title: string;
  custom?: boolean;
  editing?: boolean;
};

const Workout: React.FC<WorkoutProps> = ({
  image,
  description,
  title,
  custom,
  editing,
}) => {
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
              <button className="text-button" style={{ color: "red" }}>
                <h4>X</h4>
              </button>
              <div className="form-group mb-2" style={{ margin: "0 10px" }}>
                <input
                  type="text"
                  placeholder="Workout Title"
                  className="form-control"
                  id="editTitle"
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
              <input
                type="text"
                placeholder="Target Dropdown"
                className="form-control"
                id="editTarget"
              />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <h3>{title}</h3>
            </div>
            <img
              src={image}
              className="img-fluid"
              style={{ maxHeight: "200px", minHeight: "200px" }}
              alt={title}
            />
            <h3 className="grey">{description}</h3>
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
