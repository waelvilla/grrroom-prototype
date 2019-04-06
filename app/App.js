import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './Home/Home' 
import AddCat from './AddCat/AddCat'
import DrawerNavigator from './navigation/DrawerNavigator'
import {createStackNavigator, createAppContainer} from 'react-navigation'
 


export default class App extends Component {
  render() {
    return (
      <View >
        <DrawerNavigator />
      </View>
    );
  }
}

