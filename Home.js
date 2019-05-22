import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import ProgressCircle from 'react-native-progress-circle-rtl';

class Home extends Component {

  constructor(props) {

    super(props);

  }

  render() {
    return (

      <View style={styles.MainContainer}>


            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 130}}>

                <View>
                  <Text style={{ fontSize: 23}}> Hello </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 23, fontWeight: 'bold'}}>Elyes, </Text>
                </View>
            </View>

            <Image
              style={{width: 250, height: 250, marginLeft: 90, marginTop: 50}}
              source={require('./electrical-sensor.png')}
            />
            <View style={{width: '100%'}}>
                  <View style={{flexDirection: 'row', marginTop: 50}}>

                      <View style={{ flex:1}}>
                        <Image
                          style={{width: 20, height: 20, marginLeft: 10, marginTop: 2}}
                          source={require('./logo-clock.png')}
                        />
                      </View>
                      <View style={{ flex:10, justifyContent: 'flex-start'}}>
                        <Text style={{color: '#000', fontSize: 17}}> Your last scan was 1 hour ago</Text>
                      </View>
                  </View>


                  <View style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#fafafa', height: 200}}>

                      <View style={{flex: 5, alignItems: 'center', marginTop: 20}}>
                          <ProgressCircle
                              percent={70}
                              radius={50}
                              borderWidth={8}
                              color="#0575e6"
                              shadowColor="#d4e4fb"
                              bgColor="#fff"
                          >
                              <Text style={{ fontSize: 18 }}>{'0.4 mg/L'}</Text>
                          </ProgressCircle>
                          <Text style={{ fontSize: 20, marginTop: 5}}>Glucose</Text>
                      </View>
                      <View style={{flex: 5, alignItems: 'center', marginTop: 20}}>
                          <ProgressCircle
                              percent={50}
                              radius={50}
                              borderWidth={8}
                              color="#ffff00"
                              shadowColor="#ffffb3"
                              bgColor="#fff"
                          >
                              <Text style={{ fontSize: 18 }}>{'50%'}</Text>
                          </ProgressCircle>
                          <Text style={{ fontSize: 20, marginTop: 5}}>Overall</Text>
                      </View>
                  </View>
            </View>

      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: '#fff'

  }

});
