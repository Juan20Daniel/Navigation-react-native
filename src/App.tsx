import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import StackNavigator from './presentation/routes/StackNavigation';
import SideMenuNavigator from './presentation/routes/SideMenuNatigator';
import BottomTapsNavigator from './presentation/routes/BottomTapsNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTapsNavigator /> */}
    </NavigationContainer>
  )
}
export default App;