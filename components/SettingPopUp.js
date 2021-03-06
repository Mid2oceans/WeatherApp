import { Modal, StyleSheet, TouchableOpacity } from "react-native";
import React from 'react'
import { View, Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import UnitButton from "./UnitButton";

export default function SettingPopUp({openSettings,setSettings,unitsSystem,setUnitsSystem}) {


    return (
            <Modal visible={openSettings} animationType = 'slide' presentationStyle ='overFullScreen' transparent = {true} position={'center'} >  
                <View style={styles.container} >
                    <View style={styles.buttonPlacement}>
                        <TouchableOpacity onPress = {() => setSettings(!openSettings)}>
                        <Ionicons name="close-circle" size={32} color="#F1F1F1" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.titleText}>Settings</Text>  
                    </View>
                    <View  style={styles.row}>
                        <Text style={styles.detailText}>Current Unit System: </Text>  
                        <UnitButton unitsSystem={unitsSystem} setUnitsSystem={setUnitsSystem} />

                    </View>
                    

                
                </View>

              
            </Modal>


    ) 
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top: '25%',
        left:'12%',
        width: 300,
        height: 400,
        backgroundColor: '#4E6969',
        borderRadius: 50,
        borderWidth:2,
    },
    buttonPlacement:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent: 'center',
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    titleText:{
        fontWeight:'bold',
        fontSize: 40,
        color:'#F1F1F1',
        textDecorationLine:'underline'
    },
    detailText:{
        fontSize: 24,
        color:'#F1F1F1',
    },

});