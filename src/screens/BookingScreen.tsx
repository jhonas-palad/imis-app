import { View, Text, useWindowDimensions } from 'react-native'
import {Box} from 'native-base';
import React from 'react'

const BookingScreen = () => {
    const {height, width} = useWindowDimensions();
    const [viewLayout, setViewLayout] = React.useState(null);
    const topEdge = viewLayout?.y - height + viewLayout?.height;
    React.useEffect(()=>{
        console.log(viewLayout);
        console.log(topEdge);
    }, [viewLayout]);
    const handleOnLayout = (e) => {
        setViewLayout(e.nativeEvent.layout);
    }
  return (
    <Box flex={1} position="absolute" bg="blue.500" top={50} onLayout={handleOnLayout}>
      <Text>BookingScreen</Text>
    </Box>
  )
}

export default BookingScreen