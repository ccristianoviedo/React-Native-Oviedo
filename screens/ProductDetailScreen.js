import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/actions/cart.action";

const ProductDetailScreen=()=>{

    const dispatch = useDispatch();
    const producto = useSelector(state=> state.productos.selected)
    
    const handlreAddItemCart =()=>dispatch(addItem(producto))

    return(
        <View style={styles.productItem}>
            <Text style={styles.title}>{producto.name}</Text>
            <Button title="AGREGAR AL CARRITO" onPress={handlreAddItemCart}/>
            <View>
                <Image source={{uri:`${producto.img}`}}
                    style={styles.img} />
            </View>
            <Text style={styles.detail}>{producto.description}</Text>            
            <Text style={styles.detail}>Precio: {producto.price}</Text>
            <Text style={styles.detail}>Peso: {producto.color}</Text>
            <Ionicons name='cart' size={24} color='white'              
            />
        </View>      
    )
}
const styles = StyleSheet.create({
    title:{
        margin:15,
        fontSize: 18,
    },
    productItem:{
        flex:1,
        margin:10,
        padding:20,
        backgroundColor:'white',
        borderRadius:3,
    },
    detail:{
        fontSize: 12,
        backgroundColor:'white',
    },
    img:{
        width: 300,
        height: 300,
        borderRadius:300,
        marginLeft:50,
    }
})
export default ProductDetailScreen;