import ReportDetailScreen from '../screens/ReportDetailScreen'
import ReportsListScreen from '../screens/ReportsListScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const ReportListStack = createNativeStackNavigator()
export default function ReportListNavigator() {
  return (
    <ReportListStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <ReportListStack.Screen name="Lista" component={ReportsListScreen} />
      <ReportListStack.Screen name="DetailsScreen" component={ReportDetailScreen} />
    </ReportListStack.Navigator>
  )
}