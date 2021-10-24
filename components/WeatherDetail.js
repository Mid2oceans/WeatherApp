import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function WeatherDetail({detail, detailVar, unitsSystem}) {
    var unit = 'mph'
    console.log(unitsSystem);
    if(unitsSystem == 'Metric'){
        unit = 'kph'
    }

    if(detail == 'Wind Speed'){
        return (
            <View style={styles.detailSquare}>
                <Feather name='wind' size={45} color="#F1F1F1" />
                <Text style = {styles.detailText}> {detailVar} {unit}</Text>
            </View>
        )
    }
    else if(detail == 'Humidity'){
        return (
            <View style={styles.detailSquare}>
                <Ionicons name="water" size={45} color="#F1F1F1" />
                <Text style = {styles.detailText}> {Math.round(detailVar)}%</Text>
            </View>
        )
    }
    else if(detail == 'temperature-high' || detail == 'temperature-low'){
        return (
            <View style={styles.detailSquare}>
                <FontAwesome5 name={detail} size={45} color="#F1F1F1" />
                <Text style = {styles.detailText}> {Math.round(detailVar)}°</Text>
            </View>
        )
    
    }

}

const styles = StyleSheet.create({
    detailSquare: {
      alignItems:'center',
      flex:1,
      flexDirection:'row',
      marginTop: 25,
      marginHorizontal:25,
      justifyContent:'space-around',
      backgroundColor: '#0D9DE3',
      width: 150,
      height: 100,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: '#000000'
  
    },
    detailText: {
      width: 80,
      flexWrap:'wrap',
      color: '#F1F1F1',
      fontSize: 28,
    //   paddingVertical:1,
    //   paddingLeft:15,
  
    },
    detailVarText:{
        width:70,
    },
    feelsText: {
        fontSize:14,
        color:'#F1F1F1',
    },
    tempText: {
      fontSize:64,
      color: '#F1F1F1',
      paddingLeft:16,
    //   flexWrap: 'wrap', /*This just ensures if it goes beyond the box itll wrap and make a new line */
  
    },
    weatherIcon: { 
        width:125,
        height:125,
        zIndex:999,
    },
    placeName: {
        paddingTop:10,
        fontSize: 25,
        color: '#F1F1F1'
    },
    description:{
        textTransform: 'capitalize',
        fontSize:14,
        color: '#F1F1F1'

    },
    main:{
        fontSize:20,
        color: '#F1F1F1'
    },
  }); 
