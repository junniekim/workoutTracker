import TitleHeader from "../Shared/titleHeader";
import creator from "../assets/creator.jpg"; // this will be replaced by image from database
const ProfilePage = () => {
  return (
    <div className="row">
      <TitleHeader title="🌟My Profile"></TitleHeader>
      <div className="col-12 col-md-6">
        In db, first name, last name, gender, pronouns, email, bodyweight,
        password, birthday, profile picture Here I can display picture and
        change profile picture button in edit mode
      </div>
      <div className="col-12 col-md-6">
        Here I can display name first and last, pronouns, body weight, email,
        password, birthday
      </div>
      <div
        className="col-12 d-flex justify-content-center"
        style={{ gap: "10px" }}
      >
        <button className="btn btn-primary">Edit Profile</button>
        <button className="btn btn-danger">Delete Profile</button>
      </div>
    </div>
  );
};
export default ProfilePage;
