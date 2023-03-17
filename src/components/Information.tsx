import { Box, Button, Text, Center, Image, Pressable } from 'native-base';
import { StatusBar, StatusBarStyle } from 'react-native';
import React, {ReactNode} from 'react'

type InformationProps = {
    _statusBar?: StatusBarStyle;
    imageSrc: number;
    children: ReactNode;

}

const Information: React.FC<InformationProps> = ({_statusBar = 'dark-content', imageSrc , children}) => {
  
    return (
    <>
        <StatusBar barStyle={_statusBar}/>
        <Box variant='base' safeAreaTop={0}>
        <Center flex={1} alignItems="center">
                <Image source={imageSrc} 
                    resizeMode='cover' size="2xl" alt="content_info"
                />
                {children}
            </Center>
        </Box>
    </>
  )
}

export default Information