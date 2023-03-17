import { IconButton, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

type CloseButtonProps = {
    onPress: () => void;
    _style?: {[property:string]: any};
}
const CloseButton: React.FC<CloseButtonProps> = ({_style, onPress}) => {
  return (
    <IconButton onPress={()=>onPress()} alignSelf="flex-start" rounded="full" alignItems="center" justifyContent="center" p={2}  _pressed={{bg:'transparent', opacity: 0.5}}  {..._style} 
        icon={<Icon as={AntDesign} name="close" size="sm" color="orange.700" />}
    />
  )
}

export default CloseButton