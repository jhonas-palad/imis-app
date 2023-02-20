import { Box,Button, Text,HStack,  ScrollView, Pressable, Flex, Spacer, Badge, Image, Heading, Divider, IconButton, Icon } from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Header from './headers/Header';
import ServiceCategories from './ServiceCategories';
import { categoryData } from '../data/category';
import React from 'react';


const {useEffect, useState, useCallback} = React;

const HomeView: React.FC = () => {
    // const {height, width} = useWindowDimensions();
    const navigation = useNavigation();
    const [categoryLabel, setCategoryLabel] = useState("");
    const [data] = useState([...categoryData]);
    useEffect(()=> {
        navigation.setOptions(({
            header: ()=> {
                return <Header/>
            }
        }))
    }, [])
    useEffect(()=> {
        setCategoryLabel(categoryData[0]?.label);
    }, []);
    useEffect(() => {
        console.log(categoryLabel);
    }, [categoryLabel]);
    const categoryPress = useCallback((item: any, itemIndex: number) => {
        
        setCategoryLabel(item?.label);
        navigation.navigate('ServiceDetails' as never, {serviceId: item?.id} as never);
    }, []);

    return (
        <>
        <ScrollView flex={1}
            stickyHeaderIndices={[2]}
            bg="coolGray.100"
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
            <Box flexDir="row" alignItems="center" justifyContent="space-between" mx={4} mb={3} >

                <Text  fontWeight="bold" color="darkBlue.700" fontSize="20">
                    Categories
                </Text>
                <Button variant="ghost" _pressed={{bg:'none', opacity: 0.4}} _text={{fontWeight:"400", color:"darkBlue.700", fontSize:"sm"}} >
                    View all
                </Button>
            </Box>
            <Box bg="coolGray.100" mb={3}>
                <ServiceCategories categoryPress={categoryPress} data={data}/> 
            </Box>
            <Text mx={4} mb={3} fontWeight="bold" color="darkBlue.700" fontSize="20">
                Offers & discounts
            </Text>
            <Box flex={1}>
                <Pressable mx={5} onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5">
                    <Box>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" 
                                _text={{
                                    color: "white"
                                    }} 
                                variant="solid" rounded="4">
                                Cleaning
                            </Badge>
                            <Spacer  />
                            <Text fontSize={10} color="coolGray.800">
                                1 day left
                            </Text>
                            
                        </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {categoryLabel}
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </Text>
                        <Flex>
                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            Read More
                            </Text>
                        </Flex>
                    </Box>
                </Pressable>
                <Pressable mt={5} mx={5} onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5">
                    <Box>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" 
                                _text={{
                                    color: "white"
                                    }} 
                                variant="solid" rounded="4">
                                Business
                            </Badge>
                            <Spacer  />
                            <Text fontSize={10} color="coolGray.800">
                            1 day left
                            </Text>
                            
                        </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {categoryLabel}
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            Unlock powerfull time-saving tools for creating email delivery and
                            collecting marketing data
                        </Text>
                        <Flex>
                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            Read More
                            </Text>
                        </Flex>
                    </Box>
                </Pressable>
                <Pressable m={5} onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" shadow="3" bg="coolGray.100" p="5">
                    <Box>
                        <HStack alignItems="center">
                            <Badge colorScheme="darkBlue" 
                                _text={{
                                    color: "white"
                                    }} 
                                variant="solid" rounded="4">
                                Business
                            </Badge>
                            <Spacer  />
                            <Text fontSize={10} color="coolGray.800">
                            1 day left
                            </Text>
                            
                        </HStack>
                        <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                            {categoryLabel}
                        </Text>
                        <Text mt="2" fontSize="sm" color="coolGray.700">
                            Unlock powerfull time-saving tools for creating email delivery and
                            collecting marketing data
                        </Text>
                        <Flex>
                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                            Read More
                            </Text>
                        </Flex>
                    </Box>
                </Pressable>
                
            </Box>
        </ScrollView>
        <Button _pressed={{bg:'orange.500'}} position="absolute" shadow={3} rounded="full" bottom={5} bg="orange.600" alignSelf="center" onPress={()=>console.log("QWE")}>
            <Text color="coolGray.50" fontWeight={500}>Map</Text>
            {/* <Icon as={Ionicons} name="arrow-forward-circle-outline" size="xl"/> */}
        </Button>
        </>
    )
}

export default HomeView