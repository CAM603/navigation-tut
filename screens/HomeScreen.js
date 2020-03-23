import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

const HomeScreen = ({navigation, route}) => {
  const [posts, setPosts] = useState([])
  const [surveys, setSurveys] = useState([])
  useEffect(() => {
    if (route.params?.post) {
      setPosts([route.params?.post, ...posts])
    }
  }, [route.params?.post])

  useEffect(() => {
    if (route.params?.survey) {
      setSurveys([route.params?.survey, ...surveys])
    }
  }, [route.params?.survey])
  console.log(surveys)
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
      <Button
        title="Take a survey"
        onPress={() => navigation.navigate('Survey')}
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