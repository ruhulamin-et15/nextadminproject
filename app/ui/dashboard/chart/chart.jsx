"use client";
import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    visit: 2000,
    click: 3000,
  },
  {
    name: "Sun",
    visit: 2040,
    click: 3050,
  },
  {
    name: "Mon",
    visit: 2010,
    click: 3090,
  },
  {
    name: "Tue",
    visit: 2900,
    click: 3900,
  },
  {
    name: "Wed",
    visit: 2090,
    click: 3700,
  },
  {
    name: "Thu",
    visit: 2100,
    click: 3100,
  },
  {
    name: "Fri",
    visit: 1000,
    click: 3770,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Reports</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
