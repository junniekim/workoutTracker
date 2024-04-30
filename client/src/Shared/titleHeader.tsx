import React from "react";

interface TitleHeaderProps {
  title: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ title }) => {
  return (
    <div className="row">
      <h1
        className="text-center mt-3 mb-4 col-12"
        style={{ fontWeight: "bold" }}
      >
        {title}
      </h1>
    </div>
  );
};

export default TitleHeader;
