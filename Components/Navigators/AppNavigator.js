import { createDrawerNavigator } from '@react-navigation/drawer';
import { Settings } from 'react-native';
import Register from '../Register';
import Login from '../Login';
import Chat from '../Chat';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={Chat} />
      <Drawer.Screen name="Article" component={Register} />
    </Drawer.Navigator>
  );
}

export default AppNavigator