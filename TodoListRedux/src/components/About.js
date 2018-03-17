import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux'

import AboutImage from '../images/star.png'

class About extends Component {

  static navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Image 
        style={[styles.icon, { tintColor }]} 
        source={AboutImage} 
      />
    ),
    tabBarLabel: 'About'
  }
  render() {
    const completedCount = this.props.items.filter(item => {
      return item.completed
    }).length

    const uncompletedCount = this.props.items.filter(item => {
      return !item.completed
    }).length

    return (
      <View style={{flex: 1}}>

        <Text style={styles.header}>
          About
        </Text>

        <Text style={styles.text}>
          You have:
        </Text>

        <Text style={styles.text}>
          {completedCount} completed item{completedCount == 1 ? '' : 's'}
        </Text>
        
        <Text style={styles.text}>
          {uncompletedCount} uncompleted item{uncompletedCount == 1 ? '' : 's'}
        </Text>

      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    items: state.todos.items
  }
}

export default connect(mapStateToProps)(About)

const styles = StyleSheet.create({
  icon: {
    height: 24,
    resizeMode: 'contain'
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    padding: 20
  },
  text: {
    fontSize: 16,
    padding: 10,
    marginRight: 20,
    marginLeft: 20,
  }
})
