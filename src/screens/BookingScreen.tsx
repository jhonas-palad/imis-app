import { Box, Text, Button } from 'native-base';
import React from 'react'
import Information from '../components/Information';

const BookingScreen: React.FC = () => {
  return (
    <Information 
        imageSrc={require('../../assets/images/auth_icons/booking.png')}
    >
        <Text textAlign="center" fontWeight="700" fontSize="lg" m={5}>
                        Login to view your bookings
                </Text>
                <Button _text={{
                    fontSize: 'md',
                    fontWeight: '700'
                }} 
                mx={5} 
                alignSelf="stretch" 
                bg="orange.600"
                rounded={12}>
                        Login
                </Button>
    </Information>
  )
}

export default BookingScreen