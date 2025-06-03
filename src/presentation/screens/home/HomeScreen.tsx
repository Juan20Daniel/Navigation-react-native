import React from 'react';
import { View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { type RootStackParamList } from '../../routes/StackNavigation';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={globalStyles.container}>
      <PrimaryButton 
        label='Productos'
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton 
        label='Ajustes'
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

export default HomeScreen;
