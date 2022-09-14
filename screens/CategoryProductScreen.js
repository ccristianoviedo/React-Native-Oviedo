import React, {useEffect} from 'react';
import { FlatList } from 'react-native';
import ProductItem from '../components/productItem'

import {useSelector, useDispatch} from 'react-redux'

import {filteredProduct, selectProduct} from '../store/actions/product.action'


export default function CategoryBreadScreen({navigation}) {

    const dispatch = useDispatch();

    const categoryProductos = useSelector(store=> store.productos.filteredProduct)
    
    const category= useSelector(store=>store.categories.selected);

    useEffect(() => {

      dispatch(filteredProduct(category.id));

    }, []);
    
    const handlerSelected = (item) =>{
      dispatch(selectProduct(item.id))
        navigation.navigate('Details',{
            producto: item
        })
    }

    const renderItemProduct = ({ item }) =>(<ProductItem item={item} onSelected={handlerSelected}/>)

  return (
    <FlatList
      data={categoryProductos}
      keyExtractor={(item)=>item.id}
      renderItem={renderItemProduct}  
    />
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
