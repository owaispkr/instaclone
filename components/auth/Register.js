import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.SignUp = this.SignUp.bind(this);
  }

  SignUp() {
    const { name, email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
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
          placeholder="Name"
          onChangeText={(name) => {
            this.setState({ name });
          }}
        />

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

        <Button title="Register" onPress={() => this.SignUp()} />
      </View>
    );
  }
}

export default Register;
