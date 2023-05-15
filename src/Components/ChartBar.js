import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chartBar.css';
const ChartBar = () => {
    const data = [
        { name: 'Tháng 1', 'Tuần này': 100, 'Tuần trước': 35 },
        { name: 'Tháng 2', 'Tuần này': 20, 'Tuần trước': 115 },
        { name: 'Tháng 3', 'Tuần này': 150, 'Tuần trước': 48 },
        { name: 'Tháng 4', 'Tuần này': 110, 'Tuần trước': 95 },
        { name: 'Tháng 5', 'Tuần này': 120, 'Tuần trước': 105 },
        { name: 'Tháng 6', 'Tuần này': 69, 'Tuần trước': 169 },
        { name: 'Tháng 7', 'Tuần này': 100, 'Tuần trước': 50 },
        { name: 'Tháng 8', 'Tuần này': 23, 'Tuần trước': 155 },
        { name: 'Tháng 9', 'Tuần này': 75, 'Tuần trước': 168 },
        { name: 'Tháng 10', 'Tuần này': 20, 'Tuần trước': 59 },
        { name: 'Tháng 11', 'Tuần này': 20, 'Tuần trước': 86 },
        { name: 'Tháng 12', 'Tuần này': 150, 'Tuần trước': 150 },
      ];
      const yTicks = [0, 100, 200, 300];

    return (

        <ResponsiveContainer width="100%" height={200}>
            
        <BarChart data={data}>
        
          <CartesianGrid strokeDasharray="0 0" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#666466" }} axisLine={{ stroke: "#E6E1E6" } } tickMargin={9}    tickSize={0}/>
          <YAxis tickCount={4} ticks={yTicks} tick={{ fontSize: 12, fill: "#666466" }} axisLine={{ stroke: "transparent" }} tickSize={0} tickMargin={9} />
          <Tooltip />
          {/* <Legend verticalAlign="top" align="right" /> */}
          <Bar dataKey="Tuần trước" stackId="stack" fill="#E5D6E1" barSize={12}/>
          <Bar dataKey="Tuần này" stackId="stack" fill="#7C3367" barSize={12}  />
         
        </BarChart>
      </ResponsiveContainer>
    );
};

export default ChartBar;





