import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class AddCat extends React.Component {
    render(){
        return(
            <View>
                <Text> Adding a Cat </Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('AddCat', () => AddCat);