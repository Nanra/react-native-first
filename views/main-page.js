import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, Button, View, Alert, Image, TouchableOpacity } from 'react-native';

export default class MainPage extends Component {

    constructor() {
        super();
        this.state = {
        }
        // this.userNameChangeText = this.userNameChangeText.bind(this)
        // this.passwordChangeText = this.passwordChangeText.bind(this)

        this._onPressButton = this._onPressButton.bind(this)

    }

    // Username Text Input Handlers
    userNameChangeText(userNameText) {
        console.log(`Your User Name : ${userNameText}`);
    }

    // Password Text Input Handlers
    passwordChangeText(passwordText) {
        console.log(`Your Password : ${passwordText}`);
    }


    // Method For Login
    _onPressButton() {
        console.log(`Username : ${this.state.userName}`);
        console.log(`Password : ${this.state.password}`);

        if (this.state.userName == 'Nanra' && this.state.password == 'password') {
            Alert.alert('Login Success', `Selamat Datang ${this.state.userName}`)
        } else {
            Alert.alert('Login Failed', `Incorrect Username or Password`)

        }

    }

    render() {
        return (
            <View style={styles.container}>

                <Image
                    style={styles.imageContainer}
                    source={require('../assets/login-sun.png')} />

                <View style={styles.loginInfo}>
                    <Text style={{ marginBottom: 20, fontSize: 35, color: "#4A4A4A", alignItems: "center" }}>SUNFOLLOWER</Text>

                    <TextInput
                        defaultValue={this.state.userName}
                        onChangeText={text => this.setState({ userName: text })}
                        style={{ marginBottom: 10, paddingLeft: 10, width: 250, backgroundColor: "#CCCCCC", borderRadius: 10 }} placeholder="Username"></TextInput>

                    <TextInput
                        defaultValue={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                        secureTextEntry={true} style={{ marginBottom: 10, paddingLeft: 10, width: 250, backgroundColor: "#CCCCCC", borderRadius: 10 }} placeholder="Password"></TextInput>
                </View>

                <TouchableOpacity style={styles.touchButtonStyle} onPress={this._onPressButton}>
                    <Text style={{color: "white", textAlign: 'center', fontSize: 17}} >Login</Text>
                </TouchableOpacity>

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

    imageContainer: {
        margin: 5,
        alignSelf: "center",
        width: 120,
        height: 120
    },


    touchButtonStyle: {
        marginTop:5,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:120,
        marginRight:120,
        backgroundColor:'orange',
        borderRadius:15,
        borderWidth: 3,
        borderColor: '#fff'
      }

});