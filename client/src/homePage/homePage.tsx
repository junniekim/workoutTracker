import TitleHeader from "../Shared/titleHeader";
import creator from "../assets/creator.png";
import logDemo from "../assets/logDemo.png";
import logom from "../assets/logom.png";
import listDemo from "../assets/listDemo.png";
import progressDemo from "../assets/progressDemo.png";
import Entry from "./entry";
const HomePage = () => {
  return (
    <div className="row">
      <TitleHeader title=" 🏋️‍♂️MOOSCLES🏋️‍♀️"></TitleHeader>
      <Entry
        header="🤝 Meet Mooscles"
        text={[
          "Are you tired of the hassle of carrying pen and paper at gym to log your workout? Say goodbye to the old-fashioned methods and embrace the future of fitness tracking with Mooscles! ",
          "With Mooscles, you can log your progress with just a few touches, eliminating the need for pen and paper and allowing you to focus solely on crushing your workouts. Check out the features below!",
        ]}
        src={logom}
        alt={"logom"}
      ></Entry>
      <Entry
        header="📝 Workout Tracking/Reflection"
        text={[
          "Log workouts, including sets, reps, and intensity, with just a few taps.",
          "But it doesn't stop there – our unique diary feature allows you to post workout summaries and attach a photo, providing a visual record of your progress and a space for reflection. Stay motivated and achieve your fitness goals faster with our all-in-one solution.",
        ]}
        src={logDemo}
        alt={"logDemo"}
      ></Entry>
      <Entry
        header="🔧 Workout Customizing"
        text={[
          "Take control of your fitness routine. If you can't find a workout you enjoy, no worries! You have the ability to add it yourself. With this feature, Mooscles ensures that your fitness journey is truly personalized to your preferences and goals.",
        ]}
        src={listDemo}
        alt={"listDemo"}
      ></Entry>
      <Entry
        header="📊 Progress Report"
        text={[
          "View progress reports to track your fitness journey effectively. You can monitor changes in body weight and max lift weights for specific workouts or body parts. With this information, you can stay motivated and track your achievements as you work towards your fitness goals.",
        ]}
        src={progressDemo}
        alt={"progressDemo"}
      ></Entry>
    </div>
  );
};

export default HomePage;
