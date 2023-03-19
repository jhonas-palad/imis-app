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
                        You must be logged in to access this content.
                    </Text>
                    <SigninButton navigation={navigation}/>
                    {/* <Box m={5} flexDir="row" alignItems="center">
                        <Text mr={1}>
                            Don't have an account?
                        </Text>
                        <Pressable borderBottomWidth={1}>
                            <Text>
                                Sign up
                            </Text> 
                        </Pressable>
                    </Box> */}
                    <Text fontSize="md" m={5} textAlign="center">
                        Click the button to proceed.
                    </Text>
        </Information>
    )
}

export default UserScreen