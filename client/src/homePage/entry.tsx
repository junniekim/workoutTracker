import React from "react";

interface EntryProps {
  header: string;
  text: string[];
  src?: string;
  alt?: string;
  video?: string;
}

const Entry: React.FC<EntryProps> = ({ header, text, src, alt, video }) => {
  return (
    <div className="row mb-4 align-text-center">
      <div className="col-md-6 text-center">
        <h3>{header}</h3>
        {text.map((paragraph, index) => (
          <p style={{ fontSize: "20px" }} key={index}>
            {paragraph}
          </p>
        ))}
      </div>
      <div
        className="col-12 col-md-6"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {video ? (
          <video width="100%" height="auto" controls>
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img src={src} alt={alt} className="img-fluid" />
        )}
      </div>
    </div>
  );
};

export default Entry;
