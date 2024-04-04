import TitleHeader from "../Shared/titleHeader";
import creator from "../assets/creator.png"; // this will be replaced by image from database
const ProfilePage = () => {
  return (
    <div className="row">
      <TitleHeader title="🌟My Profile"></TitleHeader>
      <div className="col-12 col-md-6 d-flex justify-content-center">
        <img
          src={creator}
          alt="profile"
          height="300px"
          style={{ borderRadius: "50%", width: "300px", height: "300px" }}
        />
      </div>
      <div className="col-12 col-md-6 d-flex flex-column justify-content-center ">
        <h2>
          Sijun Kim
          <span style={{ fontSize: "20px", color: "grey" }}> he/him</span>
        </h2>
        <h5>Birthday: November 22nd 1963</h5>
        <h5>Height: 5'11 </h5>
        <h5>Weight: 150 lbs</h5>
        <h5>Email: fakefordemo@gmail.com</h5>
        <h5>Password: thisIsPassword (should only visible in edit mode)</h5>
      </div>
      <div
        className="col-12 mt-4 d-flex justify-content-center"
        style={{ gap: "10px" }}
      >
        <button className="btn btn-primary">Edit Profile</button>
        <button className="btn btn-danger">Delete Profile</button>
      </div>
    </div>
  );
};
export default ProfilePage;
