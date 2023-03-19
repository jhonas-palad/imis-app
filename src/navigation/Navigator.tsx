import RootStackNavigator from './RootStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Navigator: React.FC = () => {
    return (
        <NavigationContainer>
            <RootStackNavigator/>
        </NavigationContainer>
    )
}

export default Navigator;