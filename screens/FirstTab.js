import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'


const firstTab = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You are very welcome to the very first tab</Text>
      <View>
        <View style={styles.buttonWrapper}>
          <Button title="Go to second tab" color="#ff1744" onPress={() => {props.navigation.navigate('Two')}}/>
        </View>
        <View style={styles.buttonWrapper} >
          <Button title="Go to third tab" color="#00e676" onPress={() => {props.navigation.navigate('Three')}}/>
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

export default firstTab