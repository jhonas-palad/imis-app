import { Box,Divider, Text, Button, HStack, Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import Information from '../components/Information';


const AuthScreen: React.FC = () => {
    const navigation = useNavigation();

  return (
    <Information 
        _containerStyle={{bg:"darkBlue.700"}}
        _statusBar='light-content'
        imageSrc={require('../../assets/images/auth_icons/3.png')}>
        <Button
            _text={{
                fontSize: 'md',
                fontWeight: '700',
                color:"orange.600"
            }} 
            mx={5} 
            alignSelf="stretch" 
            
            _light={{
                borderColor:"orange.500",
                bg:'white'
            }}
            rounded="full"
            onPress={()=>{
                navigation.navigate('Signup')
            }}
        >
            Create an account
        </Button>
        
        <Text my={5} fontWeight="bold" color="white" fontSize="md" textAlign="center">
            Have already an account?
        </Text>

        <Button
            _text={{
                fontSize: 'md',
                fontWeight: '700'
            }} 
            mx={5} 
            alignSelf="stretch" 
            bg="orange.500"
            rounded={18}
            onPress={()=>{
                navigation.navigate('Signin');
            }}
        >
            Sign in
        </Button>
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