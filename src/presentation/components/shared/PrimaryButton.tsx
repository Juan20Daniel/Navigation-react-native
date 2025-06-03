import React from 'react';
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native'
import { globalStyles } from '../../theme/theme';

interface Props {
    label: string;
    customStyles?: StyleProp<ViewStyle>;
    onPress: () => void;
}

const PrimaryButton = ({label, customStyles, onPress}:Props) => {
 
  return (
    <Pressable 
      style={[
        globalStyles.primaryButton,
        customStyles
      ]} 
      onPress={() => onPress()}
    >
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
}

export default PrimaryButton;
