import { StackNavigationProp} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type HomeStackParamList = {
    HomeView: undefined;
    Services: {
        serviceId : string
    };
    MapLocation: undefined;
}

type ServiceNavigationProp = StackNavigationProp<HomeStackParamList, 'Services'>;
type ServiceRouteProp = RouteProp<HomeStackParamList, 'Services'>;

export {
    HomeStackParamList,
    ServiceRouteProp,
    ServiceNavigationProp
}