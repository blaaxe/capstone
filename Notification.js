import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

class Notifications extends Component {

  constructor(props) {

    super(props);


  }

  render() {
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
        </View>
    );
  }
}

export default Notifications;

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: '#FFF'

  },
  chevrons: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
  },
  date_text: {
    fontSize: 15,
    color: '#000'
  },
  date: {
   fontSize: 25,
    flexDirection: 'row',
       textAlign: "center",
     alignItems: 'center',
    justifyContent: 'center'
  },

});
