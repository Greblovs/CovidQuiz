import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from "./src/navbar";
import Welcome from "./src/welcome";
//import Welcome from "./src/welcome";

export default function App() {
  return (

    <View style={styles.container}>
      <NavBar/>
      <View style={styles.mainContent}>

        <Welcome/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                                               // height
    backgroundColor: 'white',
    alignItems: 'center',                                  // horizontal
    //justifyContent: 'center',                              // vertical
  },
  mainContent:{
    flex: 1,
    width: '80%',


    alignItems: 'center',
    justifyContent: 'center'
  }

});
