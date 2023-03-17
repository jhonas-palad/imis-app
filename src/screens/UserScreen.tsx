import { Box, Text, Button, Pressable } from 'native-base';
import React, {useState} from 'react'
import Information from '../components/Information';
import LoginScreen from './LoginScreen';
const UserScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Information 
            imageSrc={require('../../assets/images/auth_icons/user_auth.png')}
        >
            <LoginScreen modalVisible={modalVisible}/>
            <Text fontWeight="700" fontSize="lg" m={5}>
                        You must be logged in to access this content.
                    </Text>
                    <Button
                        onPress={()=>{setModalVisible(true)}}
                        _text={{
                            fontSize: 'md',
                            fontWeight: '700'
                        }} 
                        mx={5} 
                        alignSelf="stretch" 
                        bg="orange.600"
                        rounded={12}
                    >
                        Login
                    </Button>
                    <Box m={5} flexDir="row" alignItems="center">
                        <Text mr={1}>
                            Don't have an account?
                        </Text>
                        <Pressable borderBottomWidth={1}>
                            <Text>
                                Sign up
                            </Text> 
                        </Pressable>
                    </Box>
        </Information>
    )
}

export default UserScreen