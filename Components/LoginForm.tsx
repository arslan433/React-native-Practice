import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
export default function LoginForm() {
    let [name,setname] = useState("")
    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let [display,setdisplay] = useState(false)
    let [show,setshow] = useState(true)
    let [hide,sethide] = useState('Show')
  return (
    <View  style={{backgroundColor:'white'}}>
      <Text>Login</Text>
        <TextInput style={styles.box} onChangeText={(text)=>setname(text)} placeholder='Enter your name' value={name}/>
        <TextInput style={styles.box} onChangeText={(text)=>setemail(text)} placeholder='Enter your email' value={email}/>
        <TextInput style={styles.box}   secureTextEntry={show}  onChangeText={(text)=>setpassword(text)} placeholder='Enter your Pasword' value={password} />
        <View style={ [ {marginBottom:10}, styles.pass]}>
        <Button  title={hide} onPress={()=>show ? [setshow(false) , sethide('Hide')] : [setshow(true),, sethide('Show') ]} ></Button>
        </View>
        <View style={{marginBottom:10}}>
        <Button  title='Print Data' onPress={()=>setdisplay(true)}></Button>
        </View>
        {
            display?
            <View>
            <Text> Your  name is {name}</Text>
            <Text> Your email is {email}</Text>
            <Text> and your Password is {password}</Text>
            </View>: null
        }
        <Button title='Clear' color={'red'} onPress={()=>[setname('') , setemail('') , setpassword('') , setdisplay(false)] }  ></Button>
    </View>
  )
}
const styles = StyleSheet.create({
    box:{
        borderColor:'blue',
        color:'black',
        fontSize:20,
        borderStyle : 'solid',
        borderWidth:2,
        margin:10,
        borderRadius:4
    },
    pass:{
        width:60,
        alignItems:'center',
        justifyContent:'center',
        position:'relative',
        left:'80%'
    }
})