import { Box, Text } from 'native-base';
import GoBackTitleHeader from '../components/GoBackTitleHeader';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const SignupScreen = () => {
    const navigation = useNavigation();
  return (
    <Box variant="base">
        {/* Header */}
        <GoBackTitleHeader navigation={navigation}>
            Create an account
        </GoBackTitleHeader>
    </Box>

  )
}

export default SignupScreen