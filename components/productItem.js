import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image} from "react-native";

const BreadItem=({item, onSelected})=>{
    return(
        <TouchableOpacity
            onPress={()=>onSelected(item)}            
        >
            <View style={styles.breadItem}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View>
            <Image source={{uri:`${item.img}`}}
                    style={styles.img} />
            </View>
            <View>
                <Text style={styles.detail}>Precio: {item.price}</Text>
                <Text style={styles.detail}>color: {item.color}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    title:{
        margin:15,
        fontSize: 20,
        color:'black',
    },
    breadItem:{
        flex:1,
        flexDirection:"column",
        margin:10,
        padding:20,
        backgroundColor:'white',
        borderRadius:3,
    },
    detail:{
        fontSize: 18,
        color:'grey',
        backgroundColor:'white',
        border: 'black',
        paddingLeft:80,
    },
    img: {
        width: 200, 
        height: 200,
        marginLeft:150,
        borderRadius:30,
    }
})
export default BreadItem;