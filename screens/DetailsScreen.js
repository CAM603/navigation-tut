import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default DetailsScreen;