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
function App() {
  return (
    <Router>
      <div className="container">
        <NavigationBar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/authenticate" Component={AuthenticatePage} />
          <Route path="/profile" Component={ProfilePage} />
          <Route path="/progress" Component={ProgressPage} />
          <Route path="/workoutlist" Component={WorkoutListPage} />
          <Route path="/workoutlog" Component={WorkoutLogPage} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
