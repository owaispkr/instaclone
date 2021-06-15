import { StatusBar } from "expo-status-bar";
import React from "react";
import firebase from "firebase/app"
import "firebase/auth"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
