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
import React from 'react';
import DoubleGraphData from './DoubleGraphData';

function BarGraph() {
  const data = [
    { name: 'Jan', Expected_expense: 65, True_expense: 28 },
    { name: 'Feb', Expected_expense: 59, True_expense: 48 },
    { name: 'Mar', Expected_expense: 80, True_expense: 40 },
    { name: 'Apr', Expected_expense: 81, True_expense: 19 },
    { name: 'May', Expected_expense: 56, True_expense: 86 },
    { name: 'June', Expected_expense: 70, True_expense: 75 },
    { name: 'July', Expected_expense: 60, True_expense: 106 },
  ];

  return (
    <div>
      <DoubleGraphData data={data} />
    </div>
  );
}

export default BarGraph;