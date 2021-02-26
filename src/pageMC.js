
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


export default function PageSlider(props) {
    let [answer, setAnswer] = useState(0);
    useEffect(()=>{
        setAnswer(prev=>(
        props.getAnswer(props.num)
    ))}
    ,[props.pageN])


    console.log(answer)
      let answers = props.answers.map((element, index)=>{

            let selected = answer
            return(
                <TouchableOpacity onPress={()=>{trigger(index+1)}} style={styles.touchableHolder} activeOpacity={0.95}>
                    <View  style={selected === (index+1)? styles.choiceSelected: styles.choice}>
                        <Text style={selected === (index+1)? styles.choiceTextSelected : styles.choiceText}>{element}</Text>
                    </View>
                </TouchableOpacity>
            )
        })



    const trigger = (num) =>{
        setAnswer (prev =>(
            num
        ))
    }


    return(
        <View style={{width: '100%', flex: 1}}>
            <View style={styles.textContainer}>
                <Text style={styles.questionTextStyle}>{props.questionText}</Text>
            </View>
            <View style={styles.choiceContainer}>
                {answers}
                {/*<TouchableOpacity onPress={()=>{trigger(1)}} style={styles.touchableHolder} activeOpacity={0.95}>*/}
                {/*    <View  style={answer === 1? styles.choiceSelected: styles.choice}>*/}
                {/*        <Text style={answer === 1? styles.choiceTextSelected : styles.choiceText}> option 1</Text>*/}
                {/*    </View>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity onPress={()=>{trigger(2)}} style={styles.touchableHolder} activeOpacity={0.95}>*/}
                {/*    <View style={answer === 2? styles.choiceSelected: styles.choice}>*/}
                {/*        <Text style={answer === 2? styles.choiceTextSelected : styles.choiceText}> option 2</Text>*/}
                {/*    </View>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity onPress={()=>{trigger(3)}} style={styles.touchableHolder} activeOpacity={0.95}>*/}
                {/*    <View style={answer === 3? styles.choiceSelected: styles.choice}>*/}
                {/*        <Text style={answer === 3? styles.choiceTextSelected : styles.choiceText}> option 3</Text>*/}
                {/*    </View>*/}
                {/*</TouchableOpacity>*/}
            </View>
            <View style={styles.controls}>
                <Button
                    color = "black"
                    title = "Назад"
                    onPress={props.back}
                />
                <Button
                    color = "black"
                    title = "Дальше"
                    onPress = {()=> {
                        let saved = answer
                        props.forward(saved, props.num)
                        setAnswer(prevState => (0))
                    }
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer:{
        width: '100%',
        flex: 2/5,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    choiceContainer: {
        width: '100%',
        flex: 3/5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableHolder:{
      width: '100%',
        alignItems: 'center'
    },
    questionTextStyle:{
      textAlign: 'center',
      fontSize: 18
    },
    choice:{
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        width: '80%',
        marginTop: 20,
        height: 40
    },
    choiceSelected:{
        backgroundColor: 'black',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        width: '80%',
        marginTop: 20,
        height: 40
    },
    choiceText:{
        width: '100%',
        textAlign:'center',
        color: 'black'
    },
    choiceTextSelected:{
        width: '100%',
        textAlign:'center',
        color: 'white'
    },
    controls:{
        flexDirection:'row',
        flexWrap:'wrap',
        flex: 1/5,
        justifyContent: 'space-evenly'
    }
})