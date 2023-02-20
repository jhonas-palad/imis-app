import { makeID } from "../utils/uid";
import { Ionicons, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

type IconProp = {
    as: JSX.Element,
    name: string,
    color: string,
}

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


type categoryPackage = {
    packageId: string,
    packageName: string,
    packageDescription: string[],
    packageRate: number,
    packageCategory: string[],
    packageImage : {
        source?: string,
        uri?: string
    }

}

export const servicePackages = [
    {
        packageId: categoryData[0].id,
        packageName: 'Bathroom Cleaning',
        packageDescription: ['Basic cleaning of bathroom shower.'],
        packageRate: 200,
        packageCategory: ['Bathroom'],

    },
    {
        packageId: categoryData[0].id,
        packageName: 'Tiles Cleaning',
        packageDescription: ['Basic cleaning of floor.'],
        packageRate: 200,
        packageCategory: ['Bathroom', 'Kitchen']
    },
    {
        packageId: categoryData[0].id,
        packageName: 'Disinfect Spraying',
        packageDescription: ['Wiping of all surfaces with disinfectant', '30 Mins per order', 'Best Seller'],
        packageRate: 200,
        packageCategory: ['Bathroom', 'Kitchen']
    },
    {
        packageId: categoryData[0].id,
        packageName: 'Balcony Cleaning',
        packageDescription: ['Cleaning of all flooring.', 'Wiping of handrails and surfaces'],
        packageRate: 400,
        packageCategory: ['Balcony']
    }
]