import { makeID } from "../utils/uid";
import { Ionicons, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

const allIDs = (arr : any[]) => [...arr.map(i => i?.id)];

type IconProp = {
    asIcon: any,
    name: string,
    color: string,
}

type PackageProps = {
    id: string,
    packageName: string,
    packageDescription: string[],
    packageRate: number,
    categories: string[],
    packageImage ?: {
        source?: string,
        uri?: string
    }
}

type CategoryProps = {
    id: string,
    categoryName: string
}


type service = {
    id: string,
    label: string,
    icon: IconProp,
    categories: CategoryProps[],
    packages: PackageProps[]

}


const cleaningCategories = [
    {
        id: makeID(),
        categoryName: 'Bedroom',
    },
    {
        id: makeID(),
        categoryName: 'Bathroom',
    },
    {
        id: makeID(),
        categoryName: 'Kitchen',
    },
    {
        id: makeID(),
        categoryName: 'Balcony',
    },
    
];

const beautyCareCategories = [
    {
        id: makeID(),
        categoryName: 'Nails',
    },
    {
        id: makeID(),
        categoryName: 'Lashes',
    },
    {
        id: makeID(),
        categoryName: 'Waxing',
    }
    
];

const hairCutCategories = [
    {
        id: makeID(),
        categoryName: 'Male'
    },
    {
        id: makeID(),
        categoryName: 'Female'
    },

];

const petCareCategories = [
    {
        id: makeID(),
        categoryName: 'Dog'
    },
    {
        id: makeID(),
        categoryName: 'Cat'
    }
];

const maintenanceCategories = [
    {
        id: makeID(),
        categoryName: 'Dog'
    },
    {
        id: makeID(),
        categoryName: 'Cat'
    }
];


export const services: Array<service> = [
    {
        id: makeID(),
        label: 'Cleaning',
        icon: {
            asIcon: MaterialCommunityIcons,
            name: 'broom',
            color: 'tertiary.400'
        },
        categories: cleaningCategories,
        packages: [
            {
                id: makeID(),
                packageName: 'Bathroom cleaning',
                packageDescription: [
                    'Basic cleaning of bathroom shower.'
                ],
                packageRate: 200,
                categories: [
                    cleaningCategories[1].id
                ]
            },
            {
                id: makeID(),
                packageName: 'Tiles cleaning',
                packageDescription: [
                    'Basic cleaning of floor.'
                ],
                packageRate: 500,
                categories: allIDs(cleaningCategories)
                
            },
            {
                id: makeID(),
                packageName: 'Disinfect Spraying',
                packageDescription: ['Wiping of all surfaces with disinfectant', '30 Mins per order', 'Best Seller'],
                packageRate: 600,
                categories: allIDs(cleaningCategories)
                
            },
            {
                id: makeID(),
                packageName: 'Balcony cleaning',
                packageDescription: [
                    'Wiping of handrails and surfaces',
                    'Cleaning of all flooring.'
                ],
                packageRate: 500,
                categories: [cleaningCategories[3].id]
            },
        ]
    },
    {
        id: makeID(),
        label: 'Beauty Service',
        icon: {
            asIcon: MaterialCommunityIcons,
            name: 'face-woman-shimmer',
            color: 'secondary.600'
        },
        categories: beautyCareCategories,
        packages: [
            {
                id: makeID(),
                packageName: 'Lash Lift',
                packageDescription: [
                    'Lengthier & curlier lashes that will last weeks'
                ],
                packageRate: 800,
                categories: [
                    beautyCareCategories[1].id
                ],
                
            },
            {
                id: makeID(),
                packageName: 'Kerating Lash Lift',
                packageDescription: [
                    'For fuller-looking lashes without the extensions',
                    'Boosts the natural Keratin in your eyelashes'
                ],
                packageRate: 800,
                categories: [
                    beautyCareCategories[1].id
                ],
                
            },
        ]
    },
    {
        id: makeID(),
        label: 'Haircut',
        icon: {
            asIcon: Ionicons,
            name: 'cut',
            color: '#0ea5e9'
        },
        categories: hairCutCategories,
        packages: [
            {
                id: makeID(),
                packageName: 'Basic Haircut',
                packageDescription: [
                    'Get a fresh, clean cut in the comfort of your home',
                    'Groom, trim, or sculpt facial hair'
                ],
                packageRate: 400,
                categories: [
                    hairCutCategories[0].id
                ],
            },
            {
                id: makeID(),
                packageName: 'Hair color',
                packageDescription: [
                    'Get a fresh, clean cut in the comfort of your home',
                    'Groom, trim, or sculpt facial hair'
                ],
                packageRate: 400,
                categories: allIDs(hairCutCategories),
            },
        ]

    },
    {
        id: makeID(),
        label: 'Maintenance',
        icon: {
            asIcon: MaterialIcons,
            name: 'home-repaire-service',
            color: '#facc15'
        },
        categories: [],
        packages: [
            {
                id: makeID(),
                packageName: 'Dog grooming',
                packageDescription: [
                    'Groom your dog with no hassle',
                ],
                packageRate: 400,
                categories: [petCareCategories[0].id]
            }
        ]
    },
    {
        id: makeID(),
        label: 'Pet care ',
        icon: {
            asIcon: MaterialIcons,
            name: 'pets',
            color: 'indigo.700'
        },
        categories: petCareCategories,
        packages: [
            {
                id: makeID(),
                packageName: 'Dog grooming',
                packageDescription: [
                    'Groom your dog with no hassle',
                ],
                packageRate: 400,
                categories: [petCareCategories[0].id]
            }
        ]

    }

]
