// import React from 'react';
// import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
// import "./Sap.css";

// const BarGraph = () => {

// // Sample data
// const data = [
//   {name: 'Jan', students: 400},
//   {name: 'Feb', students: 700},
//   {name: 'March', students: 200},
//   {name: 'Apr', students: 1000}
// ];

// return (
// <BarChart width={400} height={400} data={data}>
//     <Bar dataKey="students" fill="purple" />
//     <CartesianGrid stroke="#ccc" />
//     <XAxis dataKey="name" />
//     <YAxis />
//   </BarChart>
// );
// }

// export default BarGraph;
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
const months = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function BarGraph({data}) {
  for (var key in data) {
    // console.log(typeof data[key]._id)
    data[key] = {
      "month" : months[data[key]._id],
      ...data[key]
    }
    // console.log(months[data[key]._id])

  }
  
  return (
    <div>
    {console.log(months[data?.id])}
      <BarChart  width={440} height={200} data={data}>
  
        <Bar dataKey="amount" name={months[data?._id]} fill="#7B2CBF" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey= "month"/>
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  );
}

export default BarGraph;
