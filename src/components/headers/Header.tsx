import { Box, Avatar, HStack, Text, IconButton, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import React from 'react'

const Header = () => {
  return (
    <Box safeArea
        paddingX={5}
    >
    <HStack
        justifyContent="space-between"
    >
        
        <Avatar bg="purple.600" alignSelf="center" size="md" source={{
        uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        }}>RB</Avatar>
        <IconButton
            
            icon={<Icon as={Ionicons} name="ios-search"
            
            />}
        />
    </HStack>
    </Box>
  )
}

export default Header