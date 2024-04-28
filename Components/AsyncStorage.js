import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import  AsyncStorage  from '@react-native-async-storage/async-storage'

export default function AsyncStorage2() {
    // let [name ,setname ] = useState('null')
    let [email ,setemail ] = useState('')
    let [show,setshow] = useState('')
    const setdata = async ()=>{
        try{
            await AsyncStorage .setItem ( "email" , email)
            console.warn("Data is set")
        }catch (error) {
            console.error("set data error")
        }
    }
    const getdata = async ()=>{
        try{

             let get =  await AsyncStorage .getItem   ("email")
            setshow(get)
        }catch (error) {
            console.error("Error in getting data")
        }
    }
    const removedata = async ()=>{
        try{
               await AsyncStorage .removeItem ("email") 
            console.warn("Data is removed")
            setshow('')
        }catch (error) {
            console.error("Error in removing data")
        }
    }
  return (
    <View>
      <Text>AsyncStorage | {show} </Text>
      {/* <TextInput placeholder='Enter name' onChangeText={(text) =>setname(text)}/> */}
      <TextInput placeholder='Enter email' onChangeText={(text) =>setemail(text)}/>
    <Button title='Set data' onPress={setdata}/>
    <Button title='get data' onPress={getdata}/>
    <Button title='remove data' onPress={removedata}/>
    </View>
  )
}

const styles = StyleSheet.create({

})