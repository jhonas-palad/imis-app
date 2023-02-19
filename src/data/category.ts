import React from 'react';
import { makeID } from "../utils/uid";
import { Ionicons, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

export const categoryData: Array<{id:string, label:string, iconName: string, asIcon: any, iconColor: string}> = [
    {
        id: makeID(),
        label: 'Cleaning',
        iconName: 'broom',
        asIcon: MaterialCommunityIcons,
        iconColor: 'tertiary.400' 

    },
    {
        id: makeID(),
        label: 'Beauty Service',
        iconName: 'face-woman-shimmer',
        asIcon: MaterialCommunityIcons,
        iconColor: 'secondary.600' 

    },
    {
        id: makeID(),
        label: 'Haircut',
        iconName: 'cut',
        asIcon: Ionicons,
        iconColor: '#0ea5e9'

    },
    {
        id: makeID(),
        label: 'Maintenance',
        iconName: 'home-repair-service',
        asIcon: MaterialIcons,
        iconColor: '#facc15' 

    },
    {
        id: makeID(),
        label: 'Pet care ',
        iconName: 'pets',
        asIcon: MaterialIcons ,
        iconColor: 'indigo.700'

    }

]