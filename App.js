import PageSlider from "./src/pageSlider";
import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import NavBar from "./src/navbar";
import {Alert} from "react-native";
import Welcome from "./src/welcome";
import PageMC from "./src/pageMC"
import Final from "./src/finalPage"
import {questions} from './src/questions'
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
      console.log("fetch: " + answers[num-1])
      return answers[num-1]
    }
  }
  // console.log(answers)
  // console.log(answers.length)
  const submitToArray = (answer, number)=>{
    let copy = answers
    if (answers.length < (number-2)){
      console.log(answer)
      copy.push(answer)
      console.log(copy)
      changeAnswer(prev=> (
        copy
      )
    )
    }else{
      copy[number-1] = answer
      console.log(copy)
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
        <PageSlider pageN = {page} questionText = {questions.question1.question} min ={questions.question1.min} max={questions.question1.max} getAnswer = {getAnswerResubmit} num ={1} submit = {submitToArray} back = {goBack} forward = {goForward}/>
    )} else if(page ==2){
      mainElement = (
          <PageMC pageN = {page} questionText = {questions.question2.question} answers = {questions.question2.answers} getAnswer = {getAnswerResubmit} num ={2} back = {goBack} forward = {goForward} getResult = {goForward}/>
      )
    }else if(page ==3){
    mainElement = (
        <PageMC pageN = {page} questionText = {questions.question3.question} answers = {questions.question3.answers} getAnswer = {getAnswerResubmit} num ={3} back = {goBack} forward = {goForward} getResult = {goForward}/>
    )
  }else if(page ==4){
  mainElement = (
      <PageSlider pageN = {page} questionText = {questions.question4.question} min ={questions.question4.min} max={questions.question4.max} getAnswer = {getAnswerResubmit} num ={4} submit = {submitToArray} back = {goBack} forward = {goForward}/>
  )}else if(page ==5){
    mainElement = (
        <PageMC pageN = {page} questionText = {questions.question5.question} answers = {questions.question5.answers} getAnswer = {getAnswerResubmit} num ={5} back = {goBack} forward = {goForward} getResult = {goForward}/>
    )
  }else if(page ==6){
    mainElement = (
        <PageSlider pageN = {page} questionText = {questions.question6.question} min ={questions.question6.min} max={questions.question6.max} getAnswer = {getAnswerResubmit} num ={6} submit = {submitToArray} back = {goBack} forward = {goForward}/>
    )

  }else if(page ==7){
    mainElement = (
       // q7
        <PageMC pageN = {page} questionText = {questions.question7.question} answers = {questions.question7.answers} getAnswer = {getAnswerResubmit} num ={7} back = {goBack} forward = {goForward} getResult = {goForward}/>
    )
  }else if(page ==8){
    mainElement = (
        //q8
        <PageMC pageN = {page} questionText = {questions.question8.question} answers = {questions.question8.answers} getAnswer = {getAnswerResubmit} num ={8} back = {goBack} forward = {goForward} getResult = {goForward}/>
    )
  }else{
      mainElement= (
          <Final pageN = {page} percent={25} goStart={backToStart} />
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
