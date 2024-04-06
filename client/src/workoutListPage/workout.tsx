import React from "react";

type WorkoutProps = {
  image: string;
  description: string;
  title: string;
};

const Workout: React.FC<WorkoutProps> = ({ image, description, title }) => {
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
        <h3>{title}</h3>
        <img
          src={image}
          className="img-fluid"
          style={{ maxHeight: "200px", minHeight: "200px" }}
          alt={title}
        />
        <h3 className="grey">{description}</h3>
      </div>
    </div>
  );
};

export default Workout;
