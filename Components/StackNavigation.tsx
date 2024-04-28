import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import WebView from 'react-native-webview'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
export default function StackNavigation() {
  let Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}
          options={{
            // headerTitle: ()=><Button title='left'/>,
            headerRight: () => <Text > </Text>,
            headerStyle: {
              backgroundColor: 'blue'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontSize: 25
            }
          }}
        />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
function Home(props: { route: { params: { name: any; age: any } } }) {
  let [Show, setshow] = useState(false)
  let {name,age} = props.route.params;
  return (
    <View style={styles.container}>
      {
        Show ? <View style={styles.box}>
          <View style={styles.modal}>
            <Text style={{ marginBottom: 50 }}>NAME: {name}</Text>
            <Text style={{ marginBottom: 50 }}>AGE : {age}</Text>
            <Button title='close' onPress={() => setshow(false)} />
          </View>
        </View> : null
      }
      <View >
        <Button title='Show' onPress={() => setshow(true)} />
      </View>
    </View>
  )
}
function Login(props: { navigation: { navigate: (arg0: string) => void } }) {
  let [name,setname] = useState("")
  let age = 29
  return (
    <>

      <Text style={{color:"blue"}}>Login Screen</Text>
      <TextInput style={{backgroundColor:"blue"}} placeholder='Enter your name' onChangeText={(text)=>setname(text)}/>

      <Button title='Home' onPress={() => props.navigation.navigate('Home',{name,age})} />
      {/* <WebView source={{uri:"https://reactnative.dev/"}} /> */}
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modal: {
    height: 200,
    width: 200,
    backgroundColor: 'skyblue',
    padding: 20,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 2,
    justifyContent: 'center'
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})