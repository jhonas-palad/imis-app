import { Box, Button, Divider ,Text, Input, Icon, ScrollView, IconButton, HStack, Pressable, Flex} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { InputAccessoryView, Keyboard } from 'react-native'
import React, {useState, useRef, useEffect} from 'react';
import { makeID } from '../utils/uid';
import BackButton from './BackButton';
import { Octicons } from '@expo/vector-icons';
const inputAccessoryViewId = makeID()

const ServiceSearchView = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigation = useNavigation();
  const searchRef = useRef<typeof Input>();
  const [dummyRecent, setDummyRecent] = useState([
    'Spa Salon',
    'Kitchen cleaning',
    'Plumbers',
    'Bathroom cleaning Bathroom cleaning Bathroom cleaning'
  ]);
  const [trendSearches] = useState([
    'Salon for men',
    'Salon for women',
    'Carpenters',
    'Plumbers',
    'Bathroom - Cleaning'
  ]);
  useEffect(()=>{
    searchRef.current?.focus();
  },[searchRef]);
  return (
    <Box variant="base">
      <Box flexDir="row" pl={2} pr={5} py={4} borderBottomColor="coolGray.300" borderBottomWidth={1}>
        <BackButton navigation={navigation} />
        <Input
          ref={searchRef}
         flexGrow={1} fontSize="md" 
          placeholder="Search" rounded={12} p={4}
          inputAccessoryViewID={inputAccessoryViewId}
          _focus={{bg:null, borderColor: 'coolGray.300'}}
          onChangeText={setSearchInput}
          value={searchInput}
          InputRightElement={
            searchInput ? (
              <IconButton 
                onPress={()=>setSearchInput('')}
                icon={<Icon as={Ionicons} name="close-circle" size="md" color="coolGray.600"/>}/>
            ) : (
              null
            )
          }
        />
      </Box>
      <ScrollView>
          <Box margin={4} flex={1}>
            <Text mb={4} fontWeight="semibold" fontSize={16}>
              Recents
            </Text>
            {
              dummyRecent.length > 0 ?
              dummyRecent.map((item)=> 
                  <Box p={2} pr={10} key={item} flexDir='row' my={2}>
                    <Icon mr={4} as={Octicons} name="history" size="md"/>
                    <Text numberOfLines={1} fontSize="md">
                      {item}
                    </Text>
                  </Box>
                ) : (
                  <Box p={2} my={2}>
                    <Text fontSize="md" textAlign="center" color="coolGray.600">
                      No recent searches
                    </Text>
                  </Box>
                ) 
            }
          </Box>
          <Divider bg="coolGray.100" thickness={12}/>
          <Box margin={3} flex={1}>
            <Text mb={5} fontWeight="semibold" fontSize={16}>
              Trending searches
            </Text>
            <HStack alignItems="center" justifyContent="flex-start" flexWrap="wrap">
              {
                trendSearches.map((trendSearch) => 
                  <Pressable m={1} mr={1.5} key={trendSearch} flexDir="row" rounded={8} borderWidth={1} borderColor="coolGray.400" alignItems="center" p={2.5}>
                    <Icon mr={2} color="coolGray.600" as={Ionicons} name="ios-trending-up-sharp" size="sm" />
                    <Text color="coolGray.600" fontSize="sm">
                      {trendSearch}
                    </Text>
                </Pressable>
                )
              }

            </HStack>
          </Box>

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