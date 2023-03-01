import { Box,Button, Text,HStack,  ScrollView, Pressable, Flex, Spacer, Badge, Image, Heading, Divider, IconButton, Icon, Center } from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Header from './headers/Header';
import ServiceCategories from './ServiceCategories';
import { Easing } from 'react-native-reanimated';
import { services } from '../data/category';
import { phyxiColorTheme } from '../constants';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { MotiView } from 'moti';
import { Feather } from '@expo/vector-icons';

const {useEffect, useState, useCallback} = React;

const HomeView: React.FC = () => {
    const {height, width} = useWindowDimensions();
    const navigation = useNavigation();
    const [data] = useState([...services]);
    useEffect(()=> {
        navigation.setOptions(({
            header: ()=> {
                return <Header/>
            },
        }))
    }, [])

    const categoryPress = useCallback((item: any) => {
        navigation.navigate('Services' as never, {screen: 'Details', params: {serviceId: item?.id}} as never);
    }, []);
    return (
        <Box flex={1} >
            <ScrollView flex={1}
                bg="coolGray.100"
                _light={{
                    bg:'white'
                }}
                _dark={{
                    bg:'coolGray.600'
                }}
            >  
                
                <Box flexDir="row" alignItems="center">
                    <Box ml={5} flex={0.5}>
                        <Heading color="orange.600">
                            What services do you need?
                        </Heading>
                        <Flex mt={3} direction="row">
                            <Text>Aj</Text>
                            <Divider bg="emerald.500" thickness="1" mx="2" orientation="vertical" />
                            <Text>Aspen</Text>
                            <Divider bg="indigo.500" thickness="1" mx="2" orientation="vertical" />
                            <Text>Bryan</Text>
                        </Flex>
                    </Box>
                    <Image flex={0.6} source={require('../../assets/images/cleaning_bucket1.png')} resizeMode='cover' size="2xl" alt="cleaning_bucket"/>
                </Box>
                <Box mb={3} px={5}>
                    <Pressable onPress={()=> navigation.navigate('MapLocation' as never)} _pressed={{opacity: 0.5}}>
                            <Text>
                                Location
                            </Text>
                            <Text numberOfLines={1}>
                                122 Sala Tanauan City, Batangas
                            </Text>
                    </Pressable>
                </Box> 
                <Box mb={3} marginX={3}>
                    <Pressable flexDir="row" onPress={()=>{navigation.navigate('ServiceSearch' as never)}} _light={{bg:'white'}} alignItems="center" borderWidth={1} borderColor="coolGray.300" rounded={10} paddingY={2} paddingX={3}>
                        <Icon as={Feather} color="coolGray.400" name="search" size="md"/>
                        <Text ml={2} variant="light" fontSize="md">
                            Search for a service
                        </Text>
                    </Pressable>
                </Box>
                <Box flexDir="row" alignItems="center" justifyContent="space-between" mx={4} mb={3} >

                    <Text  fontWeight="bold" color="darkBlue.700" fontSize="20">
                        Categories
                    </Text>
                    <Button variant="ghost" _pressed={{bg:'none', opacity: 0.4}} _text={{fontWeight:"400", color:"darkBlue.700", fontSize:"sm"}} >
                        View all
                    </Button>
                </Box>
                <Box mb={3}>
                    <ServiceCategories categoryPress={categoryPress} data={data}/>
                </Box>
            </ScrollView>
        </Box>
    )
}

export default HomeView