import TitleHeader from "../Shared/titleHeader";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const WorkoutListPage = () => {
  const options = ["Upperbody", "Chest", "Upper Chest"];
  //{ value: 'one', label: 'One' },»
  return (
    <div>
      <TitleHeader title="✏️My List"></TitleHeader>
      <div className="row">
        <Dropdown
          className="col-12 col-md-3 col-lg-2" // need to be bigger on bigger screen
          options={options}
          value={options[0]}
          placeholder="Select an option"
        ></Dropdown>
      </div>
    </div>
  );
};
export default WorkoutListPage;
