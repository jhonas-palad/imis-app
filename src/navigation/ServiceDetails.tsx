import { ServiceDetails, ServiceDate } from '../components';
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {ServiceOrderProvider} from '../context';
const ServiceStack = createNativeStackNavigator();

const ServiceNavigator = () => {
    const navigation = useNavigation();
    React.useEffect(()=> {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    return (
        <ServiceOrderProvider>
            <ServiceStack.Navigator>
                <ServiceStack.Screen name="Details" component={ServiceDetails} />
                <ServiceStack.Screen name="Date" component={ServiceDate}/>
            </ServiceStack.Navigator>
        </ServiceOrderProvider>
    )
}

export default ServiceNavigator