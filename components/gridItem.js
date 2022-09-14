import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

const GridItem= ({item, onSelected})=>{
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity
                style={styles.container}
                onPress={()=>onSelected(item)}
                >
                <ImageBackground source={{uri:`${item.img}`}} style={{width: '100%', height: '100%'}}>    
                    <View>                        
                            <Text style={styles.title}>{item.title}</Text>                                            
                    </View>
                </ImageBackground>
            </TouchableOpacity> 
        </View>
    )
}
const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        borderRadius:6,
        margin:15,
        height:100,
    },
    container:{
        flex:1,
        borderRadius:6,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2},
        shadowRadius:6,
        elevation:3,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:8,
    },
    title:{
        color:'black',
        fontSize:20,
        fontFamily:'UbuntuBold',
    }
})
export default GridItem;