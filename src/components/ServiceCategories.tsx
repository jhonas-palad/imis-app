import React ,{ useEffect, useRef, useState } from 'react';
import {FlatList, Pressable, Icon, Text} from 'native-base';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';
import { phyxiColorTheme } from '../constants';
import { Service} from '../data/category';

type ServiceProps = Omit<Service, 'categories' | 'packages'>;


type ServiceCategoriesProps = {
    categoryPress: (item: ServiceProps, itemIndex: number) => void;
    data: Array<ServiceProps> 
}

const ServiceCategories : React.FC<ServiceCategoriesProps> = ({categoryPress, data}) => {
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
        <FlatList
            ref={ref}
            flexGrow={0}
            data={data}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item, index: itemIndex}) => {
                const {icon} = item;
                return (
                        <Pressable onPress={() =>{handleServicePress(item, itemIndex)}} _pressed={{bg:"transparent", opacity:0.5 }} marginLeft={ itemIndex === 0 ? 3 : 0} marginRight={3}
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
                }
            }
        />
    )
};

export default ServiceCategories;