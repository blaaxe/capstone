import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions, ImageBackground  } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

class Profile extends Component {

  constructor(props) {

    super(props);


  }

  render() {
    return (

      <View style={styles.MainContainer}>

<ImageBackground source={require('./profile_background.png')}
 style={{flex: 1, width: '100%', height: '100%'}}>

	<Image 
    	source={require('./profile_picture.jpg')}  
    	style={styles.PP} />
    
    <Text style={styles.name}> Elyes Ghalaza</Text>
    <Text style={styles.age}> 22 years</Text>

 <View style={styles.pin}>
 <Image 
    	source={require('./pin_profile.png')}  
    	style={{width: 20, height: 20}} />
    <Text style={ styles.address }> 288 Portobello Road, England </Text>
 </View>

  <View style={styles.phone}>
 <Image 
    	source={require('./phone_profile.png')}  
    	style={{width: 20, height: 20}} />
    <Text style={ styles.number }> +33 6 23 45 20 16 </Text>
 </View>

   <View style={styles.blood_type}>
 <Image 
    	source={require('./blood_type_profile.png')}  
    	style={{width: 20, height: 20}} />
    <Text style={ styles.bloodType }> AB+ blood type </Text>
 </View>
 </ImageBackground>

      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',

  },
  PP: {
width: 240, 
height: 240, 
borderRadius: 240/ 2, 
marginTop: 50,
marginLeft: 85
  },
  name: {
    fontFamily: 'HelveticaNeueCondensedBlack',
    fontSize: 25,
    color: "#000",
    textAlign: "center",
     alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
    age: {
    fontFamily: 'HelveticaNeueCondensed',
    fontSize: 20,
    color: "#000",
    textAlign: "center",
     alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 70
  },
  pin: {
	flexDirection: 'row',
	alignItems: 'center',
	 alignItems: 'center',
    justifyContent: 'center',
	marginTop: 40
  },
  address: {
  	fontFamily: 'HelveticaNeueCondensed',
  	 alignItems: 'center',
    justifyContent: 'center',
  	fontSize: 17,
  	color: "#000"
  },
    phone: {
	flexDirection: 'row',
	marginTop: 20,
	 alignItems: 'center',
    justifyContent: 'center',
	marginLeft: -85
  },
  number: {
  	fontFamily: 'HelveticaNeueCondensed',
  	fontSize: 17,
  	 alignItems: 'center',
    justifyContent: 'center',
  	color: "#000"
  },
      blood_type: {
	flexDirection: 'row',
	marginTop: 15,
	 alignItems: 'center',
    justifyContent: 'center',
	marginLeft: -100
  },
  bloodType: {
  	fontFamily: 'HelveticaNeueCondensed',
  	fontSize: 17,
  	 alignItems: 'center',
    justifyContent: 'center',
  	color: "#000"
  }
});
