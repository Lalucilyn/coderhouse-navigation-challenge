import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'


const thirdTab = (props) => {
  return (
  <View style={styles.container}>
      <Text style={styles.title}>And you are finally welcome to the third tab</Text>
      <View>
        <View style={styles.buttonWrapper}>
          <Button title="Go to first tab" color="#ffea00" onPress={() => {props.navigation.navigate('One')}}/>
        </View>
        <View style={styles.buttonWrapper} >
          <Button title="Go to second tab" color="#d500f9" onPress={() => {props.navigation.navigate('Two')}}/>
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

export default thirdTab