import ReactECharts from "echarts-for-react";
import ArrowDown from "../../assets/icon/Arrow - Down 2.svg";
import ArrowLight from "../../assets/icon/arrowdownlight.svg";
import ChartOptions from "../Modals/ChartOptions";
import {
  year,
  data1,
  data2,
  data3,
  data4,
  day,
  day2,
  month,
} from "../../mockData/chart";
import { useState } from "react";

const Chart = () => {
  const daily = { x: day, y: data2 };
  const weekly = { x: day2, y: data4 };
  const yearly = { x: year, y: data3 };
  const monthly = { x: month, y: data1 };
  const [optionsDisplay, setOptionsDisplay] = useState("none");
  const [valueData, setvalueData] = useState("Monthly");

  const [stateVal, setstateVal] = useState({
    x: month,
    y: data1,
  });
  // Find the index of the highest value
  const indexOfMaxValue = stateVal.y.indexOf(Math.max(...stateVal.y));
  const yLabel = [
    0,
    (5.0).toFixed(3),
    (10.0).toFixed(3),
    (20.0).toFixed(3),
    (30.0).toFixed(3),
    (40.0).toFixed(3),
    (50.0).toFixed(3),
  ];

  const options = {
    tooltip: {
      trigger: "axis",
      responsive: true,
      position: function (point: string) {
        // Position the tooltip at the top of the chart
        return [parseInt(point[0]) - 50, "-3%"];
      },
      formatter: function (params: { value: number }[]) {
        // Add "$" sign to the tooltip value
        return (
          '<div class="tooltip-pointer">' +
          "$" +
          params[0].value.toFixed(3) +
          "</div>"
        );
      },
      extraCssText: `
      border:none;
      min-width: 80px;
      min-height: 31.977px;
      `,
      backgroundColor: "#090C2C",
      padding: [5, 14, 5, 14],
      textStyle: {
        color: "#FFF",
        fontFamily: "Inter",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
      },
    },
    responsive: true,
    grid: { top: 20, right: 8, bottom: 24, left: 50 },
    renderer: "svg",
    xAxis: {
      axisLine: {
        show: false,
        // ...
      },
      data: stateVal.x,
      axisTick: {
        alignWithLabel: true,
      },
    },
    yAxis: {
      type: "value",
      data: yLabel,
      axisLabel: {
        formatter: function (value: number) {
          if (value === 0) {
            return 0;
          }
          return value.toFixed(3);
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed", // Set the line style to dashed
        },
      },
    },
    series: [
      {
        data: stateVal.y.map((value, index) => ({
          value: value,
          itemStyle: {
            // Apply different styles for the highest value and others
            barBorderRadius: [20, 20, 0, 0],
            color:
              index === indexOfMaxValue
                ? {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "#34CAA5" }, // color at 0%
                      { offset: 1, color: "rgba(52, 202, 165, 0.00)" }, // color at 100%
                    ],
                    global: false, // default is false
                  }
                : "rgba(52, 202, 165, 0.10)",
          },
        })),
        type: "bar",
        smooth: true,
      },
    ],
  };

  const handleOptions = (data?: string) => {
    if (data) {
      setOptionsDisplay(data);
      return;
    }
    if (optionsDisplay === "none") {
      return setOptionsDisplay("unset");
    }
    return setOptionsDisplay("none");
  };

  const handleOptionValue = (data: string) => {
    data === "Weekly"
      ? setstateVal(weekly)
      : data === "Yearly"
      ? setstateVal(yearly)
      : data === "Daily"
      ? setstateVal(daily)
      : setstateVal(monthly);
    setvalueData(data);
  };

  return (
    <div className="chart-container">
      <div className="chart-header">
        <h2 className="chart-heading">Sales Trends</h2>
        <div className="sort-container">
          <p className="sort-text">Sort by:</p>
          <button onClick={() => handleOptions()} className="options">
            <span className="option-text">{valueData}</span>
            <span className="option-icon-container">
              <img
                src={
                  localStorage.getItem("theme") == "light-mode"
                    ? ArrowDown
                    : ArrowLight
                }
                className="option-icon"
                alt="option"
              />
            </span>
          </button>
          <div className="chart-options" style={{ display: optionsDisplay }}>
            <ChartOptions
              handleOptionValue={handleOptionValue}
              handleOptionDisplay={handleOptions}
            />
          </div>
        </div>
      </div>
      <div className="echart-container">
        <ReactECharts option={options} />
      </div>
    </div>
  );
};

export default Chart;
