import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HomePage from "./homePage/homePage";
import AuthenticatePage from "./authenticatePage/authenticatePage";
import ProfilePage from "./profilePage/profilePage";
import ProgressPage from "./progressPage/progressPage";
import WorkoutListPage from "./workoutListPage/workoutListPage";
import WorkoutLogPage from "./workoutLogPage/workoutLogPage";
import NavigationBar from "./navigation/navigationBar";
import Footer from "./footer/footer";
import { useUser } from "./SesssionManager/session";
function App() {
  const { userData } = useUser();
  return (
    <Router>
      <div className="container">
        <NavigationBar />
        <Routes>
          {userData ? (
            <>
              <Route path="/workoutlist" Component={WorkoutListPage} />
              <Route path="/workoutlog" Component={WorkoutLogPage} />
              <Route path="/profile" Component={ProfilePage} />
              <Route path="/progress" Component={ProgressPage} />
            </>
          ) : (
            <>
              <Route path="/workoutlist" Component={AuthenticatePage} />
              <Route path="/workoutlog" Component={AuthenticatePage} />
              <Route path="/profile" Component={AuthenticatePage} />
              <Route path="/progress" Component={AuthenticatePage} />
            </>
          )}
          <Route path="/" Component={HomePage} />
          <Route path="/authenticate" Component={AuthenticatePage} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
