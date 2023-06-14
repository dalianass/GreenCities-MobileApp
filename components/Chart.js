import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from "react-native-chart-kit";
import React from 'react';
import { View, Dimensions } from 'react-native';

/* #012F2C
#045346
#8DA56C
#D2E0DB

#17644f
#589e6d
#E2C18B*/
export default function Chart({data}) {
    const chartConfig = {
        backgroundGradientFrom: "#045346",
        backgroundGradientFromOpacity: 0.2,
        backgroundGradientTo: "#012F2C",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
      };

  return (
    <View>
      <PieChart
      data={data}
      width={Dimensions.get("window").width - 30}
      height={250}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"#e6e8e6"}
      paddingLeft={"15"}
      center={[10, 10]}
      absolute
      hasLegend={true}
    />

  {/* <LineChart
    data={{
      labels: ["Januar", "Februar", "Mart", "April", "Maj", "Jun"],
      datasets: [
        {
          data: [
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100,
            // Math.random() * 100
            10, 20, 30, 40, 50, 50, 62, 100, 12, 10

            
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={400}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#045346",
      backgroundGradientFrom: "#045346",
      backgroundGradientTo: "#045346",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  /> */}

</View>
  );}
