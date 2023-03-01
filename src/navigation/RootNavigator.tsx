import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Icon} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import ExampleScreen from '../screens/ExampleScreen';
import BookingScreen from '../screens/BookingScreen';
import HomeScreen from '../screens/HomeScreen';

type RootStackParamList = {
    Home: undefined;
    Bookings: { name: string };
    Chat: undefined;
    User: undefined;
}

const Tab = createBottomTabNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
    return (
        <NavigationContainer>
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
                    headerShown: false
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Bookings" component={BookingScreen} />
                <Tab.Screen name="Chat" component={ExampleScreen} />
                <Tab.Screen name="User" component={ExampleScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    ) 
}

