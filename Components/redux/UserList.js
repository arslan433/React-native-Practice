import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useDispatch} from 'react-redux';
import {getUserList} from './Action';



export default function UserList() {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUserList());
    });
  return (
    <View>
      <Text>UserList</Text>
    </View>
  )
}

const styles = StyleSheet.create({})