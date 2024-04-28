import { StyleSheet, Text, View } from 'react-native' 
import React from 'react'

const Flatcards = () => {
  return (
    <View >
      <Text style={styles.heading}>Flatcards</Text>
      <View style={styles.container}>
        <View style={styles.Red} >
          <Text style={{color:"black"}}>Red</Text>
        </View>
        <View style={styles.Green}>
          <Text style={{color:'white'}}>Green</Text>
        </View>
        <View style={styles.Blue}>
          <Text style={{color:'white'}}>Blue</Text>
        </View>
      </View>
    </View>
  )
}
export default Flatcards
const styles = StyleSheet.create({
  heading: {
    fontSize : 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color:'black'
  },
  container:{
    flex:1,
    flexDirection : 'row',
    padding:8
  },
  Red:{
    height:100,
    width: 100,
    flex:1 ,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius : 4,
    margin : 8
  },
  Green:{
    height:100,
    width: 100,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius : 4,
    margin : 8
  },
  Blue:{
    height:100,
    width: 100,
    flex:1 ,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius : 4,
    margin : 8
  }
})