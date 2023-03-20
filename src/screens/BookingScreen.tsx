import { Box, Text } from 'native-base';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
//Components
import Information from '../components/Information';
import SigninButton from '../components/SigninButton';
const BookingScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Information 
        imageSrc={require('../../assets/images/auth_icons/booking.png')}
    >
        <Text textAlign="center" fontWeight="700" fontSize="lg" m={5}>
          View your booked services
        </Text>
        <SigninButton navigation={navigation}/>
        <Text variant="lightMd" textAlign="center" m={5}>
          Provides you an overview of recently booked services.
        </Text>
    </Information>
  )
}

export default BookingScreen