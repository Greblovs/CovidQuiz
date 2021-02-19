import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native'



export default function FinalPage(props) {

    let calcRotation = (percent, margin) =>{
        let rotation = margin + (percent*3.6)    // 100 -> 360
        return  {transform:[{rotateZ: `${rotation}deg`}]}
    }

    let reRenderLayer = (percent) =>{
        if (percent>50){
            return <View style={[styles.secondPart, calcRotation((percent - 50), 45)]}/>
        }else{
            return <View style={styles.offsetLayer}/>
        }
    }


        let firstProgress
        if (props.percent>50){
            firstProgress = calcRotation(50, -135)
        }else{
            firstProgress = calcRotation(props.percent, -135)
        }



    return(
        <View style={{width: '100%', flex: 1 }}>
            <View style={styles.chart}>
                <View style={styles.container}>
                    <View style={[styles.firstPart, firstProgress]}/>
                        <View style={styles.percentWritten}>
                            <Text style={styles.precentText}>{props.percent}%</Text>
                        </View>
                    {reRenderLayer(props.percent)}
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
    chart:{
      flex: 4/5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    controls:{
        flexDirection:'row',
        flexWrap:'wrap',
        flex: 1/5,

        justifyContent: 'space-evenly'
    },
    percentWritten:{
        position: 'absolute'
    },
    precentText:{
        fontWeight: 'bold',
        fontSize: 24
    },
    container: {
        width: 200,
        height: 200,
        borderWidth: 20,
        borderRadius: 100,
        borderColor: '#53adcb',
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstPart: {
        width: 200,
        height: 200,
        borderWidth: 20,
        borderRadius: 100,
        position: 'absolute',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#ff726f',
        borderTopColor: '#ff726f',
        transform:[{rotateZ: '-135deg'}]
    },
    secondPart:{
        width: 200,
        height: 200,
        position: 'absolute',
        borderWidth: 20,
        borderRadius: 100,
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#ff726f',
        borderTopColor: '#ff726f',
        transform: [{rotateZ: '45deg'}]
    },
    offsetLayer: {
        width: 200,
        height: 200,
        position: 'absolute',
        borderWidth: 20,
        borderRadius: 100,
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#53adcb',
        borderTopColor: '#53adcb',
        transform:[{rotateZ: '-135deg'}]
    }
})