import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Loading() {

    return (
    <View style={styles.container}>
<Text style={styles.text}>
    Получение погоды...
</Text>

    </View>);


}


const styles = StyleSheet.create({

container:{
    flex: 1,
    justifyContent: 'flex-end',
    //paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#000000',
    alignItems: 'center',

},
text:{
    color:"#2c2c2c",
    fontSize: 30,
}


})