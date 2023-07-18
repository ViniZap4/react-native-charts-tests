import React, { useState } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { View, Text } from 'react-native';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // red color
    },
  ],
};

const ChartWithLabel = () => {
  const [label, setLabel] = useState('');

  const handleDataPointClick = (data: any) => {
    if (data.datasets.length > 0) {
      const { x, y } = data.datasets[0].data[data.index];
      setLabel(`Value: ${y} at ${x}`);
    }
  };

  return (
    <View>
      <LineChart
        data={data}
        width={300}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        bezier
        style={{ marginVertical: 8, borderRadius: 16 }}
        onDataPointClick={handleDataPointClick}
      />
      {label ? <Text>{label}</Text> : null}
    </View>
  );
};

export default ChartWithLabel;