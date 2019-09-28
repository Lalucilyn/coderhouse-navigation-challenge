import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


const secondTab = (props) => {
  return (
  <View style={styles.container}>
      <Text style={styles.title}>You are also welcome to the second tab</Text>
      <View>
        <View style={styles.buttonWrapper}>
          <Button title="Go to first tab" color="#ff9100" onPress={() => {props.navigation.navigate('One')}}/>
        </View>
        <View style={styles.buttonWrapper} >
          <Button title="Go to third tab" color="#00b0ff" onPress={() => {props.navigation.navigate('Three')}}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: 30,
    marginBottom: 20
  },
  buttonWrapper: {
    padding: 10
  },
});

export default secondTab