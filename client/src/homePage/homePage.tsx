import creator from "../assets/creator.png";
const HomePage = () => {
  return (
    <div className="row text-right">
      <div className="col-7">
        <h2>New Generation Workout Tracker</h2>
        <p>This workout tracker is so awesome this workout tracker does</p>
      </div>
      <div className="col-5">
        <img src={creator} alt="Creator" width="400px" />
      </div>
    </div>
  );
};

export default HomePage;
