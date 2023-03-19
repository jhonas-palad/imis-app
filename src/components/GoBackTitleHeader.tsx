import { Box, Text, HStack } from 'native-base';
import BackButton from './BackButton';
import React from 'react';

type Props = {
    navigation: any;
    children: React.ReactNode;
}

const GoBackTitleHeader: React.FC<Props> = ({navigation, children}) => {
  return (
    <HStack m={2} mt={3} justifyContent="center" alignItems="center">
        <BackButton 
            _style={{position:'absolute', left:2}} 
            navigation={navigation}/>
        <Text fontWeight="700" fontSize="md">
            {children}
        </Text>
    </HStack>
  )
}

export default GoBackTitleHeader