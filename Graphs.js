import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

class Graphs extends Component {

  render() {

    const data = [
      { name: 'Safe', population: 50, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Low Risk', population: 25, color: 'yellow', legendFontColor: '#7F7F7F', legendFontSize: 15 },
      { name: 'Risk', population: 25, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 }
    ];

    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2 // optional, default 3
    };

    const screenWidth = Dimensions.get('window').width;

    return (

      <View style={styles.MainContainer}>

      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
      </View>
    );
  }
}

export default Graphs;

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',

  }
});
