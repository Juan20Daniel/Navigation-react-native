import { createBottomTabNavigator, TransitionPresets } from '@react-navigation/bottom-tabs';
import Tap1Screen from '../screens/taps/Tap1Screen';
import { globalColors } from '../theme/theme';

import TopTapsNavigator from './TopTapsNavigator';
import StackNavigator from './StackNavigation';
import { Ionicons } from '../components/shared/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTapsNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerStyle: {
                elevation: 0
            },
            tabBarStyle:{
                backgroundColor: 'white'
            },
            sceneStyle: {
                backgroundColor:globalColors.background
            },
            tabBarShowLabel:false,
        }}
    >
      <Tab.Screen 
        name="Tap1" 
        options={
          {
            title:'Tap1', 
            tabBarIcon:(props) => (<Ionicons name='add-circle-outline' color={props.color} />),
            ...TransitionPresets.ShiftTransition
          }
        } 
        component={Tap1Screen} 
      />
      <Tab.Screen 
        name="Tap2" 
        options={{
          title:'Tap2', 
          tabBarIcon:(props) => (<Ionicons name='sync-outline' color={props.color} />),
          ...TransitionPresets.ShiftTransition
        }} 
        component={TopTapsNavigator} 
        />
      <Tab.Screen 
        name="Tap3" 
        options={{
          title:'Tap3',
          tabBarBadge:1,
          tabBarIcon:(props) => (<Ionicons name='log-out-outline' color={props.color} />),
          ...TransitionPresets.ShiftTransition
        }} 
        component={StackNavigator} 
      />
    </Tab.Navigator>
  );
}

export default BottomTapsNavigator;