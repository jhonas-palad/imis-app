import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Icon} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import ExampleScreen from '../screens/ExampleScreen';
import BookingScreen from '../screens/BookingScreen';
import React from 'react'
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeNavigator from "./HomeNavigator";
import UserScreen from "../screens/UserScreen";
import ChatScreen from "../screens/ChatScreen";
type RootStackParamList = {
    Home: undefined;
    Bookings: { name: string };
    Chat: undefined;
    User: undefined;
}

const Tab = createBottomTabNavigator<RootStackParamList>();

const HIDDEN_TABS_NAME = [
    'Services',
    'ServiceSearch'
]
const getHiddenTabs = (route : RouteProp<RootStackParamList>) => {
    const tabName = getFocusedRouteNameFromRoute(route);
    return HIDDEN_TABS_NAME.includes(tabName) ? 'none' : 'flex';
}

export const RootNavigator: React.FC = () => {
    return (
            <Tab.Navigator 
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName :string;
                        const {name} = route;
                        switch (name){
                            case 'Home':
                                iconName = focused ? 'ios-home' : 'ios-home-outline';
                                break;
                            case 'Bookings':
                                iconName = focused ? 'ios-book' : 'ios-book-outline';
                                break;
                            case 'Chat':
                                iconName = focused ? 'ios-chatbubble' : 'ios-chatbubble-outline';
                                break;
                            case 'User':
                                iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
                                break;
                        }
                        return <Icon as={Ionicons} name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'darkBlue.800',
                    tabBarInactiveTintColor: 'darkBlue.800',
                    headerShown: true,
                })}
            >
                <Tab.Screen 
                    name="Home"
                    options={({route}) => ({
                        tabBarStyle:{
                            position:'absolute',
                            display: getHiddenTabs(route)
                        },
                        headerShown: false
                    })}
                    component={HomeNavigator} />
                <Tab.Screen 
                    name="Bookings"
                    component={BookingScreen} />
                <Tab.Screen 
                    name="Chat" 
                    component={ChatScreen} />
                <Tab.Screen 
                    name="User" 
                    options={{
                        title: "Profile"
                    }} component={UserScreen} />
            </Tab.Navigator>
    ) 
}

