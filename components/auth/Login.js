import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.LoginUser = this.LoginUser.bind(this);
  }

  LoginUser() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Email"
          onChangeText={(email) => {
            this.setState({ email });
          }}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => {
            this.setState({ password });
          }}
        />

        <Button title="Login" onPress={() => this.LoginUser()} />
      </View>
    );
  }
}

export default Login;
