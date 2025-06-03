import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParamList } from '../../routes/StackNavigation';

const products = [
  {id:1, name:'Product 1'},
  {id:2, name:'Product 2'},
  {id:3, name:'Product 3'},
  {id:4, name:'Product 4'},
  {id:5, name:'Product 5'},
  {id:6, name:'Product 6'},
  
]

const ProductsScreen = () => {
  const navigaton = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={globalStyles.container}>
      <Text style={{fontSize: 30}}>
        Productos
      </Text>
      <FlatList 
        data={products}
        renderItem={({item}) => (
          <PrimaryButton 
            label={item.name}
            customStyles={{marginBottom: 10}}
            onPress={() => {
              navigaton.navigate('Product', {
                id:item.id, 
                name:item.name
              })
            }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <PrimaryButton 
        label='Ajustes'
        onPress={() => navigaton.navigate('Settings')}
      />
    </View>
  );
}

export default ProductsScreen;
