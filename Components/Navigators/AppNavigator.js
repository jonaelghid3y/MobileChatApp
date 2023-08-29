import { createDrawerNavigator } from '@react-navigation/drawer';
import Chat from '../Chat';
import UserSettings from '../UserSettings';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={Chat}/>
      <Drawer.Screen name="Article" component={UserSettings} />
    </Drawer.Navigator>
  );
}

export default AppNavigator