import { createStackNavigator } from '@react-navigation/stack';
import Register from '../Register';
import Login from '../Login';

const Stack = createStackNavigator();

export default function AuthNavigator({navigaton}) {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#177ca4',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
      },
    }} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
