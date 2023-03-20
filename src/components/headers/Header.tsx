import { Box, Avatar, HStack, Heading, Icon, IconButton } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import React from 'react'

const Header = () => {
  return (
    <Box safeAreaTop
        paddingX={5}
        _light={{bg:'white'}}
        _dark={{bg:'coolGray.700'}}
    >
    <HStack
        justifyContent="space-between"
        alignItems="center"
    >
      <Box flexDir="row">
        <Heading color="primary.600">P</Heading>
        <Heading color="brandPrimary.600">hy</Heading>
        <Heading color="primary.600">xi</Heading>
      </Box>
        <IconButton _pressed={{
          opacity: 0.5,
          bg: null
        }} icon={<Icon as={Ionicons} name="ios-notifications" size="md" color="darkBlue.400" />} />
    </HStack>
    </Box>
  )
}

export default Header