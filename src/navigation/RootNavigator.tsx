import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Icon} from 'native-base';
import {Ionicons} from '@expo/vector-icons';
import ExampleScreen from '../screens/ExampleScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export const RootNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName :string;
                    let asIcon = Ionicons;
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
                        default: 
                            iconName='question';
                            break;
                    }

                    // You can return any component that you like here!
                    return <Icon as={asIcon} name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'brandPrimary.900',
                tabBarInactiveTintColor: 'brandPrimary.900',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Bookings" component={ExampleScreen} />
                <Tab.Screen name="Chat" component={ExampleScreen} />
                <Tab.Screen name="User" component={ExampleScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    ) 
}
