import creator from "../assets/creator.png";
import homevideo from "../assets/home.mov";
import Entry from "./entry";
const HomePage = () => {
  return (
    <div>
      <h1
        className="text-center mt-3 mb-3"
        style={{ fontWeight: "bold", fontSize: "80px" }}
      >
        🏋️‍♂️ MUSCLES 🏋️‍♀️
      </h1>
      <Entry
        header="🤝 Meet Muscles"
        text={[
          "Are you tired of the hassle of carrying pen and paper at gym to log your workout? Say goodbye to the old-fashioned methods and embrace the future of fitness tracking with Muscles! ",
          "With Muscles, you can log your progress with just a few touches, eliminating the need for pen and paper and allowing you to focus solely on crushing your workouts. Check out the features below!",
        ]}
        src={creator}
        alt={"creator"}
        picOnRight={false}
      ></Entry>
      <Entry
        header="📝 Workout Tracking/Reflection"
        text={[
          "Effortlessly log workouts, including sets, reps, and intensity, with just a few taps.",
          "But it doesn't stop there – our unique diary feature allows you to post workout summaries and attach a photo, providing a visual record of your progress and a space for reflection. Stay motivated and achieve your fitness goals faster with our all-in-one solution.",
        ]}
        src={creator}
        alt={"creator"}
        picOnRight={true}
      ></Entry>
      <Entry
        header="🔧 Workout Customizing"
        text={[
          "Take control of your fitness routine. If you can't find a workout you enjoy, no worries! You have the ability to add it yourself. With this feature, Muscles ensures that your fitness journey is truly personalized to your preferences and goals.",
        ]}
        src={creator}
        alt={"creator"}
        picOnRight={false}
      ></Entry>
      <Entry
        header="📊 Progress Report"
        text={[
          "View progress reports to track your fitness journey effectively. You can monitor changes in body weight and max lift weights for specific workouts or body parts. With this information, you can stay motivated and track your achievements as you work towards your fitness goals.",
        ]}
        src={creator}
        alt={"creator"}
        picOnRight={true}
      ></Entry>
      <Entry
        header="📽️ Demonstration Video"
        text={[
          "Check out our demonstration video to see Muscles in action, and unlock the full potential of Muscles to revolutionize your fitness journey!",
        ]}
        video={homevideo}
        picOnRight={false}
      ></Entry>
    </div>
  );
};

export default HomePage;
