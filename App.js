import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Components/Navigators/RootNavigator';
import { useContext } from 'react';
import { AuthContext, AuthProvider } from './Components/Context/AuthContext';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function App({navigation}) {

  const [fontsLoaded] = useFonts({
    'Nico': require('./fonts/NicoMoji-Regular.ttf'),

  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    

      <NavigationContainer>
        
        <AuthProvider navigation={navigation} >
          
          <RootNavigator onLayout={onLayoutRootView} />
       
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
