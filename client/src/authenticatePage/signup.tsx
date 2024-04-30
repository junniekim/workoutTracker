import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./sharedAuthenticate.css";
import TitleHeader from "../Shared/titleHeader";
import UserInformation from "./userInformation";
import Swal from "sweetalert2";
import { useUser } from "../SesssionManager/session";

const SignUp = (props: any) => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [biggerForm, setBiggerForm] = useState(window.innerWidth > 700);
  const [newUserData, setNewUserData] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setBiggerForm(true);
      } else {
        setBiggerForm(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const signUpHandler = () => {
    const query = `http://localhost:3000/newUser`;
    fetch(query, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        Swal.fire(
          "Welcome to Moosecles!",
          "Enjoy our members-only features",
          "success"
        ).then(() => {
          navigate("/");
        });
      })
      .catch(() => {
        Swal.fire(
          "Something went wrong",
          "Please try again at a later time.",
          "error"
        );
      });
  };

  return (
    <div className="row">
      <TitleHeader title="Sign Up"></TitleHeader>
      <div className="col-12 d-flex justify-content-center">
        <form
          className={biggerForm ? "third-width" : "half-width"}
          onSubmit={(e) => {
            e.preventDefault();
            signUpHandler();
          }}
        >
          <UserInformation
            data={newUserData}
            dataChange={setNewUserData}
            header="Create Mooscles account today and enjoy all services we offer!"
          />
          <div className="mt-3  d-flex flex-column text-center justify-content-center">
            <button type="submit" className="mb-2 btn btn-primary">
              Sign Up
            </button>
            <div>
              <small>
                <button className="text-button" onClick={props.onToggle}>
                  Already have an account?
                </button>
              </small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
