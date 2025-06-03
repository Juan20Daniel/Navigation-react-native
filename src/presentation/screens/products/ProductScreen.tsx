import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Product, RootStackParamList } from '../../routes/StackNavigation';
import { globalStyles } from '../../theme/theme';



const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParamList, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  },[]);

  return (
    <View style={globalStyles.container}>
      <Text style={{fontSize: 20, textAlign:'center'}}>
        {params.name}
      </Text>
    </View>
  );
}

export default ProductScreen;
