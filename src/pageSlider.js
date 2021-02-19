
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';



import Slider from '@react-native-community/slider';

export default function PageSlider(props) {
    const [value, setValue] = useState(0);


    return(
        <View style={{width: '100%', flex: 1}}>
            <View style={styles.textContainer}>
                <Text>Текст Вопроса</Text>
            </View>
            <View style={styles.sliderContainer}>
                <Slider style={styles.slider}
                    maximumValue={100}
                    minimumValue={0}
                    step={1}

                    thumbTintColor = 'black'
                    minimumTrackTintColor="black"
                    maximumTrackTintColor="grey" value={value}
                        onValueChange={
                            (sliderValue) =>  setValue(prev=>(sliderValue))
                        }
                />
                <Text style={styles.percentDisplay}>{value + "%"}</Text>
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
                    onPress = {props.forward }
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