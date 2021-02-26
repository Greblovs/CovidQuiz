
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';



import Slider from '@react-native-community/slider';

export default function PageSlider(props) {
    const [value, setValue] = useState(0)
    useEffect(()=>{
            setValue(prev=>(
                props.getAnswer(props.num)
            ))}
        ,[props.pageN])

    return(
        <View style={{width: '100%', flex: 1}}>
            <View style={styles.textContainer}>
                <Text style={styles.questionTextStyle}>{props.questionText}</Text>
            </View>
            <View style={styles.sliderContainer}>
                <Slider style={styles.slider}
                    maximumValue={props.max}
                    minimumValue={props.min}
                    step={props.step}
                    thumbTintColor = 'black'
                    minimumTrackTintColor="black"
                    maximumTrackTintColor="grey" value={value}
                        onValueChange={
                            (sliderValue) =>  setValue(prev=>(sliderValue))
                        }
                />
                <Text style={styles.percentDisplay}>{value }</Text>
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
                    onPress = {()=>{props.forward(value, props.num)} }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer:{
        flex: 3/5,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    questionTextStyle:{
        textAlign: 'center',
        fontSize: 18
    },
    sliderContainer: {
        width: '100%',

        flex: 1/5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider:{
      width: "100%"
    },
    controls:{
        flexDirection:'row',
        flexWrap:'wrap',
        flex: 1/5,
        justifyContent: 'space-evenly'
    },
    percentDisplay:{
        fontSize: 20,
        color: 'black'
    }
})