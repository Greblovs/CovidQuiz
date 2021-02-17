import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import NavBar from "./navbar";




export default function Welcome() {
    return(
        <View>
            <View style={styles.textWrapper}>
                <Text style={styles.mainText}>
                    Добро пожаловать в симптом тест
                </Text>
            </View>
            <View style = {styles.buttonWrapper}>
                <Button
                    title = "press"
                    onPress = {()=>Alert.alert("clicked")}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textWrapper:{
        flex: 1/2,
        alignItems: 'center',
        
        justifyContent: 'center',


    },
    mainText:{
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',

        color: 'black',
    },
    buttonWrapper:{
        marginTop: '15%',
        flex: 1/2,

        alignItems: 'center'
    },
    button:{
        marginTop: 100
    }
})