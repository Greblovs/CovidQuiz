
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


export default function PageSlider(props) {
    const [answer, setAnswer] = useState( props.getAnswer(props.num));

    const trigger = (num) =>{
        setAnswer (prev =>(num))
    }
    return(
        <View style={{width: '100%', flex: 1}}>
            <View style={styles.textContainer}>
                <Text>Текст Вопроса</Text>
            </View>
            <View style={styles.choiceContainer}>
                <TouchableOpacity onPress={()=>{trigger(1)}} style={styles.touchableHolder} activeOpacity={0.95}>
                    <View  style={answer === 1? styles.choiceSelected: styles.choice}>
                        <Text style={answer === 1? styles.choiceTextSelected : styles.choiceText}> option 1</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{trigger(2)}} style={styles.touchableHolder} activeOpacity={0.95}>
                    <View style={answer === 2? styles.choiceSelected: styles.choice}>
                        <Text style={answer === 2? styles.choiceTextSelected : styles.choiceText}> option 2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{trigger(3)}} style={styles.touchableHolder} activeOpacity={0.95}>
                    <View style={answer === 3? styles.choiceSelected: styles.choice}>
                        <Text style={answer === 3? styles.choiceTextSelected : styles.choiceText}> option 3</Text>
                    </View>
                </TouchableOpacity>
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
                    onPress = {()=>{props.forward(answer, props.num)} }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer:{

        flex: 2/5,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    choiceContainer: {
        width: '100%',
        flex: 2/5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchableHolder:{
      width: '100%',
        alignItems: 'center'
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