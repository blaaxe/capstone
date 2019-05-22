import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

class Settings extends Component {

  constructor(props) {

    super(props);


  }

  render() {
    return (

      <View style={styles.MainContainer}>

            <View style={styles.hello}>
                <View>
                  <Text style={styles.hola}> Hello </Text>
                </View>
                <View>
                  <Text style={styles.name}>Elyes, </Text>
                </View>
            </View>


            <View style={styles.first_line}>
      <Image 
      source={require('./profile_settings.png')}  
      style={{width: 50, height: 50}} />
              <View style={{ flex:2, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={styles.menu_setting_text} > Account </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Image source={require('./right_arrow.png')} style={styles.sideMenuIcon} />
              </View>


            </View>

               <View style={styles.other_lines}>

 <Image 
      source={require('./syringe_settings.png')}  
      style={{width: 50, height: 50}} />

              <View style={{ flex:2, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={styles.menu_setting_text} > Health </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Image source={require('./right_arrow.png')} style={styles.sideMenuIcon} />
              </View>


            </View>


            <View style={styles.other_lines}>
 <Image 
      source={require('./locker_settings.png')}  
      style={{width: 50, height: 50}} />
              <View style={{ flex:2, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={styles.menu_setting_text} > Privacy </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Image source={require('./right_arrow.png')} style={styles.sideMenuIcon} />
              </View>


            </View>


            <View style={styles.other_lines}>
 <Image 
      source={require('./help_settings.png')}  
      style={{width: 50, height: 50}} />
              <View style={{ flex:2, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={styles.menu_setting_text} > Help </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Image source={require('./right_arrow.png')} style={styles.sideMenuIcon} />
              </View>


            </View>


            <View style={styles.other_lines}>
 <Image 
      source={require('./general_settings.png')}  
      style={{width: 50, height: 50}} />
              <View style={{ flex:2, flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Text style={styles.menu_setting_text} > General </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Image source={require('./right_arrow.png')} style={styles.sideMenuIcon} />
              </View>


            </View>


      </View>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: '#FFF'
  },
hola: { 
  fontSize: 23,
  color: '#000'
},
name: {
  fontSize: 23, 
  fontWeight: 'bold', 
  color: '#000'
},
  hello: {
    fontSize: 25,
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 25
  },

    sideMenuIcon:
  {
    justifyContent: 'flex-end',
    width: 28,
    height: 28,
    marginRight: 45,
    left: 5
},

 menu_setting_text: {
    fontSize: 25,
    flexDirection: 'row',
    textAlign: "center",
     alignItems: 'center',
    justifyContent: 'center',
    color: '#000' ,
    left: 50
  },

  first_line: {
    flexDirection: 'row', 
    alignItems: 'center',
     marginTop: 60,
     left: 20
  },
  other_lines:  {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
    left: 20
  }
  
});
