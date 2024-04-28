import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
export default function Header() {
    const cartData = useSelector((state) => state.reducer);
    let [cart , setcart] = useState(0)
    useEffect (() =>{
        setcart(cartData.length)
    },[cartData])
    return (
        <View>
            <Text style={styles.header}>{cart} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'right', backgroundColor: 'orange', fontSize: 25
    }
})