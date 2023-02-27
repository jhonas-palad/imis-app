import { Box, Text } from 'native-base'
import React from 'react'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log(data, details)
      }}
      query={{
        
      }}
    />
  
  )
}

export default GooglePlacesInput