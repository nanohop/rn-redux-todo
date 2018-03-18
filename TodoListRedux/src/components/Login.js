import React, { Component } from 'react'

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'


export default class Login extends Component {
  state = {
    username: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Todo List</Text>
        <View style={styles.inputRow}>
          <TextInput 
            style={styles.input} 
            onChangeText={(text) => {
              this.setState({username: text})
            }}
            value={this.state.username}
          />
        </View>
        <View style={styles.inputRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#0066cc'
  },
  header: {
    marginTop: 100,
    marginBottom: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  inputRow: {
    flexDirection: 'row'
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 5,
    flex: 1,
    color: '#fff'
  },
  button: {
    width: 150,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10
  },
  buttonText: {
    color: '#0066cc',
    fontSize: 20,
    textAlign: 'center'
  }
})

