import React from "react";

interface EntryProps {
  header: string;
  text: string[];
  src?: string;
  alt?: string;
  video?: string;
  picOnRight: boolean;
}

const Entry: React.FC<EntryProps> = ({
  header,
  text,
  src,
  alt,
  video,
  picOnRight,
}) => {
  return (
    <div className="row mb-4 align-text-center">
      {picOnRight ? (
        <>
          <div className="col-12 col-sm-6">
            {video ? (
              <video width="600" height="360" controls>
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <img src={src} alt={alt} className="img-fluid" />
            )}
          </div>
          <div className="col-12 col-sm-6">
            <h3>{header}</h3>
            {text.map((paragraph, index) => (
              <p style={{ fontSize: "20px" }} key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="col-12 col-sm-6 text-right">
            <h3>{header}</h3>
            {text.map((paragraph, index) => (
              <p style={{ fontSize: "20px" }} key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="col-12 col-sm-6">
            {video ? (
              <video width="600" height="360" controls>
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <img src={src} alt={alt} className="img-fluid" />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Entry;
