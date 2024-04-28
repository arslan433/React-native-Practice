import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Define a type for the post
type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export default function Api() {
  // Use the Post type in the state
  let [data, setData] = useState<Post[]>([]);

  async function api() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let result = await response.json() as Post[];
      setData(result);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      // You can update your state here to notify the user of the error
    }
  }
  useEffect(() => {
    api();
  }, []);
  return (
    <View style={styles.container}>
      <Text>HII</Text> 
      {data.length > 0 &&
        data.map((item) => (
          <View key={item.id}>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
