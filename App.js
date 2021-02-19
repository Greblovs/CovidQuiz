import PageSlider from "./src/pageSlider";
import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import NavBar from "./src/navbar";
import {Alert} from "react-native";
import Welcome from "./src/welcome";
import PageMC from "./src/pageMC"
import Final from "./src/finalPage"

//import Welcome from "./src/welcome";





export default function App() {
  const [page, setPage] = useState(0)
  const [answers, changeAnswer] = useState({
    answers: []
  })
  const assignAnswer = ()=>{

    changeAnswer(
        prev =>{
          answers: answers.answers.push(element)
        }
    )
  }
  const addPage = () =>{
    setPage(prev=>(1))

  }
  const goBack = () =>{
    setPage(prev=>(prev-1))
  }
  const goForward = () =>{
    setPage(prev=>(prev+1))
  }



  let mainElement;
  if (page == 0){
    mainElement = (
      <Welcome  start = {addPage}/>
    )
  }else if(page ==1){
    mainElement = (
        <PageSlider back = {goBack} forward = {goForward}/>
    )} else if(page ==2){
      mainElement = (
          <PageMC back = {goBack} forward = {goForward} getResult = {assignAnswer}/>
      )
    }else{
      mainElement= (
          <Final percent={25} back = {goBack} forward = {goForward} />
      )
    }



  return (

    <View style={styles.container}>
      <NavBar/>
      <View style={styles.mainContent}>
        {mainElement}
      </View>
    </View>
  )
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
