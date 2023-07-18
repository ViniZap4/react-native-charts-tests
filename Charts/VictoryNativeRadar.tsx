import React from 'react';
import { View } from 'react-native';
import { VictoryChart, VictoryPolarAxis, VictoryArea, VictoryTooltip } from 'victory-native';

const data = [
  { key: 'A', value: 5 },
  { key: 'B', value: 7 },
  { key: 'C', value: 3 },
  { key: 'D', value: 4 },
  { key: 'E', value: 6 },
];

const config = {
  width: 300,
  height: 300,
  color: '#5b6a7a',
  labels: ['A', 'B', 'C', 'D', 'E', 'F'],
};

export const RoundedRadarChart = () => {
  return (
    <View>
      <VictoryChart polar={true}>
        <VictoryPolarAxis
          tickValues={[0, 1, 2, 3, 4, 5, 6, 7]}
          tickFormat={() => '-'}
          style={{
            axis: { stroke: '#0000', strokeWidth: 1 },
            grid: { stroke: 'blue', strokeWidth: 1, opacity: 0.2 },
          }}
        />
        <VictoryArea
          data={data}
          x="key"
          y="value"
          // interpolation="cardinal"
          style={{
            data: {
              fill: config.color,
              fillOpacity: 0.7,
              stroke: config.color,
              strokeWidth: 2,
            },
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default RoundedRadarChart;