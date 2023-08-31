import { createDrawerNavigator } from '@react-navigation/drawer';
import Chat from '../Chat';
import Settings from '../Settings';
import { BottomTabNavigator } from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Messages" component={Chat}/>
      <Drawer.Screen name="Settings" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

export default AppNavigator