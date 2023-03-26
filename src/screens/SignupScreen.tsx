import { Box, Center,Text, Input, VStack, Heading, Button, Pressable, } from 'native-base';
import GoBackTitleHeader from '../components/GoBackTitleHeader';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View,  ScrollView } from 'react-native';
import React from 'react';
import Container from '../components/Container';
import { Platform,  InputAccessoryView} from 'react-native';

const SignupScreen = () => {
    const navigation = useNavigation();
  return (
    <>
    
        <Container base>
            <GoBackTitleHeader title="Get Started" navigation={navigation}/>
            <Box>
                <Input 
                    inputAccessoryViewID="NUMBER_INPUT"
                    _focus={{
                        bg:"transparent",
                        borderWidth: 1,
                        borderColor: "primary.500"
                    }}
                    p={4}
                    keyboardType="number-pad"
                    InputLeftElement={
                        <Center p={2} alignSelf="stretch" bg="amber.200">
                            <Text>(+63)</Text>
                        </Center>
                    }
                    // InputRightElement={
                    //     // CLearvbtn
                    // }
                />
            </Box>
        </Container>
        <InputAccessoryView nativeID="NUMBER_INPUT">
            <Box borderTopWidth={0.5} borderTopColor="coolGray.300" bg="coolGray.100" flexDir='row' justifyContent='flex-end' alignItems='center'>
                <Button onPress={Keyboard.dismiss} bg="none" _text={{color:'darkBlue.700', fontWeight:500, fontSize:"lg"}}>
                    Done
                </Button>
            </Box>
        </InputAccessoryView>
    </>

                
  )
}

export default SignupScreen