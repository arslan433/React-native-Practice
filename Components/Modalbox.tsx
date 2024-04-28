import React, { useState } from 'react';
import { View, Button, StyleSheet, Modal, Text } from 'react-native';
export default function Modalbox() {
    let [show, setshow] = useState(false)
    return (
        <View style={styles.main}>
            {
                show ? <Modal
                    transparent={true}
                    animationType='slide'
                >
                    <View style={styles.modal}>
                        <View style={styles.modaltext}>
                            <Text style={styles.text}>Hii This is pop up message box</Text>
                            <Button title='Close' onPress={() => setshow(false)} />
                        </View>
                    </View>
                </Modal> : null
            }
            <View style={styles.container}>
                <Button title='Show' onPress={() => setshow(true)} />
            </View>
            </View>
    );
}
const styles = StyleSheet.create({
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
        backgroundColor: "gold",
        elevation: 20,
        borderRadius: 20,
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginBottom: 300
    }
});
