import { IconButton, Icon } from 'native-base';
import { Feather } from '@expo/vector-icons';
import React from 'react'

const BackButton: React.FC = ({navigation}) => {
  return (
    <IconButton onPress={()=>navigation.goBack()} _pressed={{bg:'transparent', opacity: 0.5}} icon={<Icon as={Feather} name="arrow-left" color="orange.500"  />}
      />
  )
}

export default BackButton