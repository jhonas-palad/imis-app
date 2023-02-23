import { View, Text } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useServiceOrder } from '../context';

const ServiceDate = () => {
    const {serviceOrderDetails} = useServiceOrder();
    React.useEffect(()=>{
        console.log(serviceOrderDetails);
    }, []);
  return (
    <View>
      <Text>ServiceDate</Text>
    </View>
  )
}

export default ServiceDate