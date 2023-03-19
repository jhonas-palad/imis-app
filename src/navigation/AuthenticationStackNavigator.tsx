import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';
import AuthScreen from '../screens/AuthScreen';
type AuthenticationStackParamList = {
    Signin: undefined;
    Signup: undefined;
    AuthScreen: undefined;
}

const AuthenticationStack = createNativeStackNavigator<AuthenticationStackParamList>();

const AuthenticationStackNavigator: React.FC = () => {
    return (
        <AuthenticationStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthenticationStack.Screen 
                options={{
                    title:'Sign in',
                    
                }}
                name="Signin" 
                component={SigninScreen}/>
            <AuthenticationStack.Screen 
                options={{
            
                }}
                name="Signup" component={SignupScreen}/>
            <AuthenticationStack.Screen name="AuthScreen" component={AuthScreen} />
        </AuthenticationStack.Navigator>
    )
}

export default AuthenticationStackNavigator;