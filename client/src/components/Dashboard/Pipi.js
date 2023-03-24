// import React from 'react';
// import { PieChart, Pie} from 'recharts';


// const Pipi = () => {

// // Sample data
// const data = [
// {name: 'Food', expense: 400},
// {name: 'Medical', expense: 700},
// {name: 'Shopping', expense: 200},
// {name: 'Others', expense: 1000}
// ];


// return (
// 		<PieChart width={200} height={190}>
// 		<Pie data={data} dataKey="expense" outerRadius={95} innerRadius={60} fill="purple" />
// 		</PieChart>
// );
// }

// export default Pipi;

/**** */
// import React from 'react';
// import DonutChart from 'react-donut-chart';

// function Pipi(){
//   return(
//     <DonutChart
//       data={[
//         {
//           label: 'Food',
//           value: 400,
//         },
//         {
//           label: 'Medical',
//           value: 500,
//         },
//         {
//           label: 'Shopping',
//           value: 700,
//         },
//         {
//           label: 'Others',
//           value: 600,
//         }
//       ]}
//       colors={['#C77DFF', '#7B2CBF', '#3C096C', 'purple']}
//        height={[200]} width={[700]}
//        innerRadius={0.4} outerRadius={0.6}
       
//     />
//   )
// }


// export default Pipi;
// import React from 'react';
// import {Doughnut} from 'react-chartjs-2';

// function Pipi() {
//   const data = {
//     labels: ['Food','Medical','Shopping','Others'],
//     datasets: [
//         {
//             label: 'Attendance for Week 1',
//             data: [25,24,25,25],
//             borderColor: ['rgba(255,206,86,0.2)'],
//             backgroundColor: ['rgba(232,99,132,1)',
//             'rgba(232,211,6,1)',
//             'rgba(54,162,235,1)',
//             'rgba(255,159,64,1)',
//              ],
//             pointBackgroundColor: 'rgba(255,206,86,0.2)',
//         }

//     ]
// }
// const options = {
//   plugins: {
//       title: {
//           display: true,
//           text: 'Doughnut Chart',
//           color:'blue',
//           font: {
//               size:34
//           },
//           padding:{
//               top:30,
//               bottom:30
//           },
//           responsive:true,
//           animation:{
//               animateScale: true,
//                          }
//       }
//   }

// }
//     return (
//       <div>
//       <Doughnut data={data} options={options} />
//       </div>
//     )
// }

// export default Pipi

// import React, {useEffect, useState} from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
// class PieRechartComponent extends React.Component {
//    COLORS = ['#9D4EDD', '#7B2CBF', '#3C096C', 'purple', "#6a74b7", "#8a7c93"];
//    // pieData = [
//    //    {
//    //       name: "Food",
//    //       value: 550
//    //    },
//    //    {
//    //       name: "Shopping",
//    //       value: 1100
//    //    },
//    //    {
//    //       name: "Medical",
//    //       value: 200
//    //    },
//    //    {
//    //       name: "Others",
//    //       value: 500
//    //    }
      
//    // ];
//    CustomTooltip = ({ active, payload, label }) => {
//       if (active) {
//          return (
//          <div
//             className="custom-tooltip"
//             style={{
//                backgroundColor: "#ffff",
//                padding: "5px",
//                border: "1px solid #cccc"
//             }}
//          >
//             <label>{`${payload[0].name} : Rs. ${payload[0].value}`}</label>
//          </div>
//       );
//    }
//    return null;
// };
// render() {
//    const [pieData, setPieData] = useState();
//    useEffect(()=>{
//       fetch("http://localhost:4000/getCurrentExpense", {
//          credentials: "include",
//        }).then((resPieData)=>resPieData.json()).then((dataPie)=>setPieData(dataPie))
//    }, [])
//    return (
//       <PieChart width={600} height={190}>
//       <Pie
//          data={pieData}
//          color="#000000"
//          dataKey="_id"
//          nameKey="amount"
//          cx="30%"
//          cy="50%"
//          outerRadius={80}
//          fill="#8884d8"
//       >
//          {pieData.map((entry, index) => (
//             <Cell
//                key={`cell-${index}`}
//                fill={this.COLORS[index % this.COLORS.length]}
//             />
//          ))}
//       </Pie>
//       <Tooltip content={<this.CustomTooltip />} />
//       <Legend layout="vertical" align="right"/>
//       </PieChart>
//       );
//    }
// }
// export default PieRechartComponent;

import React, {useEffect, useState, memo} from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { CustomTooltip } from "./CustomToolTip";

const PieRechartComponent = ({pieData})=>{
   const COLORS = ['#9D4EDD', '#7B2CBF', '#3C096C', 'purple', "#6a74b7", "#8a7c93"];

   return (
      <PieChart width={600} height={190}>
      <Pie
         data={pieData}
         color="#000000"
         valueKey={pieData?.amount}
         nameKey={pieData?._id}
         cx="30%"
         cy="50%"
         outerRadius={80}
         fill="#8884d8"
      >
         {pieData?.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
      </Pie>
      {/* <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} /> */}
      <Legend layout="vertical" align="right"/>
      <Tooltip />
      </PieChart>
      );
}
export default memo(PieRechartComponent);