import { createDrawerNavigator } from '@react-navigation/drawer';
import ChartScreen from '../screens/ChartScreen';
import ReportDetailScreen from '../screens/ReportDetailScreen';
import Tabs from './tabs';

const Drawer = createDrawerNavigator()

export default function SideNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false
    }}>
      <Drawer.Screen name="Pocetna" component={Tabs} />
      <Drawer.Screen name="Statistika" component={ChartScreen} />
    </Drawer.Navigator>
  )
}