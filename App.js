import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import HamburgerIcon from './hamburgericon';
import Custom_Side_Menu from './customSideMenu';
import Home from './Home';
import Notifications from './Notification';
import Graphs from './Graphs';
import Profile from './Profile';
import Settings from './Settings';
import {Signin} from "./Signin";
import {Signup} from "./Signup";
import {SignupProfil} from "./SignupProfil";
import {SignupDoctor} from "./SignupDoctor";
import {SignupEmergency} from "./SignupEmergencyContact";

const Login_StackNavigator = StackNavigator({
  LoginPage: {
    screen: Signin,
    navigationOptions: {
      header: null
    }
  },
  SignupStepOne: {
    screen: Signup,
    navigationOptions: {
      header: null
    }
  },
  SignupStepTwo: {
    screen: SignupProfil,
    navigationOptions: {
      header: null
    }
  },
  SignupStepThree: {
    screen: SignupDoctor,
    navigationOptions: {
      header: null
    }
  },
  SignupStepFour: {
    screen: SignupEmergency,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <HamburgerIcon navigate={navigation.navigate} />,

      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#000',
    })
  },
});

const Home_StackNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <HamburgerIcon navigate={navigation.navigate} />,

      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#000',
    })
  },
});

const Notifications_StackNavigator = StackNavigator({
  Notifications: {
    screen: Notifications,
    navigationOptions: ({ navigation }) => ({
      title: 'Notifications',
      headerLeft: <HamburgerIcon navigate={navigation.navigate} />,

      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#000',
    })
  },
});

const Graphs_StackNavigator = StackNavigator({
  Graphs: {
    screen: Graphs,
    navigationOptions: ({ navigation }) => ({
      title: 'Graphs',
      headerLeft: <HamburgerIcon navigate={navigation.navigate} />,

      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#000',
    })
  },
});

const Profile_StackNavigator = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HamburgerIcon navigate={navigation.navigate} />,

      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#000',
    })
  },
});

const Settings_StackNavigator = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <HamburgerIcon navigate={navigation.navigate} />,

      headerStyle: {
        backgroundColor: '#fff'
      },
      headerTintColor: '#000',
    })
  },
});

export default MyDrawerNavigator = DrawerNavigator({
  LoginStack: {
    screen: Login_StackNavigator
  },
  MainStack: {
    screen: Home_StackNavigator
  },

  SecondStack: {
    screen: Notifications_StackNavigator
  },

  ThirdStack: {
    screen: Graphs_StackNavigator
  },

  FourthStack: {
    screen: Profile_StackNavigator
  },

  FifthStack: {
    screen: Settings_StackNavigator
  }
},
  {
    contentComponent: Custom_Side_Menu,
    drawerWidth: Dimensions.get('window').width - 130,
  });
