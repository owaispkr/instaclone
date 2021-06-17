import { StatusBar } from "expo-status-bar";
import React, { Component } from 'react'

import firebase from "firebase/app"
import "firebase/auth"

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import LoginScreen from "./components/auth/Login";

import { View, Text } from 'react-native'

const firebaseConfig = {
  apiKey: "AIzaSyCLr2XJTP939B5f_dzbuSMNU5VZQdQI8K4",
  authDomain: "instaclone-38279.firebaseapp.com",
  projectId: "instaclone-38279",
  storageBucket: "instaclone-38279.appspot.com",
  messagingSenderId: "782684658588",
  appId: "1:782684658588:web:9c35b5f91f7f430e850659",
  measurementId: "G-LE3L5YLRT0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();

export class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      loaded : false,
      loggedIn: false,
    };

  }

  componentDidMount(){
    
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }
      else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    });

  }
  
  
  render() {

    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>User is logged in</Text>
      </View>
    )
  
  }
}

export default App



