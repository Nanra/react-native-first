import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, Button, View, Alert} from 'react-native';

export default class HelloWorldApp extends Component {

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

                <View style={styles.loginInfo}>
                    <Text style={{ marginBottom: 10, fontSize: 35, color: "#4A4A4A", alignItems: "center"}}>Login</Text>
                    
                    <TextInput
                    defaultValue={this.state.userName}
                    onChangeText={text => this.setState({userName: text})}
                    style={{ marginBottom: 10, paddingLeft: 10, width: 250, backgroundColor: "#CCCCCC", borderRadius: 10 }} placeholder="Username"></TextInput>
                    
                    <TextInput
                    defaultValue={this.state.password}
                    onChangeText={text => this.setState({password: text})}
                    secureTextEntry={true} style={{ marginBottom: 10, paddingLeft: 10, width: 250, backgroundColor: "#CCCCCC", borderRadius: 10 }} placeholder="Password"></TextInput>
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