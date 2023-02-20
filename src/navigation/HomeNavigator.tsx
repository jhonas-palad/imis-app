import { HomeView, ServiceDetails } from '../components';
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeStackParamList } from '.';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='HomeView'>
      <Stack.Screen name="HomeView" component={HomeView} />
      <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
    </Stack.Navigator>
  )
}

export default HomeNavigator