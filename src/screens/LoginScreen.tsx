import { View, Modal, StatusBar } from 'react-native';
import {Box, Button, HStack, Text} from 'native-base';
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
                    <HStack mt={5} m={2} bg="amber.100" justifyContent="space-between" alignItems="center" >
                        <CloseButton _style={{alignSelf: 'flex-start'}} onPress={()=> setModalVisible(false)}/> 
                        <Box>
                            
                            <Text>
                                Login
                            </Text>
                        </Box>
                    </HStack>
                    
                </Box>
            </Modal>
        </>
    )   
}

export default LoginScreen