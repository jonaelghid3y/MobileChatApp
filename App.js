import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Components/Navigators/RootNavigator';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from './Components/Context/AuthContext';

export default function App() {
  
  return (
    

      <NavigationContainer>
        
        <AuthProvider>
          
          <RootNavigator />
       
        </AuthProvider>

      </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    
  
  },
});
