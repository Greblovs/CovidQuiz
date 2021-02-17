import Page from "./src/page";
import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import NavBar from "./src/navbar";
import {Alert} from "react-native";
import Welcome from "./src/welcome";
import Slider from '@react-native-community/slider';

//import Welcome from "./src/welcome";





export default function App() {
  const [page, setPage] = useState(0)

  const addPage = () =>{
    setPage(prev=>(1))
    Alert.alert(page.toString())
  }

  let mainElement;
  if (page == 0){
    mainElement = (
      <Welcome  start = {addPage}/>
    )
  }else{
    mainElement = (
        <Page/>
    )
  }


  return (

    <View style={styles.container}>
      <NavBar/>
      <View style={styles.mainContent}>
        {mainElement}
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
