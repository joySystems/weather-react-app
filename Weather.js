import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';


const weatherOptions = {
    Thunderstorm: {
        iconName:"thunderstorm",
        gradient:['#5433ff', '#20bdff'],
        title:"Ужас, сегодня гроза!",
        subtitle:"Берите зонтик и не стойте в чистом поле под зонтом.",

    },
    Drizzle:{
        iconName:"rainy",
        gradient:['#616161', '#9bc5c3'],
        title:"Какая гадость эта морось!",
        subtitle:"Берите зонтик или плащ, и резиновые сапоги.",
    },
    Rain:{
        iconName:"rainy",
        gradient:['#616161', '#9bc5c3'],
        title:"Кажется, дождь собирается!",
        subtitle:"Берите зонтик или плащ, и резиновые сапоги.",
    },
    Snow:{
        iconName:"snow",
        gradient:['#2193b0', '#6dd5ed'],
        title:"Выпал беленький снежок!",
        subtitle:"Одевай варежки и беги лепить снеговика.",
    },
    Mist:{
        iconName:"ios-cloudy",
        gradient:['#000000', '#434343'],
        title:"Страна туманов!",
        subtitle:"Не будь ежиком - не потеряйся.",
    },
    Smoke:{
        iconName:"ios-cloudy",
        gradient:['#000000', '#434343'],
        title:"Страна туманов!",
        subtitle:"Не будь ежиком - не потеряйся.",
    },
    Haze:{
        iconName:"ios-cloudy",
        gradient:['#000000', '#434343'],
        title:"Страна туманов!",
        subtitle:"Не будь ежиком - не потеряйся.",
    },
    Fog:{
        iconName:"ios-cloudy",
        gradient:['#000000', '#434343'],
        title:"Страна туманов!",
        subtitle:"Не будь ежиком - не потеряйся.",
    },
    Dust:{
        iconName:"ios-cloudy",
        gradient:['#000000', '#434343'],
        title:"Пылевая буря!",
        subtitle:"Это вам не Дюна, но пыли может намести.",
    },
    Clear:{
        iconName:"sunny",
        gradient:['#005c97', '#363795'],
        title:"Ясно солнышко!",
        subtitle:"Небо чистое - иди гулять.",
    },
    Clouds:{
        iconName:"cloudy",
        gradient:['#606c88', '#3f4c6b'],
        title:"Облака - белогривые лошадки",
        subtitle:"Красота - не холодно, не жарко.",
    },



}
export default function Weather ({temp, conditions}) {

return (
    
<LinearGradient
// Button Linear Gradient
    colors={weatherOptions[conditions].gradient}
    style={styles.container}>

    <View style={styles.halfContainer}> 
        <Ionicons name={weatherOptions[conditions].iconName} size={96} color="white"/>
        <Text style={styles.temp}>{temp}°</Text>
    </View>

    <View style={{...styles.halfContainer, ...styles.textContainer}} >
        <Text style={styles.title} >{weatherOptions[conditions].title}</Text>
        <Text style={styles.subtitle} >{weatherOptions[conditions].subtitle}</Text>
    </View>
    
</LinearGradient>

);


}


Weather.propTypes = {


    temp: PropTypes.number.isRequired,
    conditions: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke", "Haze", "Fog", "Dust", "Clear", "Clouds"]).isRequired


}


styles = StyleSheet.create({

container: {

    flex:1,
    justifyContent:"center",
    alignItems:"center",

},

halfContainer: {

    flex:1,
    justifyContent:"center",
    alignItems:"center",
}, 
temp: {

    fontSize:42,
    color:"#ffffff",
},
title:{
    color:"#ffffff",
    fontWeight:"300",
    fontSize:44,
    marginBottom:10,

},
subtitle:{
    color:"#ffffff",
    fontWeight:"600",
    fontSize:24,
},

textContainer:{
    paddingHorizontal:20,
    alignItems:"flex-start",

},

})