import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Chart from "./Charts/ChartKit";
import VictoryNative from "./Charts/VictoryNative";
import RoundedRadarChart from "./Charts/VictoryNativeRadar";
import { VictoryNativeRadarLabel } from "./Charts/VictoryNativeRadarLabel";
import ChartWithLabel from "./Charts/ChartKitWithLabel";
import VictoryNativeBarLabel from "./Charts/VictoryNativeBarLabel";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Chart /> */}
      {/* <VictoryNative /> */}
      {/* <RoundedRadarChart /> */}
      {/* <VictoryNativeRadarLabel/> */}
      {/* <ChartWithLabel /> */}
      <VictoryNativeBarLabel/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
