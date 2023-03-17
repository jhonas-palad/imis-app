import { View, Modal, StatusBar } from 'react-native';
import {Box, Button, Input, HStack, Text} from 'native-base';
import CloseButton from '../components/CloseButton'; 
import React from 'react'

type LoginProps = {
    modalVisible: boolean;
    setModalVisible: (state: boolean) => void;
}

const LoginScreen: React.FC<LoginProps> = ({modalVisible, setModalVisible}) => {
    return (
        <>
            <StatusBar barStyle='dark-content'/>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                presentationStyle='fullScreen'
                onRequestClose={() => {
                setModalVisible(false);
                }}>
                <Box variant="base">
                    {/* Modal Contents */}
                    <HStack mt={5} m={2} justifyContent="center" alignItems="center">
                        <CloseButton _style={{position:'absolute', left:2}} onPress={()=>{setModalVisible(false)}}/>
                        <Text fontWeight="700" fontSize="xl">
                            Login
                        </Text>
                    </HStack>
                    <Box>
                        <Input/>
                    </Box>
                </Box>
            </Modal>
        </>
    )   
}

export default LoginScreen