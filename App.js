import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddReportScreen from './screens/AddReportScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ReportDetailScreen from './screens/ReportDetailScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ReportsListScreen from './screens/ReportsListScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ProbaMape from './screens/ProbaMape';
import Map from './components/Map';
import Chart from './components/Chart';
import ChartScreen from './screens/ChartScreen';
import AppImageUpload from './components/AppImageUpload';

export default function App() {

  const Stack = createNativeStackNavigator();
  const testReport = {
      description: 'Test description',
      title: 'Test title',
      address: 'Test address'
  };

  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName='AddReport'>
    <Stack.Screen name='Statistika' component={ChartScreen} />
    <Stack.Screen name='Prijava' component={LoginScreen} />
    <Stack.Screen name='Registracija' component={RegisterScreen} />
    <Stack.Screen name='Pregled prijava' component={ReportsListScreen} />
    <Stack.Screen name='AddReport' component={AddReportScreen} />
    <Stack.Screen name='Upload' component={AppImageUpload} />
    <Stack.Screen name='Green' component={WelcomeScreen} />
    <Stack.Screen name='Mapa' component={Map} />
    </Stack.Navigator>
  </NavigationContainer>
  // <ProbaMape/>
  // <WelcomeScreen/>

  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     {/* <AddReportScreen/> */}
  //     {/* <LoginScreen/> */}
  //     <ReportsListScreen/>
  //     <WelcomeScreen/>
  //     <ReportDetailScreen/>
  //     <RegisterScreen/>
  //     <StatusBar style="auto" />
  //   </View>
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
