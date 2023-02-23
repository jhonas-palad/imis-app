import { HomeView, ServiceDetails } from '../components';
import React from 'react'
import {Box, Text} from 'native-base'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeStackParamList } from '.';
import ServiceNavigator from './ServiceDetails';


const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='HomeView' >
      <Stack.Screen name="HomeView" component={HomeView} />
      <Stack.Screen  name="Services" component={ServiceNavigator} initialParams={{}} />
    </Stack.Navigator>
  )
}

export default HomeNavigator