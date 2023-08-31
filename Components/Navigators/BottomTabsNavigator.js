import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../Settings';
import Camera from '../Camera';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { View,StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen  name="Usersettings" component={Settings}
      
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ focused, color, size }) => (
          // Choose the icon based on whether the tab is focused
          <View style={styles.icons}>
          <FontAwesome5  name={focused ? 'user-alt' : 'user'} size={20} color="#177ca4" />
          </View>
          
        ),}} />
      <Tab.Screen name="Camera" component={Camera}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ focused, color, size }) => (
            <View>
            <Ionicons name={focused ? 'camera' : 'camera-outline'} size={30} color="#177ca4" />
        
          </View>
          
        ),}} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
icons:{
    
}

});


