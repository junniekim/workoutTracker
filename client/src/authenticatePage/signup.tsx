import { useState, useEffect } from "react";
import "./signup.css";
import TitleHeader from "../Shared/titleHeader";

const SignUp = (props: any) => {
  const [biggerForm, setBiggerForm] = useState(window.innerWidth > 700);
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
  return (
    <div className="row">
      <TitleHeader title="Sign Up"></TitleHeader>
      <div className="col-12 d-flex justify-content-center">
        <form className={biggerForm ? "third-width" : "half-width"}>
          <h5 className="text-center grey mb-4">
            Create Mooscles account today and enjoy all services we offer!
          </h5>
          <div className="form-group mb-2">
            <label>
              <div className="input-header">
                First Name <span style={{ color: "red" }}>*</span>
              </div>
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group mb-2">
            <label>
              <div className="input-header">
                Last Name <span style={{ color: "red" }}>*</span>
              </div>
            </label>
            <input type="text" className="form-control" id="lastname" />
          </div>
          <div className="form-group mb-2">
            <label>
              <div className="input-header">
                Birthday <span style={{ color: "red" }}>*</span>
              </div>
            </label>
            <input type="date" className="form-control" id="birthday" />
          </div>
          <div className="form-group mb-2">
            <label>
              <div className="input-header">
                Email Address <span style={{ color: "red" }}>*</span>
              </div>
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group mb-2">
            <div className="input-header">Phone Number</div>
            <input type="text" className="form-control" id="phone" />
          </div>
          <div className="form-group mb-2">
            <label>
              <div className="input-header">
                Password <span style={{ color: "red" }}>*</span>
              </div>
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="form-group mb-2">
            <label>
              <div className="input-header">
                Password Confirm <span style={{ color: "red" }}>*</span>
              </div>
            </label>
            <input
              type="password-confirmation"
              className="form-control"
              id="password-confirmation"
            />
          </div>

          <div className="form-group mb-2">
            <label>
              <div className="input-header">
                Body Weight (kg)<span style={{ color: "red" }}>*</span>
              </div>
            </label>
            <input type="number" className="form-control" id="weight" />
          </div>

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
