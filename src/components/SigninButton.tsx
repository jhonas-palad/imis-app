import { Button } from 'native-base';
import React from 'react';

type Props = {
    navigation: any,
    _style?: any
}
export const SigninButton: React.FC<Props> = ({navigation, _style}) => {
  return (
        <Button 
            onPress={()=>{navigation.navigate('AuthenticationStack', {screen: 'AuthScreen'})}}
            _text={{
                fontSize: 'md',
                fontWeight: '700'
            }} 
            mx={5} 
            alignSelf="stretch" 
            bg="primary.400"
            rounded="full"
            {..._style}
            >
                Sign in / Sign up
        </Button>
  )
}
export default SigninButton;