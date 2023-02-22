import { makeID } from "../utils/uid";
import { Ionicons, MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

const allCategory = (arr : any[]) => [...arr.map(i => i?.categoryName)];

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


export type Service = {
    id: string,
    label: string,
    icon: IconProp,
    categories: CategoryProps[],
    packages: PackageProps[]
}

const cleaningCategories = [
    {
        id: '4b525d30-7b86-4e24-bc4f-4711a8e86648',
        categoryName: 'Bedroom',
    },
    {
        id: '18d48a7e-982e-4de2-98eb-c14b23ddf630',
        categoryName: 'Bathroom',
    },
    {
        id: '81d308a6-144d-4222-8afd-330af2d26a25',
        categoryName: 'Kitchen',
    },
    {
        id: 'fad575ae-856b-4120-83bb-2360f4326d78',
        categoryName: 'Balcony',
    },
    
];

const beautyCareCategories = [
    {
        id: 'e8b4e4cc-f7cc-4c7f-824a-877fd0ed29b7',
        categoryName: 'Nails',
    },
    {
        id: 'e6fe3f6a-e535-4674-8262-de1267e0936b',
        categoryName: 'Lashes',
    },
    {
        id: '9a3b0907-6192-46cc-acb3-e35569c079a4',
        categoryName: 'Waxing',
    }
    
];

const hairCutCategories = [
    {
        id: 'a0482a93-9ef3-4f5d-a94c-aeaa1aefa490',
        categoryName: 'Male'
    },
    {
        id: '4b2c8980-b7c4-496b-bd94-f0101556af3d',
        categoryName: 'Female'
    },

];

const petCareCategories = [
    {
        id: '51861306-bc61-4708-881b-d84517aa74eb',
        categoryName: 'Dog'
    },
    {
        id: 'b25583d6-9c69-4f42-8657-0fa65d077ea8',
        categoryName: 'Cat'
    }
];

const maintenanceCategories = [
    {
        id: '84972775-88c0-4dfa-bd67-88d7c18dc1f5',
        categoryName: 'Dog'
    },
    {
        id: 'f18a78bb-69e5-401e-bad7-2f63021c0dd7',
        categoryName: 'Cat'
    }
];


export const services: Array<Service> = [
    {
        id: 'af3fe3c9-cba1-4d1c-8c7b-374226a1231c',
        label: 'Cleaning',
        icon: {
            asIcon: MaterialCommunityIcons,
            name: 'broom',
            color: 'tertiary.400'
        },
        categories: cleaningCategories,
        packages: [
            {
                id: '4b3e12de-5879-443c-ba6b-fb48c9850ff4',
                packageName: 'Bathroom cleaning',
                packageDescription: [
                    'Basic cleaning of bathroom shower.'
                ],
                packageRate: 200,
                categories: [
                    cleaningCategories[1].categoryName
                ]
            },
            {
                id: '2dab31a5-4ccf-4639-853d-d50c72f59a70',
                packageName: 'Tiles cleaning',
                packageDescription: [
                    'Basic cleaning of floor.'
                ],
                packageRate: 500,
                categories: allCategory(cleaningCategories)
                
            },
            {
                id: '442aace8-0164-4e07-92e2-93ca90650a92',
                packageName: 'Disinfect Spraying',
                packageDescription: ['Wiping of all surfaces with disinfectant', '30 Mins per order', 'Best Seller'],
                packageRate: 600,
                categories: allCategory(cleaningCategories)
                
            },
            {
                id: 'f2b105c8-ca35-480c-99b8-ea2bab10ade4',
                packageName: 'Balcony cleaning',
                packageDescription: [
                    'Wiping of handrails and surfaces',
                    'Cleaning of all flooring.'
                ],
                packageRate: 500,
                categories: [cleaningCategories[3].categoryName]
            },
        ]
    },
    {
        id: '1f9daa4e-3a3a-43d7-97aa-ab3fc7044499',
        label: 'Beauty Service',
        icon: {
            asIcon: MaterialCommunityIcons,
            name: 'face-woman-shimmer',
            color: 'secondary.600'
        },
        categories: beautyCareCategories,
        packages: [
            {
                id: '7bb6520b-8f4f-4336-bfeb-c5efe3031bb7',
                packageName: 'Lash Lift',
                packageDescription: [
                    'Lengthier & curlier lashes that will last weeks'
                ],
                packageRate: 800,
                categories: [
                    beautyCareCategories[1].categoryName
                ],
                
            },
            {
                id: 'ce20ce17-3dcb-4dc1-93e8-cfb13ebaa4a6',
                packageName: 'Kerating Lash Lift',
                packageDescription: [
                    'For fuller-looking lashes without the extensions',
                    'Boosts the natural Keratin in your eyelashes'
                ],
                packageRate: 800,
                categories: [
                    beautyCareCategories[1].categoryName
                ],
                
            },
        ]
    },
    {
        id: 'ce16b353-469b-4361-8d28-abf9be8f765a',
        label: 'Haircut',
        icon: {
            asIcon: Ionicons,
            name: 'cut',
            color: '#0ea5e9'
        },
        categories: hairCutCategories,
        packages: [
            {
                id: '882d301b-d399-40ab-8790-aeea287f08a2',
                packageName: 'Basic Haircut',
                packageDescription: [
                    'Get a fresh, clean cut in the comfort of your home',
                    'Groom, trim, or sculpt facial hair'
                ],
                packageRate: 400,
                categories: [
                    hairCutCategories[0].categoryName
                ],
            },
            {
                id: '2bc7e2c7-7923-4fdf-ada8-99bea83a35b2',
                packageName: 'Hair color',
                packageDescription: [
                    'Get a fresh, clean cut in the comfort of your home',
                    'Groom, trim, or sculpt facial hair'
                ],
                packageRate: 400,
                categories: allCategory(hairCutCategories),
            },
        ]

    },
    {
        id: '3e67d776-143b-48b7-aac7-52048c4300c5',
        label: 'Maintenance',
        icon: {
            asIcon: MaterialIcons,
            name: 'home-repaire-service',
            color: '#facc15'
        },
        categories: [],
        packages: [
            {
                id: 'd93a4dc9-3ba7-44b4-91d7-58caa1a09c4c',
                packageName: 'Dog grooming',
                packageDescription: [
                    'Groom your dog with no hassle',
                ],
                packageRate: 400,
                categories: [petCareCategories[0].categoryName]
            }
        ]
    },
    {
        id: 'cac96fca-40ed-477d-9de0-c624d29d0504',
        label: 'Pet care ',
        icon: {
            asIcon: MaterialIcons,
            name: 'pets',
            color: 'indigo.700'
        },
        categories: petCareCategories,
        packages: [
            {
                id: 'f59d3eae-4990-4754-bddf-f755908904ff',
                packageName: 'Dog grooming',
                packageDescription: [
                    'Groom your dog with no hassle',
                ],
                packageRate: 400,
                categories: [petCareCategories[0].categoryName]
            }
        ]

    }

]
