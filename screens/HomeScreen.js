import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

const HomeScreen = ({navigation, route}) => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    if (route.params?.post) {
      setPosts([route.params?.post, ...posts])
    }
  }, [route.params?.post])
  console.log(posts)
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => 
          navigation.navigate('Details', {
            param1: 1,
            param2: 'A param'
          })
        }
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <FlatList
        data={posts}
        renderItem={({item}) => <Text>{item.text}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default HomeScreen;