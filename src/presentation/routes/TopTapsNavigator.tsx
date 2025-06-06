import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AboutScreen from '../screens/about/AboutScreen';

const Tab = createMaterialTopTabNavigator();

const TopTapsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default TopTapsNavigator;