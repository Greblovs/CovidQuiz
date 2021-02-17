import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import NavBar from "./navbar";




export default function Welcome(props) {
    return(
        <View>
            <View style={styles.textWrapper}>
                <Text style={styles.mainText}>
                    Добро пожаловать в симптом тест
                </Text>
            </View>
            <View style = {styles.buttonWrapper}>
                <View style = {styles.buttonDimensions}>
                    <Button
                        color = "black"
                        title = "Начать"
                        onPress = {props.start}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textWrapper:{
        flex: 3/5,
        alignItems: 'center',

        justifyContent: 'center',


    },
    buttonDimensions:{
      width: '80%',
      height: 60
    },
    mainText:{
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',

        color: 'black',
    },
    buttonWrapper:{
        marginTop: '15%',
        flex: 2/5,

        alignItems: 'center'
    },
    button:{
        marginTop: 100
    }
})