import "./sharedAuthenticate.css";
import { UserData } from "../SesssionManager/session";
const UserInformation = ({
  header,
  data,
  dataChange,
}: {
  header?: string;
  data: UserData | null;
  dataChange: (data: any) => void;
}) => {
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
          value={data?.first_name}
          onChange={(e) =>
            dataChange((prevState: any) => ({
              ...prevState,
              first_name: e.target.value,
            }))
          }
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
          value={data?.last_name}
          onChange={(e) =>
            dataChange((prevState: any) => ({
              ...prevState,
              last_name: e.target.value,
            }))
          }
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
          value={data?.birthday.toString().substring(0, 10)}
          onChange={(e) =>
            dataChange((prevState: any) => ({
              ...prevState,
              birthday: e.target.value,
            }))
          }
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
          value={data?.email_address}
          onChange={(e) =>
            dataChange((prevState: any) => ({
              ...prevState,
              email_address: e.target.value,
            }))
          }
        />
      </div>
      <div className="form-group mb-2">
        <div className="input-header">Phone Number</div>
        <input
          type="text"
          className="form-control"
          id="phone"
          value={data?.phone_number}
          onChange={(e) =>
            dataChange((prevState: any) => ({
              ...prevState,
              phone_number: e.target.value,
            }))
          }
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
          onChange={(e) =>
            dataChange((prevState: any) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </div>
    </>
  );
};

export default UserInformation;
