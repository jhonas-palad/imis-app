import { View } from 'react-native';
import {Box, Text} from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { ServiceNavigationProp, ServiceRouteProp } from '../navigation';
import { servicePackages } from '../data/category';

const ServiceDetails: React.FC = () => {
    const navigation = useNavigation<ServiceNavigationProp>();
    const route = useRoute<ServiceRouteProp>();
    const [packages, setPackages] = useState([]);
    const [packageCategories, setPackageCategories] = useState([]);
    
    useEffect(()=> {
        const _packageCategories = new Set();
        const all = servicePackages.map((_package)=> {
            _package.packageCategory.map((category)=> _packageCategories.add(category))
            return _package;
        });
        setPackageCategories([..._packageCategories]);
        setPackages([...all]);
    }, [route]);
    useEffect(()=>{
        // console.log("PACKAGES");
        // console.log(packages);
    }, [packages])
    return (
        <Box flex={1} bg="amber.200">
            {
                packages.map(_package=>{
                    return (
                    <Box bg="amber.100">
                        <Text>
                            {_package.packageName}
                        </Text>
                        <Text>
                            {
                                _package.packageDescription[0]
                            }
                        </Text>
                    </Box>
                    )
                })
            }
        </Box>
    )
}

export default ServiceDetails