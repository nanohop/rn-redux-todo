import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'

import { addTodo, validationError } from '../actions/todos'

import { Form, Item, Input, Button, Text as NBText } from 'native-base'

class AddTodo extends Component {

  state = {
    task: ''
  }

  onAdd = () => {
    if(!this.state.task || this.state.task === '') {
      this.props.validationError('Task cannot be blank')
    } else {
      this.props.addTodo(this.state.task)
      this.props.navigation.goBack()      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        {
          this.props.validation_error && 
          <View style={styles.error}>
            <Text style={styles.errorText}>{this.props.validation_error}</Text>
            <TouchableOpacity 
              style={styles.errorButton}
              onPress={() => {
                this.props.validationError(null)
              }}
            >
              <Text style={styles.errorText}>Close</Text>
            </TouchableOpacity>
          </View>
        }

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

const mapStateToProps = (state) => {
  return {
    validation_error: state.todos.validation_error
  }
}

export default connect(mapStateToProps, { 
  addTodo,
  validationError
})(AddTodo)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: 20
  },
  error: {
    padding: 10,
    backgroundColor: '#ff0000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  errorText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  errorButton: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#fff'
  }
})

