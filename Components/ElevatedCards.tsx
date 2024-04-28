import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.cards , styles.elevatedcards]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.cards , styles.elevatedcards]}>
            <Text>And</Text>
        </View>
        <View style={[styles.cards , styles.elevatedcards]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.cards , styles.elevatedcards]}>
            <Text>To</Text>
        </View>
        <View style={[styles.cards , styles.elevatedcards]}>
            <Text>Show</Text>
        </View>
        <View style={[styles.cards , styles.elevatedcards]}>
            <Text>Scroll Bar</Text>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    heading: {
        fontSize : 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color:'black'
      },
      container:{
        padding:8 
      },
      cards:{
        height:100,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#7878FF',
        borderRadius: 6,
        margin : 8
      },
      elevatedcards:{
        elevation : 6,
        shadowOffset: {
            height :1,
            width:1
        },
        shadowColor: '#31F61B',
        shadowOpacity : 1,
        shadowRadius:4
      }
})