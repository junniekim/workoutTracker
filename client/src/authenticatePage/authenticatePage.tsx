import { useState } from "react";
import SignIn from "./signin";
import SignUp from "./signup";

const AuthenticatePage = () => {
  const [login, setlogin] = useState(true);
  const handleLogInToggle = () => {
    setlogin(!login);
  };
  return (
    <div>
      {login ? (
        <SignIn onToggle={handleLogInToggle} />
      ) : (
        <SignUp onToggle={handleLogInToggle} />
      )}
    </div>
  );
};
export default AuthenticatePage;
