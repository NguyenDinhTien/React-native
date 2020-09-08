import { StatusBar } from "expo-status-bar";
import axios from "axios";
import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import AppNavigator from "./src/AppNavigator";
import {Provider} from 'react-redux';
import store from './src/store';

//axios.defaults.baseURL = "http://192.168.1.7:3000";
axios.defaults.baseURL = "http://192.168.1.14:3000";

export default function App() {
    
  return (
    <Provider store = {store} >
       <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ffff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
