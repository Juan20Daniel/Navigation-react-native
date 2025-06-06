import { useWindowDimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import StackNavigator from './StackNavigation';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import BottomTapsNavigator from './BottomTapsNavigator';
const Drawer = createDrawerNavigator();

const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrowerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType:(dimensions.width >= 758) ? 'permanent' : 'slide'
      }}  
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Taps" component={BottomTapsNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default SideMenuNavigator;

const CustomDrowerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View  style={{
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50
      }} />
      <DrawerItemList {...props} /> 
    </DrawerContentScrollView>
  )
}