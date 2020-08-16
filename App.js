import { StatusBar } from 'expo-status-bar';
import axios from 'axios'
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import AppNavigator from './AppNavigator';

axios.defaults.baseURL='http://192.168.1.6:3000';

export default function App() {

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffff',
    alignItems: 'stretch',
    justifyContent: 'center',

  },
});
