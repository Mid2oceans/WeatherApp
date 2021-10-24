import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'

export default function UnitButton({unitsSystem,setUnitsSystem}) {
    var nextSystem = (unitsSystem == "Imperial" ) ? 'Metric' : 'Imperial'
    var buttonText = (unitsSystem == "Imperial" ) ? 'F°': 'C°' 
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress = {() => setUnitsSystem(nextSystem)}  > 
            <Text style = {styles.buttonText}>{buttonText}</Text> 
                 </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent:'center',
        width:60,
        height:60,
        borderRadius:80,
        backgroundColor:'#4E6969',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#000000'
    },
    buttonText:{
        
        fontSize:20,
        flexWrap:'wrap',
        paddingLeft:5,
        color:'#F1F1F1'
        // paddingVertical:10,
        // paddingHorizontal:8,
    },
  });
