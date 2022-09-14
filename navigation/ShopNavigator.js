import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from 'react-native';

import CategoryScreen from "../screens/CategorysScreen";
import CategoryProductScreen from "../screens/CategoryProductScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
          <Stack.Navigator initialRouteName="Home"  
            screenOptions={{
                    headerStyle: {
                      backgroundColor: Platform.OS === 'android' ? COLORS.primary: COLORS.accent
                    },
                    headerTintColor: Platform.OS === 'android' ? 'black' :COLORS.primary,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}>
                
                <Stack.Screen 
                name="Home" 
                component={CategoryScreen}                
                options={
                    {
                        title:'Deportes X',                                                                
                    }
                }              
                />
                <Stack.Screen 
                name="Products" 
                component={CategoryProductScreen}
                options={({route})=> ({title: route.params.name})}
                />
                <Stack.Screen 
                name="Details" 
                component={ProductDetailScreen}
                options={({route})=> ({title: route.params.name})}
                />
            </Stack.Navigator>
    )
}
export default ShopNavigator;