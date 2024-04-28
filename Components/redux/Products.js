import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addToCart, removefromCart } from './Action'
import { useDispatch, useSelector } from 'react-redux'
export default function Products( ) {
    let products = [
        {
            name : 'Mobile',
            price : 13000,
            image : 'https://th.bing.com/th/id/OIP.L-DL9kvsplEZMr87IkIGhAHaH_?w=203&h=219&c=7&r=0&o=5&dpr=1.5&pid=1.7'
        },
        {
            name : 'Apple',
            price : 180000,
            image : 'https://th.bing.com/th/id/OIP.L-DL9kvsplEZMr87IkIGhAHaH_?w=203&h=219&c=7&r=0&o=5&dpr=1.5&pid=1.7'
        },
        {
            name : 'Samsung',
            price : 13000,
            image : 'https://th.bing.com/th/id/OIP.L-DL9kvsplEZMr87IkIGhAHaH_?w=203&h=219&c=7&r=0&o=5&dpr=1.5&pid=1.7'
        },
        {
            name : 'Realme',
            price : 22000,
            image : 'https://th.bing.com/th/id/OIP.L-DL9kvsplEZMr87IkIGhAHaH_?w=203&h=219&c=7&r=0&o=5&dpr=1.5&pid=1.7'
        }
    ]
    let dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);

    const handleAddtocart = (item) => {
        dispatch(addToCart(item));
    };
    const handleRemoveFromCart =(item)=>{
        dispatch(removefromCart(item.name))
    }
    const isItemInCart = (itemName, cartItems) => {
        return cartItems.some((cartItem) => cartItem.name === itemName);
    };

    return (
        <ScrollView>
            <Text>Products</Text>
            {products.map((item, index) => {
                const itemAdded = isItemInCart(item.name, cartItems);
                return (
                    <View key={index} style={styles.main}>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                        <Image style={{ width: 200, height: 200, margin: 10 }} source={{ uri: item.image }} />
                        {itemAdded ? (
                            <Button title='Remove from cart' onPress={() => handleRemoveFromCart(item)} />
                        ) : (
                            <Button title='Add to cart' onPress={() => handleAddtocart(item)} />
                        )}
                    </View>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main:{
        margin:20,
        alignItems:'center'
    }
})