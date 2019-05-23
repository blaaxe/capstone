import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';


class HamburgerIcon extends Component {


  render() {

    return (

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity onPress={() => this.props.navigate('DrawerOpen')} >

          <Image
            source={require('./white_menu_icon.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />

        </TouchableOpacity>

      </View>

    );


  }
}

export default HamburgerIcon
