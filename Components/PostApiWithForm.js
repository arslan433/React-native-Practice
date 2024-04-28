import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function PostApiWithForm() {

    let [age, setid] = useState("")
    let [name, setname] = useState("")
    let [email, setemail] = useState("")
    let [nameError, setNameError] = useState(false)
    let [ageError, setageError] = useState(false)
    let [emailError, setemailError] = useState(false)
    const PostApi = async () => {

        !age ? setageError(true) : setageError(false)

        !name ? setNameError(true) : setNameError(false)

        !email ? setemailError(true) : setemailError(false)

        if (!age || !name || !email) {
            return false
        }

        try {
            const url = "http://10.0.2.2:3000/users";
            let result = await fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ age, name, email })
            })
            result = await result.json();


        } catch (error) {
            console.error('there are some errors ')
        }
    }

    return (
        <View>
            <Text>PostApiWithForm</Text>
            <TextInput style={styles.input} placeholder='ENter age' value={age} onChangeText={(text) => setid(text)} />
            {
                ageError ? <Text style={styles.Texterror}>Please Enter your age </Text> : null
            }
            <TextInput style={styles.input} placeholder='ENter name' value={name} onChangeText={(text) => setname(text)} />
            {
                nameError ? <Text style={styles.Texterror}>Please Enter your name </Text> : null
            }
            <TextInput style={[styles.input, { marginBottom: 20 }]} placeholder='ENter Email' value={email} onChangeText={(text) => setemail(text)} />
            {
                emailError ? <Text style={styles.Texterror}>Please Enter your Email </Text> : null
            }
            <Button title='Save Data' onPress={PostApi} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 4,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    Texterror: {
        marginTop: 2,
        marginLeft: 20,
        color: 'red'
    }
})