import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import firebase from 'firebase';



export default class Loading extends Component {
  checkIfLoggedin = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("Dashboard");
      }
      else{
        this.props.navigation.navigate("Login")
      }
    });
  };

  componentDidMount() {
    this.checkIfLoggedin();
  }

  render() {
    return (
      <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
}
