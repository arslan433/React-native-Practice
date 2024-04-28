import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
export default function FancyCard() {
    let [name, setname] = useState("Hii")
    return (
        <View style={styles.fancycard}>
            <Text style={styles.heading}>FancyCard</Text>
            <View style={styles.img}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://th.bing.com/th?id=ORMS.fb2a3b9cf115a648b782e0e71fb7fc46&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0',
                    }}
                />
            </View>
            <View style={styles.cardtxt}>
                <Text style={styles.title}>Fancy Car</Text>
                <Text style={styles.des}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda exercitationem facilis ex! Possimus deleniti, velit nam, ad molestiae, blanditiis quidem laborum tenetur omnis voluptas commodi! Maiores nisi dolorem dolore.
                </Text>
                <Text style={styles.time}>12 mins ago</Text>
            </View>
            <Text>{name}</Text>
            <Button title='Press me' onPress={() => setname("Arslan")}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    fancycard: {
        backgroundColor: '#81e2e6',
        height: 420,
        width: '100%',
        marginBottom: 12,
        borderRadius: 4
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: 'black'
    },
    tinyLogo: {
        height: 200,
        width: '95%',
        borderRadius: 4,
        margin: 8
    },
    img: {
        alignItems: 'center',
        // justifyContent:'center'
    },
    cardtxt: {
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: 4,
        marginBottom: 6
    },
    des: {
        margin: 6
    },
    time: {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        position: 'relative',
        left: 320,
        paddingHorizontal: 6,
        // paddingBottom:6
        color: 'black'
    }
})