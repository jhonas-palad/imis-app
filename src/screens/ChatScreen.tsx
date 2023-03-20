import { Box, Text, Button, Pressable } from 'native-base';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

// Components
import Information from '../components/Information';
import SigninButton from '../components/SigninButton';
const ChatScreen = () => {
  const navigation = useNavigation();
  return (
    <Information 
        imageSrc={require('../../assets/images/auth_icons/5.png')}
    >
        <Text textAlign="center" fontWeight="700" fontSize="lg" m={5}>
            Get in touch with service providers 
        </Text>
        <SigninButton navigation={navigation}/>
        <Text variant="lightMd" textAlign="center" m={5}>
          This ensures faster response times and quicker resolution of issues. 
        </Text>
    </Information>
  )
}

export default ChatScreen