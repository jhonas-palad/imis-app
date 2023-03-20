import { Box, Text, Pressable } from 'native-base';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Information from '../components/Information';
import SigninButton from '../components/SigninButton';

const UserScreen = () => {
    const navigation = useNavigation();
    return (
        <Information 
            imageSrc={require('../../assets/images/auth_icons/user_auth.png')}
        >
            <Text fontWeight="700" textAlign="center" fontSize="lg" m={5}>
                Account's profile
            </Text>
            <SigninButton navigation={navigation}/>
            <Text variant="lightMd" m={5} textAlign="center">
                View and modify your profile.
            </Text>
        </Information>
    )
}

export default UserScreen