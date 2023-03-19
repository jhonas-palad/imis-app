import { IconButton, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';
import React from 'react'

type Props = {
  navigation: any,
  _style?: any
}

const BackButton: React.FC<Props> = ({navigation, _style}) => {
  return (
    <IconButton 
      onPress={()=>navigation.goBack()} 
      _pressed={{bg:'transparent', opacity: 0.5}} 
      icon={
        <Icon as={Feather} 
              name="arrow-left" 
              color="orange.500"/>
      }
      {..._style}
      />
  )
}

export default BackButton