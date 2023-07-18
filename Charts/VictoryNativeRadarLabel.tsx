import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { VictoryChart, VictoryPolarAxis, VictoryArea, Text } from 'victory-native';

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
  color: '#007AFF',
  labels: ['A', 'B', 'C', 'D', 'E'],
};

export const VictoryNativeRadarLabel = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipData, setTooltipData] = useState({clientX: 0, clientY: 0});

  const handleTouch = (event : any, dataPoint: any) => {
    setTooltipData(dataPoint);
    setTooltipVisible(true);
  };

  const handleTouchEnd = () => {
    setTooltipVisible(false);
  };

  return (
    <View>
      <VictoryChart polar={true}>
        <VictoryPolarAxis
          tickValues={[0, 1, 2, 3, 4]}
          tickFormat={() => ''}
          style={{
            axis: { stroke: 'none' },
            grid: { stroke: 'grey', strokeWidth: 0.25, opacity: 0.5 },
          }}
        />
        <VictoryArea
          data={data}
          x="key"
          y="value"
          style={{
            data: {
              fill: config.color,
              fillOpacity: 0.7,
              stroke: config.color,
              strokeWidth: 2,
            },
          }}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onTouchStart: (event, dataPoint) => handleTouch(event, dataPoint),
                onTouchEnd: () => handleTouchEnd(),
              },
            },
          ]}
        />
      </VictoryChart>
      {tooltipVisible && (
        <TouchableOpacity style={{ position: 'absolute', top: tooltipData.clientY, left: tooltipData.clientX }}>
          <Text> test </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
