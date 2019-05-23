import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions, Button } from 'react-native';
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

  constructor(props) {

    super(props);


  }

  render() {

    const data = {
        labels: ['Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [ 4, 7, 9, 8, 6, 10 ]
        }]
      };

      const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        color: (opacity = 1) => `rgba(0, 80, 200, ${opacity})`,
        strokeWidth: 2 // optional, default 3
      };

    const screenWidth = Dimensions.get('window').width - 40;

    return (

      <View style={styles.MainContainer}>
          <View style={styles.date}>
              <View>
                  <Text style={styles.chevrons}> {'\<'} </Text>
              </View>
              <View>
                  <Text style={styles.date_text}> Thursday, 23 May 2019 </Text>
              </View>
              <View>
                  <Text style={styles.chevrons}>{'\>'} </Text>
              </View>
          </View>
          <BarChart
          style={{marginTop: 20}}
            data={data}
            width={screenWidth}
            height={450}
            yAxisLabel={'$'}
            chartConfig={chartConfig}
            />
            <View style={{flexDirection: 'row', marginTop: -30, backgroundColor: '#fff'}}>

                <View style={{flex: 5, alignItems: 'flex-end', marginTop: 20}}>

                    <Button title='Pie Graph' onPress={() => this.props.navigation.navigate('GraphPie')}/>
                </View>
                <View style={{flex: 5, alignItems: 'flex-start', marginTop: 20, marginLeft: 2}}>


                    <Button title='Bar Graph' disabled/>
                </View>
            </View>
            <View style={{flex: 1, marginTop: 25, alignItems: 'center'}}>
              <Text>You can export your graphics in your settings or </Text>
              <Text>find them on the web version</Text>
            </View>
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
    backgroundColor: '#fff'
  },
  date: {
   fontSize: 25,
   color: 'black',
    flexDirection: 'row',
       textAlign: "center",
     alignItems: 'center',
    justifyContent: 'center'
  }
});
