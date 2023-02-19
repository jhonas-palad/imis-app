import React from 'react';
import { makeID } from "../utils/uid";
import { Ionicons, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

export const categoryData: Array<{id:string, label:string, iconName: string, asIcon: any}> = [
    {
        id: makeID(),
        label: 'Cleaning',
        iconName: 'broom',
        asIcon: MaterialCommunityIcons 

    },
    {
        id: makeID(),
        label: 'Beauty Service',
        iconName: 'face-woman-shimmer',
        asIcon: MaterialCommunityIcons 

    },
    {
        id: makeID(),
        label: 'Haircut',
        iconName: 'cut',
        asIcon: Ionicons

    },
    {
        id: makeID(),
        label: 'Maintenance',
        iconName: 'home-repair-service',
        asIcon: MaterialIcons 

    },
    {
        id: makeID(),
        label: 'Pet care ',
        iconName: 'pets',
        asIcon: MaterialIcons 

    }

]