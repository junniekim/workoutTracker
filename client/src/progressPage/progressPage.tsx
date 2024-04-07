import TitleHeader from "../Shared/titleHeader";
import { useState } from "react";
import Calendar from "react-calendar";
import creator from "../assets/creator.png";
import "react-calendar/dist/Calendar.css";
import { Chart } from "react-google-charts";
import "./progressPage.css";

export const bodyWeightData = [
  ["Months", "Body Weight"],
  ["Jan", 300],
  ["Feb", 150],
  ["Mar", 200],
  ["Apr", 300],
  ["May", 150],
  ["Jun", 200],
  ["Jul", 300],
  ["Aug", 150],
  ["Sep", 200],
  ["Oct", 300],
  ["Nov", 150],
  ["Dec", 200],
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
  pointSize: 5,
};

export const maxWeightData = [
  ["Months", "Body Weight"],
  ["Jan", 300],
  ["Feb", 150],
  ["Mar", 200],
  ["Apr", 300],
  ["May", 150],
  ["Jun", 200],
  ["Jul", 300],
  ["Aug", 150],
  ["Sep", 200],
  ["Oct", 300],
  ["Nov", 150],
  ["Dec", 200],
];

export const maxWeightOptions = {
  title: "Max lifting weight change",
  curveType: "function",
  legend: "none",
  vAxis: {
    title: "Weight Lifted (Ibs)",
  },
  titleTextStyle: {
    fontSize: 18,
  },
  colors: ["red"],
  pointSize: 5,
};

const ProgressPage = () => {
  const dateFormatter = (date: any) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };
  const [selectedDate, setSelectedDate] = useState<String>(
    dateFormatter(new Date())
  );
  const onChange = (date: any) => {
    setSelectedDate(dateFormatter(date));
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
          maxDetail="decade"
          onChange={onChange}
          maxDate={new Date()}
          tileClassName={tileClassName}
        />
      </div>

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
      <h4>Photo Gallery</h4>
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
