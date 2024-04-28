import { StyleSheet, Text, TextInput, View,Button } from 'react-native'
import React, { useRef } from 'react'

export default function UseRef() {
    let ref = useRef()
    function FnRef(){
        ref.current.focus();
        ref.current.setNativeProps({
            fontSize:30,
            backgroundColor:"skyblue"
        })
        ref.current='Arslan'
    }
  return (
    <View>
      <Text>UseRef</Text>
      <TextInput ref={ref} style={styles.input} placeholder='Enter Email'/>
      <TextInput style={styles.input} placeholder='Enter Password'/>
      <Button title='Btn' onPress={FnRef} />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        borderRadius:4,
        borderColor:"red",
        borderWidth:1,
        margin:15
    }
})