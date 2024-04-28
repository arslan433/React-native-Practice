import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
export default function TabNavigation() {
    // let Tab = createBottomTabNavigator();
    let Tab = createMaterialTopTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login} />
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='Other' component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
const Login = () => {
    return (
        <View style={{ backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, color: 'white' }}>Login</Text>
        </View>
    )
}
const Home = () => {
    return (
        <View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30, color: 'white' }}>Home</Text>
        </View>
    )
}
const styles = StyleSheet.create({})