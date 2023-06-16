import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './tabs';

export default function DefaultScreen({navigation}) {

  return (
    <Tabs/>
    );
}