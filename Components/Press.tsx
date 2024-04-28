// import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// export default function Press() {
//     let [show, setshow] = useState(true)
//     let dely = () => {
//         setTimeout(() => {
//             setshow(!show)
//         }, 2000)
//     }
//     return (
//         <View style={styles.main}>
//             <Pressable style={styles.press}
//                 onLongPress={dely}
//             >
//                 <Text>Toogle</Text>
//             </Pressable>
//             <StatusBar
//                 backgroundColor='skyblue'
//                 barStyle='dark-content'
//                 hidden={show}
//             />
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     press: {
//         backgroundColor: 'gold',
//         padding: 10
//     }
// })
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet , StatusBar } from 'react-native';

const Press = () => {
  const [isLongPress, setIsLongPress] = useState(false);

  let longPressTimeout: string | NodeJS.Timeout;

  const handleLongPressIn = () => {
    longPressTimeout = setTimeout(() => {
      setIsLongPress(true);
    }, 1000); 
  };

  const handleLongPressOut = () => {
    clearTimeout(longPressTimeout);
    setIsLongPress(false);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPressOut={handleLongPressOut}
        onPress={handleLongPressIn}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightgray' : 'lightblue',
          },
          styles.button,
        ]}
      >
        <Text>{isLongPress ? ['Long Pressed' , <StatusBar
         backgroundColor='skyblue'
                 barStyle='dark-content'
                 
             /> ] : 'Press Me'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 20,
    borderRadius: 10,
  },
});

export default Press;
