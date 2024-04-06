import { useState } from "react";
import "./signup.css";

const UserInformation = ({ header }: { header?: string }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [bodyWeight, setBodyWeight] = useState(0);

  return (
    <>
      <h5 className="text-center grey mb-4">{header}</h5>
      <div className="form-group mb-2">
        <label>
          <div className="input-header">
            First Name <span style={{ color: "red" }}>*</span>
          </div>
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group mb-2">
        <label>
          <div className="input-header">
            Last Name <span style={{ color: "red" }}>*</span>
          </div>
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group mb-2">
        <label>
          <div className="input-header">
            Birthday <span style={{ color: "red" }}>*</span>
          </div>
        </label>
        <input
          type="date"
          className="form-control"
          id="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </div>
      <div className="form-group mb-2">
        <label>
          <div className="input-header">
            Email Address <span style={{ color: "red" }}>*</span>
          </div>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mb-2">
        <div className="input-header">Phone Number</div>
        <input
          type="text"
          className="form-control"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group mb-2">
        <label>
          <div className="input-header">
            Password <span style={{ color: "red" }}>*</span>
          </div>
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group mb-2">
        <label>
          <div className="input-header">
            Password Confirm <span style={{ color: "red" }}>*</span>
          </div>
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <div className="form-group mb-2">
        <label>
          <div className="input-header">
            Body Weight (kg)<span style={{ color: "red" }}>*</span>
          </div>
        </label>
        <input
          type="number"
          className="form-control"
          id="bodyWeight"
          value={bodyWeight}
          onChange={(e) => setBodyWeight(Number(e.target.value))}
        />
      </div>
    </>
  );
};

export default UserInformation;
