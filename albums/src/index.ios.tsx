// index.android.js - place code in here for ios

// Import a library to help create a component
import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export interface Props { }
export interface State { }

const styles: any = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 64,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1
    },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default class AppTest extends React.Component {
    render() {
        return (
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> Hello, HI  </Text>
        </View>
        )
    }
}
