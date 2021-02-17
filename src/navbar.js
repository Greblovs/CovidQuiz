import React from 'react'
import {StyleSheet, Text, View} from "react-native";

export default function NavBar() {
    return(
        <View style={styles.nav}>
            <Text style = {styles.text}>Title</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {

        backgroundColor: 'black',
        height: 70,
        alignSelf: 'stretch',
        color: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: "white",
        fontSize: 20
    }
})