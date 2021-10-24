import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function WeatherDetail({detail, detailVar}) {
    return (
        <View style={styles.detailSquare}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    detailSquare: {
      alignItems:'center',
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
    temp: {
      alignItems: 'center',
      paddingVertical:1,
      paddingHorizontal:37,
  
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
