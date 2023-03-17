import { View, Text, Modal } from 'react-native';
import {Box} from 'native-base';
import React from 'react'

type LoginProps = {
    modalVisible: boolean;
}

const LoginScreen: React.FC<LoginProps> = ({modalVisible}) => {
    const [_modalVisible, setModalVisible] = React.useState(modalVisible);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}>
        <Text>LoginScreen</Text>
        </Modal>
    )
}

export default LoginScreen