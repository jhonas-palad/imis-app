import React ,{ useEffect, useRef, useState } from 'react';
import {FlatList, Pressable, Icon, Text} from 'native-base';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';
import { phyxiColorTheme } from '../constants';
type CategoryProps = {
    id: string,
    label: string,
    iconName: string,
    asIcon: JSX.Element,
    iconColor: string,
}

type ServiceCategoriesProps = {
    categoryPress: (item: CategoryProps, itemIndex: number) => void;
    data: Array<CategoryProps> 
}


const _colors = {
    active: `#FCD259ff`,
    inactive: `#FCD25900`,
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
    const handleCategoryPress = (item: CategoryProps, itemIndex : number) =>{
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
            return (
                    <Pressable onPress={() =>{handleCategoryPress(item, itemIndex)}} _pressed={{bg:"transparent", opacity:0.5 }} marginLeft={ itemIndex === 0 ? 3 : 0} marginRight={3}
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
                            <Icon as={item.asIcon} name={item.iconName} size="xl" color={item.iconColor}/>
                            <Text fontWeight="600" fontSize="md" color="coolGray.500">
                                {item.label}
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