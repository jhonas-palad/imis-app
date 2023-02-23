import { MotiView } from 'moti';
import {Box,Center, Text, FlatList, ScrollView, Pressable, Image, Icon, Button, HStack, IconButton, Badge, Divider} from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { ServiceNavigationProp, ServiceRouteProp } from '../navigation';
import { services, Service } from '../data/category';
import ServiceDetailHeader from './headers/ServiceDetailHeader';
import { makeID } from '../utils/uid';
import {Feather} from '@expo/vector-icons';
import {useWindowDimensions} from 'react-native';
import { useServiceOrder} from '../context';


const ServiceDetails: React.FC = () => {
    const { serviceOrderDetails, setServiceOrderDetails} = useServiceOrder();
    const { width} = useWindowDimensions();
    const navigation = useNavigation<ServiceNavigationProp>();
    const route = useRoute<ServiceRouteProp>();
    const [serviceDetails, setServiceDetails] = useState<Omit<Service, 'icon' | 'packages' >>({
        id: '',
        label: '',
        categories: []
    });
    const [packages, setPackages] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("All");
    const [categoryIndex, setCategoryIndex] = useState(0);
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    }, []);
    
    useEffect(()=> {
        const service = services.filter(value => value.id === route.params.serviceId)[0];
        if(!(service.categories.find((item)=> item.categoryName === 'All'))){
            service.categories = [{id: makeID(), categoryName: 'All'},...service.categories]
        }
        // Initialize each package qty to 0
        const _packages = service.packages.map((item)=> ({...item, qty: 0}))
        setServiceDetails({...service});
        setPackages([..._packages]);
    }, [route]);

    const handlePackageQty = React.useCallback((packageId : any, add: boolean)=>{
        const _package = packages.find(p => p.id === packageId);
        let {qty} = _package;
        if(add){
            ++qty; 
        }else{
            (qty > 0) && qty--
        }
        const updatedPackage = {..._package, qty};
        const updatedPackages = packages.map(item => ( item.id === _package.id ? updatedPackage : item));
        setPackages([...updatedPackages]);
    }, [packages]);
    return (
        <Box bg="coolGray.100" safeAreaTop flex={1} >
            <ServiceDetailHeader serviceName={serviceDetails.label} navigation={navigation}/>
            <ScrollView
                stickyHeaderIndices={[0]}
            >
                <Box mb={3} shadow={1} justifyContent="center" w="full" bg="coolGray.100">
                    <FlatList
                        horizontal
                        
                        data={serviceDetails.categories}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(category)=> category.id}
                        renderItem={
                            ({item, index})=>{
                                return(
                                    <>
                                        <Pressable 
                                            width={width / 4}
                                            padding={3}
                                            key={item.id} 
                                            onPress={()=> {setCurrentCategory(item.categoryName); setCategoryIndex(index);}}  
                                            _pressed={{
                                                opacity: 0.5,
                                            }}
                                            borderBottomWidth={categoryIndex === index ? 3: 0}
                                            borderBottomColor="orange.600"
                                            >
                                            <Text fontWeight="600" color='darkBlue.800' textAlign="center" fontSize="md">{item.categoryName}</Text>
                                        </Pressable>
                                        
                                    </>
                                )
                            }
                        }
                    /> 
                </Box>
                <Text fontSize="xl" fontWeight="600" color="darkBlue.800" ml={3}>{currentCategory}</Text>
                {
                    packages.length === 0 ? (
                        <Text>There are no available packages at this moment</Text>
                    ) : (
                        packages.map((_package, index)=>{
                            if(currentCategory === 'All' || _package.categories.includes(currentCategory)){
                                return (
                                    <Pressable key={_package.id} borderBottomColor="coolGray.300" borderBottomWidth={packages.length - 1 === index ? 0 : 1} rounded={12} padding={3} mx={3} flexDir="row" mb={5}>
                                        <Center mr={3} paddingBottom={3}>
                                            <Box mb={3} paddingX={3} rounded={12} paddingTop={3} bg="darkBlue.400">
                                                <Image rounded={8} size="xl" alt="women_clean" resizeMode="contain" source={require('../../assets/images/women_bucket.png')} />
                                            </Box>
                                            <HStack alignSelf="stretch" alignItems="center" justifyContent="space-between">
                                                <IconButton bg="darkBlue.200" onPress={()=> handlePackageQty(_package.id, false)} rounded={12} icon={<Icon as={Feather} color="coolGray.100" name="minus" size="md"/>} />
                                                    <Text>{_package.qty}</Text>
                                                <IconButton bg="darkBlue.200" onPress={()=> handlePackageQty(_package.id, true)} rounded={12} icon={<Icon as={Feather} name="plus" color="coolGray.100" size="md"/>} />
                                            </HStack>
                                        </Center>
                                        
                                        <Box flex={1}>
                                            <Badge bg="green.600" _text={{color:'white', fontWeight:'600'}} rounded={12} alignSelf="initial">20% discount</Badge>
                                            <Text fontSize="lg" color="darkBlue.800" fontWeight="bold">{_package.packageName}</Text>
                                            <Text fontSize="md" fontWeight="semibold">${_package.packageRate}</Text>
                                            <Box flexDir="column" >
                                                    {
                                                        _package.packageDescription.map((description)=>{
                                                            return(
                                                                <Text key={makeID()} color="coolGray.500">
                                                                    {description}
                                                                </Text>
                                                            )
                                                        })
                                                    }
                                            </Box>
                                        </Box>
        
                                    </Pressable>
                                );
                            }
                            
                        
                    }) )
                    
                }
            </ScrollView>
            <Box>

            <HStack shadow={2} padding={5} bg="coolGray.50" alignItems="center" justifyContent="space-between">
                <Text fontWeight="bold">
                    Total cost
                </Text>
                <Text>
                    $100
                </Text>
            </HStack>
            <Button _pressed={{
                opacity: 0.8
            }} bg="orange.600" rounded={0}
                onPress={() => {setServiceOrderDetails({myName: 'NameEEE'}); navigation.navigate('Date' as never)}}
            >
                <Text color="coolGray.50" fontWeight={700}>
                    Proceed
                </Text>
            </Button>
            </Box>

        </Box>
    )
}

export default ServiceDetails