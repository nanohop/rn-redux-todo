
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { TabNavigator, StackNavigator } from 'react-navigation'

import ToDoList from './src/components/TodoList'
import About from './src/components/About'
import AddTodo from './src/components/AddTodo'
import Login from './src/components/Login'

import rootReducer from './src/reducers'

const TodoNav = StackNavigator({
  TodoList: { screen: ToDoList },
  AddTodo: { screen: AddTodo }
}, {
  mode: 'modal'
})

const TabNav = TabNavigator({
  TodoNav: { screen: TodoNav },
  About: { screen: About },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#0066cc'
  },
  ...TabNavigator.Presets.iOSBottomTabs
})

const reduxLogger = store => {
  return next => {
    return action => {
      const result = next(action)
      return result
    }
  }
}

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    reduxLogger
  )
)

class LoginGate extends Component {
  render() {
    if(this.props.username) {
      return <TabNav />
    } else {
      return <Login />
    }
  }
}

const ConnectedLoginGate = connect(state => ({
  username: state.auth.username
}))(LoginGate)


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedLoginGate />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
