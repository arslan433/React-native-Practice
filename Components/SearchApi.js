import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

export default SearchApi = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const handleSearch = async () => {
        try {
            const response = await fetch(`http://10.0.2.2:3000/users?q=${searchQuery}`);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('API search error:', error);
        }
    };
    return (
        <View>
            <TextInput
                placeholder="Search here..."
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
            <Button
                title="Search"
                onPress={handleSearch}
            />
            <FlatList
                data={data}
                keyExtractor={(item, index) => `key-${index}`}
                renderItem={({ item }) => (
                    <>
                        <Text>{item.name}</Text>
                        <Text>{item.age}</Text>
                        <Text>{item.id}</Text>
                    </>
                )}
            />
        </View>
    );
};

