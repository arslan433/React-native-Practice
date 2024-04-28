import { Button, ScrollView, StyleSheet, Text, View,Modal, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
export default function ListOfApi() {
    let [data, setdata] = useState([])
    let [search, setsearch] = useState([])
    let [show, setshow] = useState(false)
    let [selected, setselected] = useState(undefined)

    function ShowModal(data){
        setshow(true)
        setselected(data)
    }
    const getApi = async (text) => {
        try {
            const url = `http://10.0.2.2:3000/users`;
            // console.warn(url)
            let result = await fetch(url)
            result = await result.json();
            setdata(result)
          
        }
        catch (error) {
            console.error("there is a error")
        }
    }
    const  deleteapi = async (id) => {
        try {
            const url = "http://10.0.2.2:3000/users";
            let result = await fetch(`${url}/${id}`,{
                method:"delete"
            })
            result = await result.json();
            console.warn("User deleted")
            getApi()
        }
        catch (error) {
            console.error("there is an  error in deleting")
        }
    }
    const  Updateapi = async (id) => {
        try {
            // console.warn(name ,age ,email,selected.id)
            const url = "http://10.0.2.2:3000/users";
            let id = selected.id;
            let result = await fetch(`${url}/${id}`,{
                method:"Put",
                headers:{
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify({name,age,email})
            })
            result = await result.json();
            console.warn("User Updated")
            getApi()
            setshow(false)
        }
        catch (error) {
            console.error("there is an  error in Updating")
        }
    }
    useEffect(() => {
        getApi()
    }, [])
    
        let [name ,setname] = useState(undefined)
        let [age ,setage] = useState(undefined)
        let [email ,setemail] = useState(undefined)


        useEffect(() =>{
            if(selected){
                setname(selected.name)
                setage(selected.age)
                setemail(selected.email)
            }

        }, [selected])
    
   
    return (
        <>
        <ScrollView >
                <TextInput placeholder='Search' value={search} onChangeText={[(text)=>setsearch(text),
                     (text)=>getApi(text)]
                    }
                     />
            <View style={{flexDirection:'row' , flex:1}}>
                <Text style={{flex:1.2 , marginLeft:10 , fontSize:20, color:'black'}}>NAME</Text>
                <Text style={{flex:2 ,  fontSize:20, color:'black'}} >AGE</Text>
                <Text style={{flex:1.7 ,  fontSize:20, color:'black'}}>Operation</Text>
            </View>
            {
                data.map((item)  => <View style={styles.api} key={item.id}>
                    <View style={styles.all}>
                         <Text style={{fontSize:20}}>{item.name}</Text>
                    </View>
                    <View style={styles.all}>
                         <Text style={{fontSize:20}}>{item.age}</Text>
                    </View>
                    <View style={styles.all}>
                         <Button onPress={()=>deleteapi(item.id)} title='delete'/>
                    </View>
                    <View style={styles.all}>
                <Button title='Update' onPress={() => ShowModal(item)}  />
                    </View>
                </View>)
            }
            <View style={styles.main}>
            {
                show ? <Modal
                    transparent={true}
                    animationType='slide'
                >
                    <View style={styles.modal}>
                        <View style={styles.modaltext}>
                            <TextInput style={styles.input} value={name} onChangeText={(text)=>setname(text)}/>
                            <TextInput style={styles.input}  value={age} onChangeText={(text)=>setage(text)}/>
                            <TextInput style={styles.input} value={email} onChangeText={(text)=>setemail(text)} />
                           <View style={styles.input}>
                            <Button  title='Update' onPress={Updateapi}  />
                           </View>
                            <Button title='Close' onPress={() => setshow(false)} />
                        </View>
                    </View>
                </Modal> : null
            }
            </View>
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    api:{
        flexDirection:'row',
        justifyContent:"space-around",
        margin:5,
        backgroundColor:"gold"
    },
    all:{
        flex:1,
        margin:10,
        backgroundColor:"gold"
    },
    main: {
        flex:1
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modaltext: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 40,
        shadowColor: 'black',
        backgroundColor: "skyblue",
        elevation: 20,
        borderRadius: 20,
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    input:{
        borderColor:'black',
        borderWidth:1,
        width:300,
        marginBottom:15,
        fontSize:20
    }
});

