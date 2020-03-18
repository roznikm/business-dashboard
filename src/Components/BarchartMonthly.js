import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const BarchartMonthly = props => {
  const leaseMonths = props.items.map(item => {
    const datesLeases = new Date(item.start_date);
    return new Date(datesLeases.getFullYear(), datesLeases.getMonth());
  });

  const chartData = _.countBy(leaseMonths);
  console.log(chartData); 
  const result = Object.keys(chartData).map(function(key) {
    const yearDate = new Date(key);
    const monthString = String(yearDate.getMonth() + 1); 
    const yearString = String(yearDate.getFullYear());
    const nameDate = parseInt(yearString + monthString.padStart(2, "0")); 
    return {
      name: nameDate,
      count: chartData[key]
    };
  });

  result.sort(function(a,b) {
    return a.name - b.name;
  });
  console.log(result);

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={result}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='count' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

BarchartMonthly.propTypes = {};

export default BarchartMonthly;
