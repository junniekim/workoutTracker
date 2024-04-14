import TitleHeader from "../Shared/titleHeader";
import { useState } from "react";
import Calendar from "react-calendar";
import creator from "../assets/creator.png";
import "react-calendar/dist/Calendar.css";
import { Chart } from "react-google-charts";
import { useUser } from "../SesssionManager/session";
import "./progressPage.css";

export const bodyWeightOptions = {
  title: "Body weight change",
  curveType: "function",
  legend: "none",
  vAxis: {
    title: "Body Weight (Ibs)",
  },
  titleTextStyle: {
    fontSize: 18,
  },
  hAxis: {
    title: "Day",
  },
  pointSize: 5,
};

const ProgressPage = () => {
  const { userData } = useUser();
  const [selectedDate, setSelectedDate] = useState<String>(
    new Date().toLocaleString("en-US", { month: "long", year: "numeric" })
  );
  const [bodyWeightData, setBodyWeightData] = useState<any>(null);

  const onChange = (date: any) => {
    let temp: any[] = [];
    setSelectedDate(
      //03-01-2024
      date
        .toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
        })
        .replace(/\//g, "-")
    );
    userData?.bodyweight_history?.filter((element: any) => {
      if (
        new Date(element.date)
          .toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
          })
          .replace(/\//g, "-") ===
        date
          .toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
          })
          .replace(/\//g, "-")
      ) {
        temp.push([
          Number(
            new Date(element.date).toLocaleString("en-US", {
              day: "numeric",
            })
          ) + 1,
          element.weight,
        ]);
        temp.sort((a, b) => a[0] - b[0]);
        temp = temp.map((subArray) => [String(subArray[0]), subArray[1]]);
      }
    });
    if (temp.length === 0) {
      setBodyWeightData(null);
    } else {
      temp.unshift(["Day", "Body Weight (Ibs)"]);
      console.log(temp);
      setBodyWeightData(temp);
    }
  };

  const tileClassName = ({
    date,
  }: {
    date: Date;
    view: string;
  }): string | null => {
    const currentYear = new Date().getFullYear();
    const tileYear = date.getFullYear();

    if (tileYear === currentYear) {
      return "custom-tile-highlight";
    }
    return null;
  };
  return (
    <div>
      <TitleHeader title="📈My Progress"></TitleHeader>
      <div className="d-flex justify-content-center">
        <Calendar
          maxDetail="year"
          onChange={onChange}
          maxDate={new Date()}
          tileClassName={tileClassName}
        />
      </div>
      <h4 className="text-center mt-4">Your progress in {selectedDate}</h4>
      {bodyWeightData != null ? (
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          loader={<div>Loading Chart</div>}
          data={bodyWeightData}
          options={bodyWeightOptions}
        />
      ) : (
        <h5 className="mt-3 text-center">No Body Weight Recorded</h5>
      )}

      <h4>Photo Gallery for {selectedDate}</h4>
      <div className="image-container">
        <div className="image-wrapper">
          <img src={creator} alt="creator" />
          <p>1234-09-24</p>
        </div>
        <div className="image-wrapper">
          <img src={creator} alt="creator" />
          <p>1234-09-24</p>
        </div>
        <div className="image-wrapper">
          <img src={creator} alt="creator" />
        </div>
        <div className="image-wrapper">
          <img src={creator} alt="creator" />
          <p>1234-09-24</p>
        </div>
        <div className="image-wrapper">
          <img src={creator} alt="creator" />
          <p>1234-09-24</p>
        </div>
        <div className="image-wrapper">
          <img src={creator} alt="creator" />
          <p>1234-09-24</p>
        </div>
        <div className="image-wrapper">
          <img src={creator} alt="creator" />
          <p>1234-09-24</p>
        </div>
        <div className="image-wrapper">
          <img src={creator} alt="creator" />
          <p>1234-09-24</p>
        </div>
        <div className="image-wrapper">
          <img src={creator} alt="creator" />
          <p>1234-09-24</p>
        </div>
        <div className="image-wrapper">
          <img src={creator} alt="creator" />
          <p>1234-09-24</p>
        </div>
        <div className="image-wrapper">
          <img src={creator} alt="creator" />
          <p>1234-09-24</p>
        </div>
      </div>
    </div>
  );
};
export default ProgressPage;
