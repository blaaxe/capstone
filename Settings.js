import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

class Settings extends Component {

  constructor(props) {

    super(props);


  }

  render() {
    return (

      <View style={styles.MainContainer}>

        <Text style={{ fontSize: 23 }}> This is Activity - Settings </Text>

      </View>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',

  }
  
});
