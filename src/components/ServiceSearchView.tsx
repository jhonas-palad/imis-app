import { Box, Button,Center ,Text, Input, Icon, ScrollView, IconButton } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { InputAccessoryView, Keyboard } from 'react-native'
import React, {useState} from 'react';
import { makeID } from '../utils/uid';
import BackButton from './BackButton';
import { FlatList } from 'react-native-gesture-handler';


const inputAccessoryViewId = makeID()

const ServiceSearchView = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigation = useNavigation();
  return (
    <Box variant="base">
      <Box flexDir="row" pl={2} pr={5} py={4} borderBottomColor="coolGray.300" borderBottomWidth={1}>
        <BackButton navigation={navigation} />
        <Input flexGrow={1} fontSize="md" 
          placeholder="Search" rounded={12} p={4}
          inputAccessoryViewID={inputAccessoryViewId}
          _focus={{bg:null, borderColor: 'darkBlue.800'}}
          onChangeText={setSearchInput}
          InputRightElement={
            searchInput ? (
              <IconButton icon={<Icon as={Ionicons} name="close-circle" size="md" color="coolGray.600"/>}/>
            ) : (
              null
            )
          }
        />
      </Box>
      <ScrollView bg="amber.300" flex={1}>

      </ScrollView>

      <InputAccessoryView nativeID={inputAccessoryViewId}>
        <Box borderTopWidth={0.5} borderTopColor="coolGray.300" bg="coolGray.100" flexDir='row' justifyContent='flex-end' alignItems='center'>
          <Button onPress={Keyboard.dismiss} bg="none" _text={{color:'darkBlue.700', fontWeight:500, fontSize:"lg"}}>
            Done
          </Button>
        </Box>
      </InputAccessoryView>
    </Box>
  )
}

export default ServiceSearchView