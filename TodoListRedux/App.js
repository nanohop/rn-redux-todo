
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { TabNavigator, StackNavigator } from 'react-navigation'

import ToDoList from './src/components/TodoList'
import About from './src/components/About'
import AddTodo from './src/components/AddTodo'

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
      console.log("== New Action ==")
      console.log("Store before: ", store.getState())
      console.log("Dispatching action: ", action)
      const result = next(action)
      console.log("Store after: ", store.getState())
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

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TabNav />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
