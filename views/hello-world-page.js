import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, Button, View } from 'react-native';

export default class HelloWorldApp extends Component {

    // Method For Login
    _onPressButton() {
        alert('Login Berhasil')
        console.log("Button Clicked");
        
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.loginInfo}>
                    <Text style={{ marginBottom: 10, fontSize: 35, color: "#4A4A4A", alignItems: "center"}}>Login</Text>
                    <TextInput style={{ marginBottom: 10, paddingLeft: 10, width: 250, backgroundColor: "#CCCCCC", borderRadius: 10 }} placeholder="Username"></TextInput>
                    <TextInput style={{ marginBottom: 10, paddingLeft: 10, width: 250, backgroundColor: "#CCCCCC", borderRadius: 10 }} placeholder="Password"></TextInput>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                    width="30"
                        onPress={this._onPressButton}
                        title="Login"
                        color="orange"
                    />
                </View>

                


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,        
        justifyContent: 'center',
    },

    loginInfo: {
        margin: 5,
        alignItems: "center",
    },

    buttonContainer: {
        margin: 10,
        alignItems: "center",
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});