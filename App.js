import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/welcome';
import {AppDrawerNagivator} from './components/appDrawerNavig';

export default function App(){
  return (
    <AppContainer/>
  );}

const switchNavigator = createSwitchNavigator({
    FirstScreen: {screen: WelcomeScreen},
    Drawer: {screen: AppDrawerNagivator}
})

const AppContainer = createAppContainer(switchNavigator)