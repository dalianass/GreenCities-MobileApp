import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import AddReportScreen from './screens/AddReportScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ReportDetailScreen from './screens/ReportDetailScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ReportsListScreen from './screens/ReportsListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Map from './components/Map';
import Chart from './components/Chart';
import ChartScreen from './screens/ChartScreen';
import AppImageUpload from './components/AppImageUpload';
import DefaultScreen from './navigation/DefaultScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  const testReport = {
      description: 'Test description',
      title: 'Test title',
      address: 'Test address'
  };

  //#67ab73 boja slike final
  //#41a656 boja sa globusa
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Green'  
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3f8861',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: (props) => ( // App Logo
        <ImageBackground
        style={{ width: 50, height: 50 }}
        source={{uri:"https://res.cloudinary.com/daq9ulbte/image/upload/v1686837304/b7ca9800-93d4-4de9-b0b8-dc56117f23a1.png"}}
        resizeMode='contain'
      />
      ),
      headerTitleStyle: { flex: 1 },
      }}>
      <Stack.Screen name='Statistika' component={ChartScreen} />
      <Stack.Screen name='Prijava' component={LoginScreen} />
      <Stack.Screen name='Registracija' component={RegisterScreen} />
      <Stack.Screen name='Pregled prijava' component={ReportsListScreen} />
      <Stack.Screen name='AddReport' component={AddReportScreen} />
      <Stack.Screen name='Upload' component={AppImageUpload} />
      <Stack.Screen name='Green' component={WelcomeScreen} options={{headerShown: false}} />
      <Stack.Screen name='Default' component={DefaultScreen} />
      <Stack.Screen name='Mapa' component={Map} />
      </Stack.Navigator>
      {/* <Tabs/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
