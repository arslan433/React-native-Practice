import { StyleSheet, Button } from 'react-native'
import React from 'react'
import Header from './Header'
import Products from './Products'
import { Provider } from 'react-redux'
import store from './Store'
export default function ReduxMain({ navigation }) {
  return (
    <Provider store={store}>
      <Button title='Show List' onPress={() => navigation.navigate("User")} />
      <Header />
      <Products />
    </Provider>
  )
}

const styles = StyleSheet.create({})