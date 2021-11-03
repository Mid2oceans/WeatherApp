import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'

import Weatherinfo from './components/Weatherinfo';
import UnitButton from './components/UnitButton';
import ReloadButton from './components/ReloadButton';
import SettingPopUp from './components/SettingPopUp';
import SettingsButton from './components/SettingsButton';

const WEATHER_API_KEY = 'f09fad3e3c7487a3d666c8e1175243bd';
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'
export default function App() {

  /** useState instead of classes; no this.state; returns current state and the function that updates it  */
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitsSystem,setUnitsSystem] = useState('Imperial');
  const [openSettings, setSettings] = useState(false);

  /** After each render */
  useEffect(() => {
    loadWeather(); /** did it this way so that we can hav try and catch in order to catch error in case if something like api mess up */
    },[unitsSystem] ) /** unitSystem is the dependency here*/

  async function loadWeather(){
    setCurrentWeather(null);
    setErrorMsg(null);
    try {

      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      } 

      let location = await Location.getCurrentPositionAsync({});

      const {latitude, longitude} = location.coords;
      const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}` /**back ticks in order to have avrs in the string */
      const response = await fetch(weatherUrl) /** this makes the request */

      const result = await response.json()

      if(response.ok){
        
        setCurrentWeather(result);
      }
      else{
        setErrorMsg(result.message)
        
      }



      
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  if(currentWeather){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style= {styles.topRowButtons}>

          <View style = {styles.UnitButton}>
            <SettingsButton setSettings={setSettings} openSettings={openSettings} />
            {/* <UnitButton unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} /> */}
          </View>

          <View style={styles.ReloadButton}>
            <ReloadButton load={loadWeather}/>
          </View>


        </View>

        <View style = {styles.SettingPopUp}>
            <SettingPopUp openSettings = {openSettings} setSettings = {setSettings}/>
        </View>
        
        
        <Weatherinfo currentWeather={currentWeather} unitsSystem = {unitsSystem} />
        
      </View>
    );
  }
  else if (errorMsg){
    return (
      <View style={styles.container}>
        
        <Text>{errorMsg}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  else{
    return(
      <View style = {styles.containerLoading}>
        <ActivityIndicator size = 'large' color = '#000000'/>
      </View>

    )
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfc4',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  containerLoading: {
    flex: 1,
    backgroundColor: '#cfcfc4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UnitButton:{
    width:'100%',
    alignItems:'flex-start',
    paddingLeft:25,
    paddingTop:40,
  },
  topRowButtons:{
    paddingTop:10,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  ReloadButton:{
    flexDirection:'row',
    paddingRight:55,
    paddingTop:40,
  },

  SettingsButton:{
    flexDirection:'row',
    paddingRight:55,
    paddingLeft:55,
    paddingTop:40,

  },

  SettingPopUp:{ /**Figure out why it is not centering */
    justifyContent:'center',
    alignItems: 'center',
    paddingLeft:24,
  }

});
