import { Text, View } from 'react-native'
import HamburgerMenu from '../../components/shared/HamburgerMenu';
import { Ionicons } from '../../components/shared/Ionicons';

const Tap1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>
        Tap1Screen
      </Text>
      <Ionicons name='rocket-outline' color='red' />
    </View>
  );
}

export default Tap1Screen;
