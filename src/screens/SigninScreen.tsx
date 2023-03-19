import { View, KeyboardAvoidingView, StatusBar } from 'react-native';
import {Box, Button,Center,Input, HStack, Text, ScrollView, VStack, Icon, Pressable, Image} from 'native-base';
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { BackButton } from '../components';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import WordBetweenLines from '../components/WordBetweenLines';
import GoBackTitleHeader from '../components/GoBackTitleHeader';


const BUTTONS_INFO = [
    {
        title: 'Google',
        icon: {
            as: AntDesign,
            name: "google",
            color: ""
        },
        borderColor: "orange.500",
        bg: "white",
        textColor: "orange.500"
    },
    {
        title: 'Facebook',
        icon: {
            as: MaterialIcons,
            name: "facebook",
            color: ""
        },
        borderColor: "orange.500",
        bg: "white",
        textColor: "orange.500"
    },
    {
        title: 'Email',
        icon: {
            as: MaterialIcons,
            name: "alternate-email",
            color: "white"
        },
        borderColor: "orange.500",
        bg: "orange.500",
        textColor: "white"
    },
    {
        title: 'Mobile number',
        icon: {
            as: AntDesign,
            name: "mobile1",
            color: "white"
        },
        borderColor: "orange.500",
        bg: "orange.500",
        textColor: "white"
    }
]

const SigninScreen: React.FC = () => {
    const navigation = useNavigation();
    const [upperButtons, setUpperButtons] = React.useState([]);
    const [lowerButtons, setLowerButtons] = React.useState([]);

    React.useEffect(()=>{
        const _upperButtons = [];
        const _lowerButtons = [];
        BUTTONS_INFO.forEach( 
            (item) => {
                item.title === 'Mobile number' || item.title === 'Email' ? _lowerButtons.push(item) : _upperButtons.push(item) });

        setUpperButtons(_upperButtons);
        setLowerButtons(_lowerButtons);
    }, []);
    const createButton = React.useCallback((btnInfo)=>{
        const {title, icon, borderColor, bg, textColor} = btnInfo;
        return (

            <Pressable
                key={title} 
                px={5}
                py={4}
                flexDir="row" 
                justifyContent="center" 
                alignItems="center"
                bg={bg}
                borderColor={borderColor}
                borderWidth={2}
                mx={5}
                my={2}
                rounded="full"
            >
                <Icon {...icon} position="absolute" left={6}/>
                <Text fontWeight="bold" color={textColor ?? ''}>
                    Continue with {title}
                </Text>
            </Pressable>
        )
    },[]);

    return (
        <>
            <StatusBar barStyle='dark-content' />
            <Box variant="base" safeAreaBottom justifyContent="space-between">
                {/* Header */}
                <GoBackTitleHeader navigation={navigation}>Sign in</GoBackTitleHeader>
                {/* End of header */}
                <Center>
                    <Image resizeMode='cover' size="xl" alt="logo" source={require('../../assets/images/auth_icons/3.png')}/>
                </Center>
                <Box mb={5}>
                    <VStack>
                        {
                            upperButtons.map((item) => createButton(item))
                        }
                    </VStack>
                    <Box
                        mx={10}
                    >
                        <WordBetweenLines 
                            color='coolGray.500'>
                            or
                        </WordBetweenLines>
                    </Box>
                    <VStack>
                        {
                            lowerButtons.map((item) => createButton(item))
                        }
                    </VStack>
                    
                </Box>
                
            </Box>
        </>
    )
}

export default SigninScreen