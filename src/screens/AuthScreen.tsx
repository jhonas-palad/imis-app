import { Box,Divider, Text, Button, HStack, Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import Information from '../components/Information';
import AuthButton from '../components/AuthButton';

const AuthScreen: React.FC = () => {
    const navigation = useNavigation();

  return (
    <Information 
        _containerStyle={{bg:"secondary.500"}}
        _statusBar='light-content'
        imageSrc={require('../../assets/images/auth_icons/3.png')}>
        {/* <Button
            _text={{
                fontSize: 'md',
                fontWeight: '700',
                color:"primary.600"
            }} 
            mx={5} 
            alignSelf="stretch" 
            
            _light={{
                borderColor:"primary.500",
                bg:'white'
            }}
            rounded="full"
            onPress={()=>{
                navigation.navigate('Signup')
            }}
        >
            Create an account
        </Button> */}
        <AuthButton 
            title='Create an Account'
            borderColor='white'
            bg="white"
            textColor='primary.600'
            _style={{
                alignSelf:'stretch'
            }}
            onPress={()=>{navigation.navigate('Signup')}}
        />
        <Text my={5} fontWeight="bold" color="white" fontSize="md" textAlign="center">
            Have already an account?
        </Text>
        <AuthButton 
            title='Sign in'
            borderColor='primary.600'
            bg="primary.600"
            textColor='white'
            _style={{
                alignSelf:'stretch'
            }}
            onPress={()=>{navigation.navigate('Signin')}}
        />
        <Button position="absolute" 
            bottom={10} 
            right={5} 
            borderColor="white" 
            borderWidth={2} 
            rounded="full" 
            bg="transparent" 
            _text={{
                color:"white",
                fontSize:"sm",
                fontWeight: "bold"
            }}
            onPress={()=>{
                const {navigate, canGoBack, goBack} = navigation;
                canGoBack ? goBack() : navigate('Home')
            }}
            py={1}
            px={4}
        >
            Skip
        </Button>
    </Information>
  )
}

export default AuthScreen