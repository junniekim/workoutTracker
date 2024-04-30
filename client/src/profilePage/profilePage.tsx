import TitleHeader from "../Shared/titleHeader";
import { useState, useEffect } from "react";
import UserInformation from "../authenticatePage/userInformation";
import { useUser } from "../SesssionManager/session";
import { UserData } from "../SesssionManager/session";
import Swal from "sweetalert2";
const ProfilePage = () => {
  const { userData, setUser, clearUser } = useUser();
  const [temporaryChanges, setTemporaryChanges] = useState<UserData | null>(
    userData
  );
  const [mode, setMode] = useState("view");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const saveHandler = (): void => {
    if (mode === "view") {
      setMode("edit");
    } else {
      setUser(temporaryChanges);
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

  const deleteProfilePicture = (): void => {};

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files ? event.target.files[0] : null);
  };

  const updateProfilePicture = (): void => {};
  const deleteHandler = (): void => {
    Swal.fire({
      title: "Are you sure you want to delete your account?",
      text: "This action is irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sorry to see you go!",
          text: "This account has been permanently deleted",
          icon: "info",
        });
        const query2 = `http://localhost:3000/deleteUser/${userData?._id}`;
        fetch(query2, {
          method: "DELETE",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {})
          .catch((error) => {
            console.error(error);
          });
        clearUser();
      }
    });
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
          <div className="text-center mt-3 d-flex flex-column">
            <input type="file" onChange={onFileChange} />
            <button
              onClick={() => {
                updateProfilePicture();
              }}
              className="btn btn-outline-secondary mt-2 mb-2"
            >
              Update my profile picture
            </button>
            <button
              onClick={() => {
                deleteProfilePicture();
              }}
              className="btn btn-outline-danger"
            >
              Delete my profile picture
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
          {userData?.bodyweight_history &&
            userData?.bodyweight_history.length > 0 && (
              <h5>🏃‍♂️ {getMostRecentWeight()} lbs</h5>
            )}
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
        <button onClick={() => deleteHandler()} className="btn btn-danger">
          Delete Account
        </button>
      </div>
    </div>
  );
};
export default ProfilePage;
