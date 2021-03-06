/** rnf is the quick type method to get this boiler plate */
import React from 'react'
import { View, StyleSheet, Text, Image} from 'react-native'

import WeatherDetail from './WeatherDetail';

export default function Weatherinfo({currentWeather, unitsSystem}) {
    const {
        main : {temp,feels_like,humidity,temp_max,temp_min},
        weather : [details],
        wind: {speed},
        name,

    } = currentWeather /** main: temp means in the json return file we just go in main class and get main.temp */
    const { icon, main, description } = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`   

    return (

      <View>

        <View style={styles.tempSquare}>
            <Text style = {styles.placeName}> {name}</Text>
            <Image style= {styles.weatherIcon} source={{url: iconUrl}}/>
          
        <View style = {styles.temp}>
        <Text style ={styles.main}>{main}</Text>
        <Text style ={styles.description}>{description}</Text>

        <Text style ={styles.tempText}>{Math.round(temp)}°</Text>
        <Text style ={styles.feelsText}>Feels Like: {Math.round(feels_like)}°</Text>
        
        </View> 

      </View>

      <View style = {styles.detailHolder}>

        <View style = {styles.detatailRow}>
        <WeatherDetail unitsSystem = {unitsSystem} detail="Wind Speed" detailVar = {speed}/>
        <WeatherDetail unitsSystem = {unitsSystem} detail="Humidity" detailVar = {humidity}/>

        </View>

        <View style = {styles.detatailRow}>
        <WeatherDetail unitsSystem = {unitsSystem} detail="temperature-high" detailVar = {temp_max}/>
        <WeatherDetail unitsSystem = {unitsSystem} detail="temperature-low" detailVar = {temp_min}/>

        </View>

      </View>
      
      </View>
    )
}

const styles = StyleSheet.create({
    tempSquare: {
      alignItems:'center',
      marginTop: 50,
      marginHorizontal: 93,
      backgroundColor: '#0D9DE3',
      width: 250,
      height: 320,
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
    detailHolder:{ /** This is the holder of all the rows, it makes the columns of the rows */
      marginTop:25,
      flexDirection: 'column',
      justifyContent:'center',
    },
    detatailRow:{
      flexDirection:'row',
      justifyContent:'center',
    },
  }); 