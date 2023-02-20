import { StackNavigationProp} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type HomeStackParamList = {
    HomeView: undefined;
    ServiceDetails: {
        serviceId : string
    }
}

type ServiceNavigationProp = StackNavigationProp<HomeStackParamList, 'ServiceDetails'>;
type ServiceRouteProp = RouteProp<HomeStackParamList, 'ServiceDetails'>;

export {
    HomeStackParamList,
    ServiceRouteProp,
    ServiceNavigationProp
}