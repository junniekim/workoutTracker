import TitleHeader from "../Shared/titleHeader";
import SignIn from "./signin";
import SignUp from "./signup";
const AuthenticatePage = () => {
  return (
    <div>
      <TitleHeader title="Sign In"></TitleHeader>
      <SignIn />
      <SignUp />
    </div>
  );
};
export default AuthenticatePage;
