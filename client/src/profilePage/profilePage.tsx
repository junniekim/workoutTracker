import TitleHeader from "../Shared/titleHeader";
import { useState } from "react";
import UserInformation from "../authenticatePage/userInformation";
import { useUser } from "../SesssionManager/session";
import { UserData } from "../SesssionManager/session";
const ProfilePage = () => {
  const { userData, setUser } = useUser();
  const [temporaryChanges, setTemporaryChanges] = useState<UserData | null>(
    userData
  );
  const [mode, setMode] = useState("view");
  const saveHandler = (): void => {
    if (mode === "view") {
      setMode("edit");
    } else {
      console.log(JSON.stringify(temporaryChanges));
      setUser(temporaryChanges);
      //?fname=${temporaryChanges?.first_name}&lname=${temporaryChanges?.last_name}
      //&email=${temporaryChanges?.email_address}&phone=${temporaryChanges?.phone_number}&password=${temporaryChanges?.password}&birthday=${temporaryChanges?.birthday}
      const query = `http://localhost:3000/update/${userData?._id}`;
      fetch(query, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(temporaryChanges),
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setMode("view");
    }
  };
  const discardHandler = (): void => {
    setMode("view");
    setTemporaryChanges(userData);
  };
  function getAge(): number {
    const today: Date = new Date();
    const birthDate: Date = new Date(userData?.birthday.substring(0, 10)!);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const monthDiff: number = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }
  const getMostRecentWeight = (): number | null => {
    if (
      userData &&
      userData.bodyweight_history &&
      userData.bodyweight_history.length > 0
    ) {
      const sortedWeights = userData.bodyweight_history.sort(
        (a: any, b: any) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      return sortedWeights[0].weight;
    }
    return null;
  };
  return (
    <div className="row">
      <TitleHeader title="🌟My Profile"></TitleHeader>
      <div className="col-12 col-md-6 d-flex flex-column align-items-center">
        <img
          src={userData?.profile_picture as string}
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
            {userData?.first_name} {userData?.last_name}
            <span style={{ fontSize: "20px", color: "grey" }}> {getAge()}</span>
          </h2>
          <h5>✉️ {userData?.email_address}</h5>
          <h5>☎️ {userData?.phone_number}</h5>
          <h5>🏃‍♂️ {getMostRecentWeight()} lbs</h5>
        </div>
      ) : (
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center ">
          <UserInformation
            data={temporaryChanges}
            dataChange={setTemporaryChanges}
          />
        </div>
      )}

      <div
        className="col-12 mt-4 d-flex justify-content-center"
        style={{ gap: "10px" }}
      >
        {mode === "edit" && (
          <button
            className="btn btn-secondary"
            onClick={() => discardHandler()}
          >
            Discard Changes
          </button>
        )}

        <button className="btn btn-primary" onClick={() => saveHandler()}>
          {mode === "view" ? "Edit Profile" : "Save Changes"}
        </button>
        <button className="btn btn-danger">Delete Account</button>
      </div>
    </div>
  );
};
export default ProfilePage;
