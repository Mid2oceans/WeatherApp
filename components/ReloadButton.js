import React from 'react'
import { View, Text, Platform,StyleSheet, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'



export default function ReloadButton({load}) {
    const reloadIconName = Platform.OS ==='ios' ? 'ios-refresh' : 'md-refresh';
    return (
        <View style = {styles.container}>
        <View style = {styles.button}>
            <TouchableOpacity onPress={load}>
                <Ionicons name={reloadIconName} size={24} color="#F1F1F1" />
            </TouchableOpacity>
            
        </View>

        </View>

    )
} 


const styles = StyleSheet.create({
    container: {
        // position:'absolute',
        // top:40 ,
        // right:20,
    },
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


  });
