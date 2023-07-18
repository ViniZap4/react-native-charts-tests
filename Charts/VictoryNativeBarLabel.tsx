import React from "react";
import { StyleSheet, View } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryContainer,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const VictoryNativeBarLabel = () => {
  return (
    <View style={styles.container}>
      <VictoryChart
        containerComponent={
          // <VictoryContainer>
            <VictoryVoronoiContainer
              onTouchEnd={() => console.log("Touch event occurred")}
            />
          // </VictoryContainer>
        }
        theme={VictoryTheme.material}
      >
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
          labelComponent={<VictoryTooltip />}
          labels={({ datum }) => `${datum.earnings}`}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VictoryNativeBarLabel;
