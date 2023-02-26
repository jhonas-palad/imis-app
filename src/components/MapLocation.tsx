import {Box, Button, Center, Spinner} from 'native-base';
import React, { useState, useEffect} from 'react';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';


const MapLocation = () => {
    const navigation = useNavigation();
    const [location, setLocation] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        navigation.setOptions({
            presentation: 'modal'
        });
    }, [navigation]);

    useEffect(()=>{
        (async ()=> {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted'){
                console.log(status);
                return;
            }
            const {coords} = await Location.getCurrentPositionAsync({});
            
            setLocation({
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
            setLoading(false);
        })();
    }, [])
    
    if(loading){
        return (
            <Center flex={1} >
                <Spinner size='sm'/>
            </Center>
        )
        
    }

    return (

        <Box flex={1}>
            <Button position="absolute" rounded="full" zIndex="4" top={5} left={0} right={0} marginX={3}> 
                Hello
            </Button>
            <MapView 
                region={location}
                style={{width: '100%', height: '100%'}}/>
        </Box>
    )
}

export default MapLocation