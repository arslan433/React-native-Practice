import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';

// Define a type for the post
type Post = {
  userId: number;
  id: number;
  name: string;
  body: string;
};

export default function ApiFlatlist() {
  let [data, setData] = useState<Post[] | undefined>(undefined);
  let [loading, setLoading] = useState<boolean>(true);
  let [error, setError] = useState<string | undefined>(undefined);

  const getApi = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      let response = await fetch(url);
      let result: Post[] = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  if (loading) {
    return (
      <View style={{flex : 1 , justifyContent:'center'}}>

    <ActivityIndicator size="large" />
      </View>
    )
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <Text>Api-Flatlist</Text>
      {data && (
        <FlatList 
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.id}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
