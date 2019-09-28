import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FirstTab from './screens/FirstTab'
import SecondTab from './screens/SecondTab'
import ThirdTab from './screens/ThirdTab'

/* const AppNavigator = createStackNavigator({    
  One: FirstTab,
  Two: SecondTab
});

export default createAppContainer(AppNavigator) */


const TabNavigator = createBottomTabNavigator({
  One: { screen: FirstTab },
  Two: { screen: SecondTab },
  Three: { screen: ThirdTab },
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});