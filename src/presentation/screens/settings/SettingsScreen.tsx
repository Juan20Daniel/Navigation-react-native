import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/StackNavigation';

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={globalStyles.container}>
      <Text>
        Settings screen
      </Text>
      <PrimaryButton 
        label='Regresar'
        onPress={() => navigation.goBack()}
      />
      <PrimaryButton 
        label='Regresar al Home'
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
}

export default SettingsScreen;
