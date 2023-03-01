import React ,{ useEffect, useRef, useState } from 'react';
import {Box, Pressable, Icon, Text, HStack, Center} from 'native-base';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';
import { phyxiColorTheme } from '../constants';
import { Service} from '../data/category';
import { useWindowDimensions } from 'react-native';

type ServiceProps = Omit<Service, 'categories' | 'packages'>;


type ServiceCategoriesProps = {
    categoryPress: (item: ServiceProps) => void;
    data: Array<ServiceProps> 
}

const ServiceCategories : React.FC<ServiceCategoriesProps> = ({categoryPress, data}) => {
    const {width} = useWindowDimensions();
    return (
        <HStack mx={2} alignItems="center" flexWrap="wrap">
            {
                data.map((item, itemIndex) => {
                    const itemsPerRow = 3.4;
                    const {icon} = item
                    const addExtraPadding = itemIndex % itemsPerRow === 0 || itemIndex % itemsPerRow === 1;
                    console.log(item.type, addExtraPadding, itemIndex)
                    return (
                        <Pressable w={width / itemsPerRow} h="130" mx={1} px={1} key={item.id} justifyContent="flex-start"  alignItems="center" onPress={()=>categoryPress(item)} _pressed={{bg:"none", opacity:0.5 }} 
                        overflow="hidden" mb={2}>
                            <Center w="full" _light={{bg: 'coolGray.100'}} rounded={12} _dark={{}} height="60%" mb={1}>
                                <Icon as={icon.asIcon} name={icon.name} size="xl" color={icon.color}/>
                            </Center>
                            <Text textAlign="center" numberOfLines={2} fontWeight="400" fontSize="sm" >
                                {item.type}
                            </Text>
                            
                        </Pressable>
                    )

                })
            }
        </HStack>
    )
};

export default ServiceCategories;