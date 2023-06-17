import { StyleSheet } from 'react-native';
import { AuthProvider } from './context/AuthContext';
import AppNavContainer from './navigation/AppNavContainer';

export default function App() {

  //#67ab73 boja slike final
  //#41a656 boja sa globusa
  return (
    <AuthProvider>
      <AppNavContainer/>
    </AuthProvider>

  );
}

const styles = StyleSheet.create({

});
