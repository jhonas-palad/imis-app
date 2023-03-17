import { Box, Text, Button, Pressable } from 'native-base';
import React from 'react'
import Information from '../components/Information';

const ChatScreen = () => {
  return (
    <Information 
        imageSrc={require('../../assets/images/auth_icons/5.png')}
    >
        <Text textAlign="center" fontWeight="700" fontSize="lg" m={5}>
            Whoops, this feature is only available to registered users.
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

export default ChatScreen