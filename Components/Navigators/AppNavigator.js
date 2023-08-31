import { createDrawerNavigator } from '@react-navigation/drawer';
import Chat from '../Chat';
import Settings from '../Settings';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Messages" component={Chat}/>
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default AppNavigator