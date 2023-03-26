import { Box,Button, Text, HStack,  ScrollView, Pressable, Flex, Spacer, Badge, Image, Heading, Divider, IconButton, Icon, Center, StatusBar } from 'native-base';
import {useNavigation} from '@react-navigation/native';
import ServiceCategories from '../components/ServiceCategories';
import { services } from '../data/category';
import React, {useState, useCallback} from 'react';
import { Feather } from '@expo/vector-icons';
import Container from '../components/Container';

export const HomeScreen: React.FC = () => {
    const navigation = useNavigation();
    const [data] = useState([...services]);

    const categoryPress = useCallback((item: any) => {
        navigation.navigate('Services' as never, {screen: 'Details', params: {serviceId: item?.id}} as never);
    }, []);
    return (
        <>
            <Container base barStyle="dark-content">
                <ScrollView stickyHeaderIndices={[1]}> 
                <HStack alignItems="center" mt={5}  mb={10} px={5}>
                        <Pressable flexGrow={1} onPress={()=> navigation.navigate('MapLocation' as never)} _pressed={{opacity: 0.5}}>
                                <Text fontSize="lg" fontWeight="bold">
                                    Current Location
                                </Text>
                                <Text numberOfLines={1}>
                                    122 Sala Tanauan City, Batangas
                                </Text>
                        </Pressable>
                    {/* <IconButton icon={<Icon as={Ionicons} name="location" />} /> */}
                </HStack> 
                    <Box mb={3} marginX={3}>
                        <Pressable flexDir="row" onPress={()=>{navigation.navigate('ServiceSearch' as never)}} _light={{bg:'white'}} alignItems="center" borderWidth={1} borderColor="coolGray.300" rounded={10} paddingY={2} paddingX={3}>
                            <Icon as={Feather} color="coolGray.400" name="search" size="md"/>
                            <Text ml={2} variant="light" fontSize="md">
                                Search for a service
                            </Text>
                        </Pressable>
                    </Box>
                    <Box flexDir="row" alignItems="center">
                        <Box ml={5} flex={0.5}>
                            <Heading color="primary.600">
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
                    <Box mb={3}>
                        <ServiceCategories categoryPress={categoryPress} data={data}/>
                    </Box>
                </ScrollView>
            </Container>
        </>
    )
}

export default HomeScreen