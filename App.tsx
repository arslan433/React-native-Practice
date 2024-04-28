/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme
} from 'react-native';
import Flatcards from './Components/Flatcards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCard from './Components/FancyCard';
import LoginForm from './Components/LoginForm';
import Users from './Components/Users';
import Radiobutton from './Components/Radiobutton';
import CheckBox from './Components/Radiobutton';
import Modalbox from './Components/Modalbox';
import Press from './Components/Press';
import StackNavigation from './Components/StackNavigation';
import TabNavigation from './Components/TabNavigation';
import Api from './Components/Api';
import ApiFlatlist from './Components/ApiFlatlist';
import PostApiWithForm from './Components/PostApiWithForm';
import ListOfApi from './Components/ListOfApi';
import SearchApi from './Components/SearchApi';
import UseRef from './Components/UseRef';
import AsyncStorage2 from './Components/AsyncStorage';
import ReduxMain from './Components/redux/ReduxMain';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './Components/redux/UserList';
function App(): JSX.Element {
  let Stack = createNativeStackNavigator()

  
  return (
    <PostApiWithForm/>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={ReduxMain}
    //     options={{
    //       headerRight: () => <Button title='Users' />,
    //       headerStyle: {
    //         backgroundColor: 'blue'
    //       },
    //       headerTintColor: 'white',
    //       headerTitleStyle: {
    //         fontSize: 25
    //       }
    //     }}
    //     />
    //     <Stack.Screen name='User' component={UserList}
          // options={{
          //   // headerTitle: ()=><Button title='left' />,
          //   headerRight: () => <Button title='Users'/>,
          //   headerStyle: {
          //     backgroundColor: 'blue'
          //   },
          //   headerTintColor: 'white',
          //   headerTitleStyle: {
          //     fontSize: 25
          //   }
          // }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    )
}
export default App;
