import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import ProductScreen from '../screens/products/ProductScreen';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export interface Product {
  id: number;
  name: string;
}

export type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Product: Product;
  Profile: undefined;
  Settings: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

function StackNavigator() {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      headerShown: false
    })
  },[]);
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;