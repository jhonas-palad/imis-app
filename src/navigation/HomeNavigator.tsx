import { HomeView, MapLocation, ServiceSearchView } from '../components';
import React from 'react'
import {Box, Text} from 'native-base'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeStackParamList } from '.';
import ServiceNavigator from './ServiceDetails';


const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='HomeView'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeView" component={HomeView} />
      <Stack.Screen  name="Services" component={ServiceNavigator} />
      <Stack.Screen name="MapLocation" component={MapLocation} />
      <Stack.Screen name="ServiceSearch" component={ServiceSearchView} />
    </Stack.Navigator>
  )
}

export default HomeNavigator