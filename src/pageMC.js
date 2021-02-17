
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { CheckBox } from 'react-native-elements'
import Slider from "@react-native-community/slider";

export default function PageSlider(props) {
    const [answers, changeAnswer] = useState({
        answer: null
    })

    return(
        <View style={{width: '100%', flex: 1}}>
            <View style={styles.textContainer}>
                <Text>Текст Вопроса</Text>
            </View>
            <View style={styles.choiceContainer}>
                <View style={styles.choice}>
                    <CheckBox  checkedIcon="" uncheckedIcon="" title={"first"} checked={false}>
                    </CheckBox>
                </View>
                <View style={styles.choice}>
                    <CheckBox  checkedIcon="" uncheckedIcon="" title={"second"} checked={false}>
                    </CheckBox>
                </View>
                <View style={styles.choice}>
                    <CheckBox checkedIcon="" uncheckedIcon="" title={"third"} checked={false}>
                    </CheckBox>
                </View>
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
        flex: 1/5,
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
    choice:{
        width: 200,
        marginTop: 20,
        height: 40
    },
    controls:{
        flexDirection:'row',
        flexWrap:'wrap',
        flex: 1/5,

        justifyContent: 'space-evenly'
    }
})