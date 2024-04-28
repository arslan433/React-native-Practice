// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'

// export default function Radiobutton() {
//     let [radio ,setradio] = useState()
//   return (
//     <View>
//       <Text>Radiobutton</Text>
//       <TouchableOpacity onPress={()=>setradio(1)}>
//         <View style={styles.main}>
//             <View style={styles.button}>
//                 {
//                    radio===1 ? <View style={styles.iner}></View>:null
//                 }
//             </View>
//             <Text style={styles.text}>Radio 1</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={()=>setradio(2)}>
//         <View style={styles.main}>
//             <View style={styles.button}>
//                 {
//                    radio===2 ? <View style={styles.iner}></View>:null
//                 }
//             </View>
//             <Text style={styles.text}>Radio 2</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     main:{
//         flex: 1 ,
//         justifyContent:'center',
//         alignItems:'center',
//         flexDirection:'row'
//     },
//     button:{
//         height:35,
//         width:35,
//         borderColor:'black',
//         borderWidth:2,
//         borderRadius:20,
//     },
//     text:{
//         margin:8,
//         fontSize:20,
//         color:'black'
//     },
//     iner:{
//         height:24,
//         width:24,
//         backgroundColor:'blue',
//         borderRadius:12,
//         margin:3
//     }
// })
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const RadioButton = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = [
//     { id: 1, label: 'Option 1' },
//     { id: 2, label: 'Option 2' },
//     { id: 3, label: 'Option 3' },
//   ];

//   const selectOption = (id) => {
//     setSelectedOption(id);
//   };

//   return (
//     <View style={{ marginTop: 50, alignItems: 'center' }}>
//       {options.map((option) => (
//         <TouchableOpacity
//           key={option.id}
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginVertical: 10,
//           }}
//           onPress={() => selectOption(option.id)}
//         >
//           <View
//             style={{
//               height: 24,
//               width: 24,
//               borderRadius: 12,
//               borderWidth: 2,
//               borderColor: '#000',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             {selectedOption === option.id && (
//               <View
//                 style={{
//                   height: 12,
//                   width: 12,
//                   borderRadius: 6,
//                   backgroundColor: '#000',
//                 }}
//               />
//             )}
//           </View>
//           <Text style={{ marginLeft: 10 }}>{option.label}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// export default RadioButton;
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Button } from 'react-native';

const CheckBox = () => {
  const [checkBoxes, setCheckBoxes] = useState([
    { id: 1, label: 'Option 1', checked: false },
    { id: 2, label: 'Option 2', checked: false },
    { id: 3, label: 'Option 3', checked: false },
  ]);

  const toggleCheckBox = (id: number) => {
    const updatedCheckBoxes = checkBoxes.map((checkBox) =>
      checkBox.id === id ? { ...checkBox, checked: !checkBox.checked } : checkBox
    );
    setCheckBoxes(updatedCheckBoxes);
  };
  let [show, setshow] = useState(false)
  return (
    <View style={{ marginTop: 50, alignItems: 'center' }}>
      {checkBoxes.map((checkBox) => (
        <TouchableOpacity
          key={checkBox.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}
          onPress={() => toggleCheckBox(checkBox.id)}
        >
          <View
            style={{
              height: 24,
              width: 24,
              borderWidth: 2,
              borderColor: '#000',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {checkBox.checked && (
              <View
                style={{
                  height: 12,
                  width: 12,
                  backgroundColor: '#000',
                }}
              />
            )}
          </View>
          <Text style={{ marginLeft: 10 }}>{checkBox.label}</Text>
        </TouchableOpacity>
      ))}
      <Button title="Show" onPress={()=>setshow(!show)} /> 
     {
      show ?  <ActivityIndicator color={'red'} />:null
     }
    </View>
  );
};
export default CheckBox;
