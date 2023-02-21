import  { Text, Icon,IconButton, HStack} from 'native-base';
import {Feather} from '@expo/vector-icons';
import React from 'react'
import { ServiceNavigationProp } from '../../navigation';
type ServiceDetailHeader = {
    serviceName: string,
    navigation: ServiceNavigationProp
}
const ServiceDetailHeader: React.FC<ServiceDetailHeader> = ({serviceName, navigation}) => {

    return (
        <HStack paddingX={3} justifyContent="space-between" alignItems="center">
            <IconButton onPress={()=>navigation.goBack()} _pressed={{bg:'transparent', opacity: 0.5}} 
                icon={<Icon as={Feather} name="arrow-left" color="orange.500"  />}
            />
            <Text fontSize="md" fontWeight="700">{serviceName}</Text>
            <IconButton _pressed={{bg:'none', opacity: 0.5}} rounded="full" icon={<Icon as={Feather} color="orange.500" name="search" size="md"/>}/>
        </HStack>
    )
}

export default ServiceDetailHeader