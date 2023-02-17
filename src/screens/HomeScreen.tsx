import { Box,Image, Text,HStack, Heading, ScrollView, VStack } from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/headers/Header';
import React from 'react';

const {
    useEffect
} = React;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            header: () => {
                return (
                    <Header/>
                )
            }
        })
    }, []);
  return (
    <ScrollView padding={5} flex={1} >
        <Box>
                <Text>Hi Jhonas!</Text>
                <Heading>
                    What Services do you need?
                </Heading>
        <Heading>

        </Heading>
        </Box>


    </ScrollView>
  )
}

export default HomeScreen