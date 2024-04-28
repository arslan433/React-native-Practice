import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Users() {
    let user = [
        {
            "name": "John",
            "age": 25,
            "city": "New York"
        },
        {
            "name": "Alice",
            "age": 30,
            "city": "Los Angeles"
        },
        {
            "name": "Bobbi",
            "age": 22,
            "city": "Chicago"
        },
        {
            "name": "Emma",
            "age": 28,
            "city": "San Francisco"
        },
        {
            "name": "David",
            "age": 35,
            "city": "Seattle"
        },
        {
            "name": "Sop",
            "age": 27,
            "city": "Miami"
        },
        {
            "name": "Michael",
            "age": 29,
            "city": "Boston"
        },
        {
            "name": "Olivia",
            "age": 24,
            "city": "Austin"
        },
        {
            "name": "John",
            "age": 25,
            "city": "New York"
        },
        {
            "name": "Alice",
            "age": 30,
            "city": "Los Angeles"
        },
        {
            "name": "Bobbi",
            "age": 22,
            "city": "Chicago"
        },
        {
            "name": "Emma",
            "age": 28,
            "city": "San Francisco"
        },
        {
            "name": "David",
            "age": 35,
            "city": "Seattle"
        },
        {
            "name": "Sop",
            "age": 27,
            "city": "Miami"
        },
        {
            "name": "Michael",
            "age": 29,
            "city": "Boston"
        },
        {
            "name": "Olivia",
            "age": 24,
            "city": "Austin"
        },

        {
            "name": "Emma",
            "age": 28,
            "city": "San Francisco"
        },
        {
            "name": "David",
            "age": 35,
            "city": "Seattle"
        },
        {
            "name": "Sop",
            "age": 27,
            "city": "Miami"
        },
        {
            "name": "Michael",
            "age": 29,
            "city": "Boston"
        },
        {
            "name": "Olivia",
            "age": 24,
            "city": "Austin"
        }
    ]
    return (
        <View >
            {/* <Text>List of Users</Text> */}
            <ScrollView >
            <View style={styles.headbox} >
                <Text style={styles.head}>Name</Text>
                <Text style={styles.head}>Age</Text>
                <FlatList
                    data={user}
                    renderItem={({ item }) => <Data1 item={item} />
                    }
                />
                {/* {
                        user.map((item) => <Text style={styles.array}>{item.name}</Text>)
                    } */}
            </View>
            </ScrollView>
        </View>
    )
}
function Data1(porps: { item: any }) {
    const item = porps.item
    return (
        <View style={styles.box}>
            <Text style={styles.array}>{item.name}</Text>
            <Text style={styles.array}>{item.age}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    array: {
        fontSize: 30,
        margin: 2,
        flex:1,
        color: 'black',
        // backgroundColor: 'blue',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 6,
    },
    box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'orange',
         marginBottom: 10
    },
    head:{
        color:'black',
        backgroundColor:'skyblue',
        // position:'relative',
        fontSize: 30,
        margin: 2,
        flex:1,
        // backgroundColor: 'blue',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 6,
    },
    headbox:{
        // display:'flex',
        // position: 'absolute',
        // top:100
        flexDirection: 'column',
        borderWidth: 2,
        borderColor: 'orange',
         marginBottom: 10
    }
})