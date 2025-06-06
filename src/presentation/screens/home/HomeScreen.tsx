import React, { useEffect } from 'react';
import { View, Pressable, Text } from 'react-native'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { type RootStackParamList } from '../../routes/StackNavigation';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      )
    })
  },[]);
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
