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
  const [answers, changeAnswer] = useState([])




  const addPage = () =>{
    setPage(prev=>(1))

  }
  const goBack = () =>{
    setPage(prev=>(prev-1))
  }

  const goForward = (answer, num) =>{
    setPage(prev=>(prev+1))
    submitToArray(answer, num);
  }

  const getAnswerResubmit = (num) =>{
    if (answers.length < (num)){
      return 0
    }else{
      return answers[num -1]
    }
  }
  console.log(answers)
  console.log(answers.length)
  const submitToArray = (answer, number)=>{
    let copy = [...answers]
    if (answers.length < (number-2)){
      copy.push(answer)
      changeAnswer(prev=> (
        copy
      )
    )
    }else{
      copy[number-1] = answer
      changeAnswer(prev=> (
        copy
      ))
    }
  }

const backToStart = () =>{
    setPage(prev=>(0))
    changeAnswer([])
}

  let mainElement;
  if (page == 0){
    mainElement = (
      <Welcome  start = {addPage}/>
    )
  }else if(page ==1){
    mainElement = (
        <PageSlider getAnswer = {getAnswerResubmit} num ={1} submit = {submitToArray} back = {goBack} forward = {goForward}/>
    )} else if(page ==2){
      mainElement = (
          <PageMC getAnswer = {getAnswerResubmit} num ={2} back = {goBack} forward = {goForward} getResult = {goForward}/>
      )
    }else{
      mainElement= (
          <Final percent={25} goStart={backToStart} />
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
