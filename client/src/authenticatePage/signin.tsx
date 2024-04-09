import { useState, useEffect } from "react";
import "./sharedAuthenticate.css";
import TitleHeader from "../Shared/titleHeader";
import Swal from "sweetalert2";
import { useUser } from "../SesssionManager/session";
const SignIn = (props: any) => {
  // Screen Responsiveness
  const [biggerForm, setBiggerForm] = useState(window.innerWidth > 700);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
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

  const { setUser } = useUser();

  //When user try to sign in, see if the user exists, if so, store their data in context
  const signInHandler = () => {
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const password = (document.getElementById("password") as HTMLInputElement)
      ?.value;
    (document.getElementById("email") as HTMLInputElement).value = "";
    (document.getElementById("password") as HTMLInputElement).value = "";
    const query = `http://localhost:3000/users?email=${email}&password=${password}`;
    fetch(query)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data._id) {
          Swal.fire(
            "No Account Found",
            "Please check your email and password and try again.",
            "error"
          );
        }
        if (data._id) {
          setUser(data);
          Swal.fire("Success", "You have successfully signed in", "success");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="row">
      <TitleHeader title="Sign In"></TitleHeader>
      <div className="col-12 d-flex justify-content-center">
        <form
          className={biggerForm ? "third-width" : "half-width"}
          onSubmit={(e) => {
            e.preventDefault();
            signInHandler();
          }}
        >
          <div className="form-group mb-2">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="password"
            />
          </div>

          <div className="d-flex flex-column text-center justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginBottom: "10px" }}
            >
              Sign In
            </button>
            <div>
              <small>
                <button className="text-button" onClick={props.onToggle}>
                  New to Mooscles?
                </button>
              </small>
              <span style={{ margin: "0 5px" }}>|</span>
              <small>Forgot password?</small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
