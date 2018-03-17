import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
  Image,
  Platform
} from 'react-native';

import { connect } from 'react-redux'

import { Button, Text as NBText, Segment } from 'native-base'

import TodoItem from './TodoItem'
import CheckImage from '../images/check.png'
import { items } from '../lib/api'

import { addTodo, loadTodos } from '../actions/todos'
import { 
  todoItems, 
  completedItems, 
  uncompletedItems 
} from '../selectors/todos'


class ToDoList extends Component {

  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image 
        style={[styles.icon, { tintColor }]} 
        source={CheckImage} 
      />
    ),
    tabBarLabel: 'List'
  }
 
  state = {
    items: null,
    filter: 'All'
  }

  componentDidMount() {
    this.props.loadTodos()
  }

  addItem = () => {
    this.props.navigation.navigate('AddTodo')
  }

  updateTodo = (id, completed) => {
    items('PUT', { id, completed })
    .then(json => {
      this.setState({ items: json })
    })
  }

  deleteTodo = (id) => {
    items('DELETE', { id })
    .then(json => {
      this.setState({ items: json })
    })
  }

  filteredItems = () => {
    if(this.state.filter === 'Todo') {
      return this.props.uncompletedItems
    }
    if(this.state.filter === 'Complete') {
      return this.props.completedItems
    }
    return this.props.items
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Todo List
          </Text>
        </View>

        <View style={styles.contentWrapper}>

          <View style={styles.contentHeader}>
            <Segment style={styles.segment}>
              <Button 
                first={Platform.OS === 'ios'}
                active={this.state.filter === 'All'}
                onPress={() => this.setState({ filter: 'All' })}
              >
                <NBText>All</NBText>
              </Button>
              <Button 
                active={this.state.filter === 'Todo'}
                onPress={() => this.setState({ filter: 'Todo' })}
              >
                <NBText>Todo</NBText>
              </Button>
              <Button 
                last={Platform.OS === 'ios'}
                active={this.state.filter === 'Complete'}
                onPress={() => this.setState({ filter: 'Complete' })}
              >
                <NBText>Complete</NBText>
              </Button>
            </Segment>
          </View>

          {
            this.props.loading && <ActivityIndicator 
              size="large"
              color="#2288ee"
              style={{ marginTop: 20 }}
            />
          }

          <FlatList 
            data={this.filteredItems()}
            style={styles.content}
            renderItem={row => {
              return <TodoItem 
                item={row.item} 
                updateTodo={this.updateTodo}
                deleteTodo={this.deleteTodo}
              />
            }}
            keyExtractor={item => item.id.toString()}
          />

          <View style={styles.contentFooter}>
            <Button onPress={this.props.loadTodos}>
              <NBText>Refresh</NBText>
            </Button>
            <Button onPress={this.addItem}>
              <NBText>Add Todo</NBText>
            </Button>
          </View>

        </View>

      </View>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    items: todoItems(state),
    completedItems: completedItems(state),
    uncompletedItems: uncompletedItems(state),
    loading: state.todos.loading
  }
}

export default connect(
  mapStateToProps, 
  { addTodo, loadTodos }
)(ToDoList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  segment: {
    flex: 1, 
    padding: 5
  },
  header: {
    padding: 10,
    paddingTop: 20,
    alignSelf: 'stretch',
    backgroundColor: '#2288ee',
    borderBottomWidth: 1,
    borderColor: '#0066cc'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff'
  },
  item: {
    padding: 10
  },
  content: {
    flex: 1,
    alignSelf: 'stretch'
  },
  contentWrapper: {
    flex: 1
  },
  contentHeader: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentFooter: {
    padding: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  icon: {
    height: 24,
    resizeMode: 'contain'
  }
});
