import React, { Component } from 'react';
import { ScrollView, StatusBar, StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import PieChart from 'react-native-pie-chart';


class GraphPie extends Component {

  constructor(props) {

    super(props);


  }

  render() {

    const chart_wh = 300;
    const series = [55, 35, 10];
    const sliceColor = ['#15c72c', '#fdd200', '#ff0000'];

    return (

      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
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
          <StatusBar
            hidden={true}
          />
          <PieChart
          style={{marginTop: 20}}
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.70}
            coverFill={'#fff'}
          />
        </View>

        <View style={{flexDirection: 'row', marginTop: 30, backgroundColor: '#fff'}}>

            <View style={{flex: 5, alignItems: 'center', marginTop: 20}}>
                <View style={styles.circlev}></View>
                <Text style={{ fontSize: 20, marginTop: 20}}>Safe</Text>
            </View>
            <View style={{flex: 5, alignItems: 'center', marginTop: 20}}>

                  <View style={styles.circlej}></View>

                <Text style={{ fontSize: 20, marginTop: 20}}>Low Risk</Text>
            </View>
            <View style={{flex: 5, alignItems: 'center', marginTop: 20}}>

                  <View style={styles.circler}></View>

                <Text style={{ fontSize: 20, marginTop: 20}}>Risk</Text>
            </View>

        </View>
        <View style={{flexDirection: 'row', marginTop: 30, backgroundColor: '#fff'}}>

            <View style={{flex: 5, alignItems: 'flex-end'}}>

                <Button title='Pie Graph' disabled/>
            </View>
            <View style={{flex: 5, alignItems: 'flex-start', marginLeft: 2}}>

                <Button title='Bar Graph' onPress={() => this.props.navigation.navigate('Graphs')}/>
            </View>
        </View>
        <View style={{flex: 1, marginTop: 30, alignItems: 'center'}}>
          <Text>You can export your graphics in your settings or </Text>
          <Text>find them on the web version</Text>
        </View>
      </ScrollView>
    );
  }
}

export default GraphPie;

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  },
  circlev: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    backgroundColor: '#15c72c'
  },
  circlej: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    backgroundColor: '#fdd200'
  },
  circler: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    backgroundColor: '#ff0000'
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
