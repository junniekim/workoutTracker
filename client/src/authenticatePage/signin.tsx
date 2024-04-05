import { useState, useEffect } from "react";
import "./signup.css";
import TitleHeader from "../Shared/titleHeader";
const SignIn = (props: any) => {
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
  return (
    <div className="row">
      <TitleHeader title="Sign In"></TitleHeader>
      <div className="col-12 d-flex justify-content-center">
        <form className={biggerForm ? "third-width" : "half-width"}>
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
