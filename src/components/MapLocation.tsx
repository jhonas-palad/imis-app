import {Box, Button, Center, Spinner, Text} from 'native-base';
import React, { useState, useEffect} from 'react';
import MapView, {Region, Marker, Callout} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { StatusBar } from 'native-base';


const MapLocation = () => {
    const navigation = useNavigation();
    const [region, setRegion] = useState<Region>({
        longitude: 0,
        latitude: 0,
        latitudeDelta: 0.005,
        longitudeDelta: 0.007
    });
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
            
            setRegion( prevState => ({
                ...region,
                latitude: coords.latitude,
                longitude: coords.longitude,
            }));
            setLoading(false);
        })();
    }, [])
    
    if(loading){
        return (
            <>
                <StatusBar barStyle='light-content'/>
                <Center flex={1} >
                    <Spinner size='sm'/>
                </Center>
            </>
            
        )
        
    }

    return (
        <>
            <StatusBar barStyle='light-content'/>
            <Box flex={1}>
                <Button position="absolute" rounded="full" zIndex="4" top={5} left={0} right={0} marginX={3}> 
                    Hello
                </Button>
                <MapView 
                    region={region}
                    provider='google'
                    style={{width: '100%', height: '100%'}}
                >
                    <Marker coordinate={region} />
                </MapView>
            </Box>
        </>
        
    )
}

export default MapLocation