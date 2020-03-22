import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const DetailsScreen = ({navigation, route}) => {
  const {param1, param2} = route.params;
  let one = JSON.stringify(param1)
  let two = JSON.stringify(param2)
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{one}</Text>
      <Text>I passed...{two}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to Details... again"
        onPress={() => 
          navigation.push('Details', {
            param1: Math.floor(Math.random() * 100)
          })
        }
      />
      <Button title="Go back one screen" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default DetailsScreen;