import TitleHeader from "../Shared/titleHeader";
import { useState } from "react";
import Calendar from "react-calendar";
import creator from "../assets/creator.png";
import "react-calendar/dist/Calendar.css";
import { Chart } from "react-google-charts";
import "./progressPage.css";

export const bodyWeightData = [
  ["Months", "Body Weight"],
  ["1", 300],
  ["2", 150],
  ["3", 200],
  ["4", 300],
  ["5", 150],
  ["6", 200],
  ["7", 300],
  ["8", 150],
  ["9", 200],
  ["10", 300],
  ["11", 150],
  ["12", 200],
  ["13", 150],
  ["14", 200],
  ["15", 150],
  ["16", 200],
  ["17", 150],
  ["18", 200],
  ["19", 150],
  ["20", 200],
  ["21", 150],
  ["22", 200],
  ["23", 150],
  ["24", 200],
  ["25", 150],
  ["26", 200],
  ["27", 150],
  ["28", 200],
  ["29", 150],
  ["30", 200],
  ["31", 150],
];

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

export const maxWeightData = [
  ["Months", "Body Weight"],
  ["1", 300],
  ["2", 150],
  ["3", 200],
  ["4", 300],
  ["5", 150],
  ["6", 200],
  ["7", 300],
  ["8", 150],
  ["9", 200],
  ["10", 300],
  ["11", 150],
  ["12", 200],
  ["13", 150],
  ["14", 200],
  ["15", 150],
  ["16", 200],
  ["17", 150],
  ["18", 200],
  ["19", 150],
  ["20", 200],
  ["21", 150],
  ["22", 200],
  ["23", 150],
  ["24", 200],
  ["25", 150],
  ["26", 200],
  ["27", 150],
  ["28", 200],
  ["29", 150],
  ["30", 200],
  ["31", 150],
];

export const maxWeightOptions = {
  title: "Max lifting weight change",
  curveType: "function",
  legend: "none",
  vAxis: {
    title: "Weight Lifted (Ibs)",
  },
  hAxis: {
    title: "Day",
  },
  titleTextStyle: {
    fontSize: 18,
  },
  colors: ["red"],
  pointSize: 5,
};

const ProgressPage = () => {
  const [selectedDate, setSelectedDate] = useState<String>(
    new Date().toLocaleString("en-US", { month: "long", year: "numeric" })
  );
  const onChange = (date: any) => {
    setSelectedDate(
      date.toLocaleString("en-US", { month: "long", year: "numeric" })
    );
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
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        loader={<div>Loading Chart</div>}
        data={bodyWeightData}
        options={bodyWeightOptions}
      />
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        loader={<div>Loading Chart</div>}
        data={maxWeightData}
        options={maxWeightOptions}
      />
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
