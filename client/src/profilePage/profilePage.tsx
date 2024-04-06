import TitleHeader from "../Shared/titleHeader";
import creator from "../assets/creator.png"; // this will be replaced by image from database
import { useState } from "react";
import UserInformation from "../authenticatePage/userInformation";
const ProfilePage = () => {
  const [mode, setMode] = useState("view");
  console.log("mode", mode);
  return (
    <div className="row">
      <TitleHeader title="🌟My Profile"></TitleHeader>
      <div className="col-12 col-md-6 d-flex flex-column align-items-center">
        <img
          src={creator}
          alt="profile"
          style={{ borderRadius: "50%", height: "350px", width: "350px" }}
        />
        {mode === "edit" && (
          <div className="text-center mt-3">
            <button className="btn btn-outline-secondary">
              Update my profile picture
            </button>
          </div>
        )}
      </div>

      {mode === "view" ? (
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center ">
          <h2>
            Sijun Kim
            <span style={{ fontSize: "20px", color: "grey" }}> 22</span>
          </h2>
          <h5>Email: fakefordemo@gmail.com</h5>
          <h5>Phone: 123-456-7890</h5>
          <h5>Weight: 150 lbs</h5>
        </div>
      ) : (
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center ">
          <UserInformation />
        </div>
      )}

      <div
        className="col-12 mt-4 d-flex justify-content-center"
        style={{ gap: "10px" }}
      >
        <button
          className="btn btn-primary"
          onClick={() => setMode(mode === "view" ? "edit" : "view")}
        >
          {mode === "view" ? "Edit Profile" : "Save Changes"}
        </button>
        <button className="btn btn-danger">Delete Account</button>
      </div>
    </div>
  );
};
export default ProfilePage;
