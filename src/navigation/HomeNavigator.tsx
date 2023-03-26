import { MapLocation, ServiceSearchView } from '../components';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServiceNavigator from './ServiceDetails';
import HomeScreen from '../screens/HomeScreen';


type HomeStackParamList = {
  HomeScreen : undefined;
  Services: undefined;
  MapLocation: undefined;
  ServiceSearch: undefined
}

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator 
        initialRouteName='HomeScreen'
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen 
        name="HomeScreen"
        component={HomeScreen} />
      <Stack.Screen name="Services" component={ServiceNavigator} />
      <Stack.Screen name="MapLocation" 
        options={{
          presentation: 'modal'
        }}
        component={MapLocation} />
      <Stack.Screen name="ServiceSearch" component={ServiceSearchView} />
    </Stack.Navigator>
  )
}

export default HomeNavigator