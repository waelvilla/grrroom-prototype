
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



export default class Home extends Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../img/logo100.png')} />
                </View>
                <Text style={styles.welcome}> Welcome to Grrroom! </Text>
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>Add a Cat!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#97D8E1',
        height: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoContainer: {
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    logo: {
        height: 150,
        width: 150
    },
    welcome: {
        fontSize: 26,
        fontFamily: 'Roboto',
        textAlign: 'center',
    },
    btnContainer: {
        backgroundColor: '#12B886',
        paddingVertical: 15,
        width: 100,
    },
    btnText: {
        textAlign: 'center',
        color: '#FFFFFF',
    },


});

AppRegistry.registerComponent('Home', () => Home);