import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PerfilScreen from '../screens/PerfilScreen';
import OperacionesScreen from '../screens/OperacionesScreen';
import HistorialScreen from '../screens/HistorialScreen';

const Tab = createBottomTabNavigator();

export default function ButtonNavigators () {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Perfil" component={PerfilScreen} />
      <Tab.Screen name="Operacion" component={OperacionesScreen} />
      <Tab.Screen name="Historial" component={HistorialScreen} />
    </Tab.Navigator>
  );
}