import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import SplashScreen from '../screens/SplashScreen';
import AuthenticationStackNavigator from './AuthenticationStackNavigator';
import BaseTabNavigator from './BaseTabNavigator';

type RootStackParamList = {
    SplashScreen : undefined;
    BaseTabNavigation: undefined;
    AuthenticationStack: undefined;
    Maplocation: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator : React.FC =() => {
    return (
        <RootStack.Navigator
            screenOptions={{headerShown: false}} 
            initialRouteName='BaseTabNavigation'
            >
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="BaseTabNavigation" component={BaseTabNavigator}/>
            <RootStack.Screen 
                name="AuthenticationStack"
                options={{
                    animation: 'slide_from_bottom',
                    gestureEnabled: false
                }}
                component={AuthenticationStackNavigator}/>
        </RootStack.Navigator>
    )
}

export default RootStackNavigator;