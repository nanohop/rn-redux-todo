import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'

import { addTodo } from '../actions/todos'

import { Form, Item, Input, Button, Text as NBText } from 'native-base'

class AddTodo extends Component {

  state = {
    task: ''
  }

  onAdd = () => {
    this.props.addTodo({
      id: new Date().getTime(),
      task: this.state.task,
      completed: false
    })

    const nav = this.props.navigation
    nav.goBack()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <Form>
          <Item>
            <Input 
              placeholder="Task" 
              onChange={e => this.setState({ task: e.nativeEvent.text }) }
              value={this.state.task}
            />
          </Item>
        </Form>

        <Button style={styles.button} onPress={this.onAdd}>
          <NBText>Save</NBText>
        </Button>

      </View>
    )
  }

}

export default connect(undefined, { addTodo })(AddTodo)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: 20
  }
})

