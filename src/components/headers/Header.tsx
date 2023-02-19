import { Box, Avatar, HStack, Heading, Icon, IconButton } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import React from 'react'

const Header = () => {
  return (
    <Box safeAreaTop
        paddingX={5}
        bg="coolGray.100"
    >
    <HStack
        justifyContent="space-between"
        alignItems="center"
    >
      <Box flexDir="row">
        <Heading color="orange.600">P</Heading>
        <Heading color="brandPrimary.600">hy</Heading>
        <Heading color="orange.600">xi</Heading>
      </Box>
        <IconButton _pressed={{
          opacity: 0.5,
          bg: null
        }} icon={<Icon as={Ionicons} name="ios-notifications" size="md" color="darkBlue.400" />} />
        {/* <Avatar bg="purple.600" alignSelf="center" size="md" source={{
        uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        }}>RB</Avatar> */}
    </HStack>
    </Box>
  )
}

export default Header