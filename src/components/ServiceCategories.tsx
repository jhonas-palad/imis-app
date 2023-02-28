import React ,{ useEffect, useRef, useState } from 'react';
import {FlatList, Pressable, Icon, Text, HStack} from 'native-base';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';
import { phyxiColorTheme } from '../constants';
import { Service} from '../data/category';
import { useWindowDimensions } from 'react-native';

type ServiceProps = Omit<Service, 'categories' | 'packages'>;


type ServiceCategoriesProps = {
    categoryPress: (item: ServiceProps, itemIndex: number) => void;
    data: Array<ServiceProps> 
}

const ServiceCategories : React.FC<ServiceCategoriesProps> = ({categoryPress, data}) => {
    const {width} = useWindowDimensions();
    const ref = useRef(null);
    const [index, setIndex] = useState(null);

    useEffect(() => {
        ref.current?.scrollToIndex({
            index,
            animated: true,
            viewPosition: 0.05
        })
    }, [index])
    const handleServicePress = (item: ServiceProps, itemIndex : number) =>{
        categoryPress(item, itemIndex);
        setIndex(itemIndex);
    };

    return (
        <HStack alignItems="center"  flexWrap="wrap">
            {
                data.map((item, itemIndex) => {
                    
                    const {icon} = item
                    return (
                            <Pressable w={width / 3} key={item.id} onPress={()=>handleServicePress(item, itemIndex)} _pressed={{bg:"transparent", opacity:0.5 }} 
                            overflow="hidden">
                            <MotiView
                                animate={{
                                    
                                    opacity: itemIndex === index ? 1 : 0.4,
                                    
                                }}
                                transition={{
                                    type: 'timing',
                                    easing: Easing.linear,
                                }}
                                style={{
                                    padding: 5,
                                    alignItems: "center",
                                    borderColor: phyxiColorTheme.brandPrimary[800],
                                }}
                            >
                                <Icon as={icon.asIcon} name={icon.name} size="xl" color={icon.color}/>
                                <Text fontWeight="600" fontSize="md" color="coolGray.500">
                                    {item.type}
                                </Text>
                            </MotiView>
                        </Pressable>
                    )

                })
            }
        </HStack>
    )
};

export default ServiceCategories;