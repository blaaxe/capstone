import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

class Custom_Side_Menu extends Component {

  render() {

    return (

      <View style={styles.sideMenuContainer}>

        <Text style={{fontSize: 45, color: '#fff', marginTop: 50}} > AYUDIAB </Text>

        <View style={{ width: '100%', height: 50, backgroundColor: '#0575e6', marginTop: 15}} />

        <View style={{width: '100%'}}>

            <View style={{flexDirection: 'row', marginTop: 10}}>

              <View style={{ flex:3, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Home') }} > Home </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon_3-150x150.png' }}
                style={styles.sideMenuIcon} />
              </View>

            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

              <View style={{ flex:3, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Notifications') }} > Notifications </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon_3-150x150.png' }}
                style={styles.sideMenuIcon} />
              </View>


            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

              <View style={{ flex:3, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Graphs') }} > Graphs </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon_3-150x150.png' }}
                style={styles.sideMenuIcon} />
              </View>


            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

              <View style={{ flex:3, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Profile') }} > Profile </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon_3-150x150.png' }}
                style={styles.sideMenuIcon} />
              </View>


            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>

              <View style={{ flex:3, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={styles.menuText} onPress={() => { this.props.navigation.navigate('Settings') }} > Settings </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon_3-150x150.png' }}
                style={styles.sideMenuIcon} />
              </View>


            </View>

       </View>

       <View style={{ width: '100%', height: 55, backgroundColor: '#0575e6', marginTop: 15}} />

       <Text style={{fontSize: 25, color: '#fff', marginLeft: 90}} onPress={() => { this.props.navigation.navigate('LoginPage')}}> Log Out </Text>


      </View>
    );
  }
}

export default Custom_Side_Menu;

const styles = StyleSheet.create({

  sideMenuContainer: {

    width: '100%',
    height: '100%',
    backgroundColor: '#0575e6',
    alignItems: 'center',
    paddingTop: 25
  },

  sideMenuProfileIcon:
  {
    resizeMode: 'center',
    width: 150,
    height: 150,
    borderRadius: 150/2
  },

  sideMenuIcon:
  {
    justifyContent: 'flex-end',
    width: 28,
    height: 28,
    marginRight: 10,
    left: 5

  },

  menuText:{

    fontSize: 30,
    color: '#fff'

  }

});
