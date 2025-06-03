import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import StackNavigator from './presentation/routes/StackNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />
      <StackNavigator />
    </NavigationContainer>
  )
}
export default App;