import { useState, useEffect } from "react";
import "./signup.css";
import TitleHeader from "../Shared/titleHeader";
import UserInformation from "./userInformation";

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
          <UserInformation header="Create Mooscles account today and enjoy all services we offer!" />
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
